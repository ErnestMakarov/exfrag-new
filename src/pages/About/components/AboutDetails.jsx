import DetailOne from "../../../assets/products/1-1.png";
import DetailTwo from "../../../assets/products/1-2.png";
import DetailThree from "../../../assets/products/1-3.png";

const details = [
  {
    title: "Raw fabrics",
    text: "Carefully selected materials left in their natural state.",
    image: DetailOne,
  },
  {
    title: "Distressed finishes",
    text: "Surfaces that show wear, time and transformation.",
    image: DetailTwo,
  },
  {
    title: "Archive references",
    text: "Inspired by garments, era and cultural remnants.",
    image: DetailThree,
  },
];

export default function AboutDetails() {
  return (
    <section className="bg-white px-8 pb-24 text-black">
      <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-3">
        {details.map((item) => (
          <article key={item.title} className="group">
            <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em]">
              {item.title} —
            </h2>

            <p className="mt-4 max-w-[300px] text-[10px] uppercase leading-6 tracking-[0.16em] opacity-60">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}