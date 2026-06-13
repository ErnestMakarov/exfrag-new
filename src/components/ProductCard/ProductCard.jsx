import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block border border-black/10 bg-white"
    >
      <div className="flex aspect-[4/5] items-center justify-center overflow-hidden p-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-2 pb-3 text-[12px]">
        <div className="flex items-center justify-between">
          <span>{product.date}</span>
          <span>{product.size}</span>
        </div>

        <p className="mt-2 font-bold">{product.price}$</p>
      </div>
    </Link>
  );
}