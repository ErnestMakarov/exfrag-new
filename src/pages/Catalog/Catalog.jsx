import { useState } from "react";

import { products } from "../../data/products";
import { soldProducts } from "../../data/soldProducts";
import ProductCard from "../../components/ProductCard/ProductCard";

const categories = ["all", "tops", "bottoms", "bags", "outerwear", "accessories"];

const materialFilters = [
  { label: "all materials", value: "all" },
  { label: "reconstructed", value: "reconstructed" },
  { label: "new fabric", value: "new-fabric" },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeMaterial, setActiveMaterial] = useState("all");

  const filterProducts = (items) =>
    items.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const materialMatch =
        activeMaterial === "all" || product.materialOrigin === activeMaterial;

      return categoryMatch && materialMatch;
    });

  const availableItems = filterProducts(products);
  const soldItems = filterProducts(soldProducts);

  return (
    <section className="bg-white px-6 py-32 text-black md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-[18px] font-medium uppercase tracking-[0.04em]">
                Catalog
              </h1>

              <p className="mt-4 text-[11px] italic uppercase opacity-60">
                Available archive pieces
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.08em] md:gap-9">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
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

          <div className="flex flex-wrap gap-3 border-t border-black/10 pt-6">
            {materialFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveMaterial(filter.value)}
                className={`border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeMaterial === filter.value
                    ? "border-black bg-black text-white"
                    : "border-black/20 text-black/80 hover:border-black hover:text-black"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
          {availableItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {soldItems.length > 0 && (
          <div className="mt-24 border-t border-black/10 pt-14">
            <div className="mb-10 max-w-[620px]">
              <h2 className="text-[16px] font-medium uppercase tracking-[0.18em]">
                Sold archive pieces
              </h2>

              <p className="mt-5 text-[12px] uppercase leading-7 tracking-[0.14em] opacity-60">
                These pieces are no longer available. You can open any sold item
                and request a similar reconstruction depending on available
                materials.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
              {soldItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}