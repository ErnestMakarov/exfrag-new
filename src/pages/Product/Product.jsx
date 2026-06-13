import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { products } from "../../data/products";

export default function Product() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  const [activeImage, setActiveImage] = useState(product?.images?.[0]);

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white text-black">
        Product not found
      </section>
    );
  }

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
                  onClick={() => setActiveImage(image)}
                  className={`border ${
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

            <div className="flex min-h-[520px] items-center justify-center border border-black/10 p-10">
              <img
                src={activeImage}
                alt={product.name}
                className="max-h-[700px] w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="pt-10">
          <p className="text-[11px] uppercase tracking-[0.25em] opacity-50">
            EXFRAG / {product.category}
          </p>

          <h1 className="mt-5 text-[32px] font-medium uppercase tracking-[0.08em]">
            {product.name}
          </h1>

          <p className="mt-3 text-[20px] font-semibold">{product.price}€</p>

          <p
            className={`mt-4 text-[11px] uppercase tracking-[0.18em] ${
              product.status === "In Stock" ? "text-green-700" : "text-red-700"
            }`}
          >
            {product.status}
          </p>

          <div className="mt-10">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
              Description
            </h2>

            <p className="mt-4 max-w-[420px] text-[13px] leading-6 opacity-70">
              {product.description}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
              Materials
            </h2>

            <p className="mt-4 text-[13px] opacity-70">{product.materials}</p>
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
        </div>
      </div>
    </section>
  );
}