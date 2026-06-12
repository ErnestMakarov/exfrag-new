import HeroBg from "../../../assets/images/hero-light-img.png";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden bg-black">
      <img
        src={HeroBg}
        alt="EXFRAG hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center px-6 text-center text-white">
        <h1 className="text-[28px] font-light uppercase tracking-[0.55em] sm:text-[42px] md:text-[56px]">
          EXFRAG
        </h1>

        <p className="mt-3 text-[9px] font-light uppercase tracking-[0.45em] sm:text-[11px]">
          Fragments from the past
        </p>
      </div>

      <a
        href="#catalog"
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 text-[9px] uppercase tracking-[0.35em] text-white underline underline-offset-4 transition-opacity duration-300 hover:opacity-60"
      >
        Explore
      </a>
    </section>
  );
}