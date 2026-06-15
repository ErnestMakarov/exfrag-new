import AboutHeroImg from "../../../assets/images/about/about-hero.png";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-black">
      <img
        src={AboutHeroImg}
        alt="EXFRAG about background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1720px] items-center px-8 text-white">
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.32em] opacity-70">
            Archive / Reconstruction / One of one
          </p>

          <h1 className="text-[28px] font-light uppercase tracking-[0.45em] md:text-[46px]">
            About EXFRAG
          </h1>

          <p className="mt-8 max-w-[520px] text-[12px] font-light uppercase leading-7 tracking-[0.26em]">
            Garments built from fragments, existing materials and limited
            handmade construction.
          </p>
        </div>
      </div>
    </section>
  );
}