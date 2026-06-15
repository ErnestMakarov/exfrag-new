import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { products } from "../../data/products";
import { soldProducts } from "../../data/soldProducts";

const materialOriginLabels = {
  reconstructed: "Reconstructed material",
  "new-fabric": "New fabric",
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Product() {
  const { slug } = useParams();

  const allProducts = [...products, ...soldProducts];
  const product = allProducts.find((item) => item.slug === slug);

  const [activeImage, setActiveImage] = useState(product?.images?.[0]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white text-black">
        Product not found
      </section>
    );
  }

  const isSold = product.status === "Sold";

  const handleRequest = async (event) => {
    event.preventDefault();

    if (!email) {
      setStatus("Enter your email.");
      return;
    }

    setStatus("Sending...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: "EXFRAG product request",
          from_email: email,
          message: `Request for similar piece: ${product.name}`,
          product_name: product.name,
          product_slug: product.slug,
        },
        PUBLIC_KEY
      );

      setStatus("Request sent.");
      setEmail("");
    } catch {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen bg-white px-6 py-28 text-black md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Link
            to="/catalog"
            className="mb-6 inline-block text-[11px] uppercase tracking-[0.12em] opacity-70 transition-opacity hover:opacity-100"
          >
            ← Back to catalog
          </Link>

          <div className="grid gap-6 md:grid-cols-[90px_1fr]">
            <div className="flex gap-3 md:flex-col">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`border transition-colors ${
                    activeImage === image ? "border-black" : "border-black/10"
                  }`}
                >
                  <img
                    src={image}
                    alt={product.name}
                    className="h-24 w-20 object-cover md:h-28 md:w-full"
                  />
                </button>
              ))}
            </div>

            <div className="relative flex min-h-[520px] items-center justify-center border border-black/10 p-8 md:p-10">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-[700px] w-full object-contain"
              />

              {isSold && (
                <span className="absolute left-8 top-8 bg-black px-5 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white">
                  Sold
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="pt-10">
          <p className="text-[11px] uppercase tracking-[0.25em] opacity-50">
            EXFRAG / {product.category}
          </p>

          <h1 className="mt-5 text-[30px] font-medium uppercase tracking-[0.12em] md:text-[36px]">
            {product.name}
          </h1>

          <p className="mt-4 text-[20px] font-semibold">{product.price}€</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span
              className={`text-[11px] uppercase tracking-[0.18em] ${
                isSold ? "text-red-700" : "text-green-700"
              }`}
            >
              {product.status}
            </span>

            <span className="text-[11px] uppercase tracking-[0.18em] opacity-50">
              /
            </span>

            <span className="text-[11px] uppercase tracking-[0.18em] opacity-70">
              {materialOriginLabels[product.materialOrigin]}
            </span>
          </div>

          <div className="mt-10">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
              Description
            </h2>

            <p className="mt-4 max-w-[460px] text-[13px] leading-7 opacity-70">
              {product.description}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
              Materials
            </h2>

            <p className="mt-4 text-[13px] opacity-70">{product.materials}</p>

            {product.originDescription && (
              <p className="mt-3 max-w-[460px] text-[13px] leading-6 opacity-50">
                {product.originDescription}
              </p>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
              Measurements
            </h2>

            <div className="mt-4 border border-black/10">
              {Object.entries(product.measurements).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-black/10 px-4 py-3 text-[13px] last:border-b-0"
                >
                  <span className="uppercase opacity-60">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {!isSold ? (
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={product.yagaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center bg-black text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
              >
                Buy on Yaga
              </a>

              <a
                href={product.vintedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center border border-black text-[12px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white"
              >
                Buy on Vinted
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleRequest}
              className="mt-8 border border-black/10 p-6"
            >
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                Request similar piece
              </h2>

              <p className="mt-4 text-[13px] leading-6 opacity-60">
                This piece is sold. Leave your email and we will let you know if
                a similar reconstruction can be made.
              </p>

              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-6 w-full border-b border-black/20 bg-transparent py-3 text-[13px] outline-none placeholder:text-black/30 focus:border-black"
              />

              <button
                type="submit"
                className="mt-6 flex h-12 w-full items-center justify-center bg-black text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-80"
              >
                Send request
              </button>

              {status && (
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] opacity-60">
                  {status}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}