import AboutHeroImg from "../../../assets/images/about/about-hero.png";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-black">
      <img
        src={AboutHeroImg}
        alt="EXFRAG about background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex h-full max-w-[1720px] mx-auto items-center px-8 text-white">
        <div>
          <h1 className="text-[28px] font-light uppercase tracking-[0.45em] md:text-[46px]">
            About EXFRAG
          </h1>

          <p className="mt-8 max-w-[420px] text-[12px] font-light uppercase leading-7 tracking-[0.28em]">
            Built from fragments <br />
            of the past.
          </p>
        </div>
      </div>
    </section>
  );
}