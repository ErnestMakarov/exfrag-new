import DetailOne from "../../../assets/images/about/about-first.png";
import DetailTwo from "../../../assets/images/about/about-second.png";
import DetailThree from "../../../assets/images/about/about-third.png";

const details = [
  {
    title: "Reconstructed material",
    text: "Existing garments are deconstructed, reshaped and rebuilt into new one-of-one pieces.",
    image: DetailOne,
  },
  {
    title: "New fabric",
    text: "Some pieces are constructed from unused fabric while keeping the same raw EXFRAG silhouette.",
    image: DetailTwo,
  },
  {
    title: "Request similar",
    text: "Sold pieces can inspire future reconstructions. You can request a similar piece depending on available materials.",
    image: DetailThree,
  },
];

export default function AboutDetails() {
  return (
    <section className="bg-white px-8 pb-24 text-black">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 grid gap-8 border-y border-black/10 py-12 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] opacity-50">
              Material categories
            </p>
          </div>

          <p className="max-w-[520px] text-[12px] uppercase leading-7 tracking-[0.16em] opacity-70 md:col-span-2">
            In the catalog, each product is marked by material origin. This
            helps separate reconstructed archive pieces from items made using
            new fabric.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {details.map((item) => (
            <article key={item.title} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em]">
                {item.title} —
              </h2>

              <p className="mt-4 max-w-[330px] text-[10px] uppercase leading-6 tracking-[0.16em] opacity-60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}