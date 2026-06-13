import { useState } from "react";
import { Link } from "react-router-dom";

import { products } from "../../../data/products";
import ProductCard from "../../../components/ProductCard/ProductCard";

const categories = ["all", "tops", "bottoms", "bags", "outerwear", "accessories"];

export default function CatalogPreview() {
  const [activeCategory, setActiveCategory] = useState("all");

  const latestProducts = [...products].slice(-8).reverse();

  const filteredProducts =
    activeCategory === "all"
      ? latestProducts
      : latestProducts.filter((product) => product.category === activeCategory);

  return (
    <section id="catalog" className="bg-white px-6 py-16 text-black md:px-10 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[16px] font-medium uppercase tracking-[0.04em]">
              New Drop
            </h2>

            <p className="mt-4 text-[11px] italic uppercase opacity-60">
              Discover the latest pieces
            </p>

            <p className="mt-4 text-[11px] italic">11.05.26</p>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.08em] md:gap-9">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`transition-opacity duration-300 hover:opacity-100 ${
                  activeCategory === category
                    ? "font-semibold underline underline-offset-4 opacity-100"
                    : "opacity-60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/catalog"
            className="text-[11px] uppercase underline underline-offset-4 transition-opacity duration-300 hover:opacity-60"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}