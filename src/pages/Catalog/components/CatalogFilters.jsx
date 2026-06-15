export default function CatalogFilters({
  categories,
  materialFilters,
  activeCategory,
  activeMaterial,
  setActiveCategory,
  setActiveMaterial,
}) {
  return (
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
  );
}