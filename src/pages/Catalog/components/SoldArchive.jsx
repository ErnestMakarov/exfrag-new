import ProductCard from "../../../components/ProductCard/ProductCard";

export default function SoldArchive({ products }) {
  if (!products.length) return null;

  return (
    <section className="mt-24 border-t border-black/10 pt-14">
      <div className="mb-10 max-w-[720px]">
        <h2 className="text-[16px] font-medium uppercase tracking-[0.18em]">
          Sold archive pieces
        </h2>

        <p className="mt-5 text-[12px] uppercase leading-7 tracking-[0.14em] opacity-60">
          These pieces are no longer available. You can open any sold item and
          request a similar reconstruction depending on available materials.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}