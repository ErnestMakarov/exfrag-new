import { useState } from "react";

import { products } from "../../data/products";
import { soldProducts } from "../../data/soldProducts";
import ProductCard from "../../components/ProductCard/ProductCard";

import CatalogFilters from "./components/CatalogFilters";
import SoldArchive from "./components/SoldArchive";

const categories = ["all", "tops", "bottoms", "bags", "outerwear", "accessories"];

const materialFilters = [
  { label: "all materials", value: "all" },
  { label: "reconstructed", value: "reconstructed" },
  { label: "new fabric", value: "new-fabric" },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeMaterial, setActiveMaterial] = useState("all");

  const availableItems = products.filter((product) => {
    const categoryMatch =
      activeCategory === "all" || product.category === activeCategory;

    const materialMatch =
      activeMaterial === "all" || product.materialOrigin === activeMaterial;

    return categoryMatch && materialMatch;
  });

  return (
    <section className="bg-white px-6 py-32 text-black md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <CatalogFilters
          categories={categories}
          materialFilters={materialFilters}
          activeCategory={activeCategory}
          activeMaterial={activeMaterial}
          setActiveCategory={setActiveCategory}
          setActiveMaterial={setActiveMaterial}
        />

        {availableItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
            {availableItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[260px] items-center justify-center border border-black/10">
            <p className="text-[11px] uppercase tracking-[0.2em] opacity-50">
              No available pieces found
            </p>
          </div>
        )}

        <SoldArchive products={soldProducts} />
      </div>
    </section>
  );
}