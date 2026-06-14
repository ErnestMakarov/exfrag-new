import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const isSold = product.status === "Sold";

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group relative block border border-black/10 bg-white"
    >
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden p-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {isSold && (
          <>
            <div className="absolute inset-0 bg-black/[0.03]" />

            <div className="absolute left-4 top-4 bg-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
              Sold
            </div>
          </>
        )}
      </div>

      <div className="px-2 pb-3 text-[12px]">
        <div className="flex items-center justify-between">
          <span>{product.date}</span>
          <span>≈ {product.size}</span>
        </div>

        <p className="mt-2 font-bold">{product.price}€</p>
      </div>
    </Link>
  );
}