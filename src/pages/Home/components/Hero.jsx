import HeroBg from "../../../assets/images/hero-light-img.png";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden bg-black">
      <img
        src={HeroBg}
        alt="EXFRAG hero background"
        className="absolute inset-0 h-full w-full animate-[heroZoom_12s_ease-out_forwards] object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.5)_100%)]" />

      <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center px-6 text-center text-white">
        <p className="mb-6 animate-[fadeUp_1.2s_ease-out_0.2s_both] text-[9px] uppercase tracking-[0.45em] text-white/70">
          welcome to the world of
        </p>

        <h1 className="animate-[fadeUp_1.4s_ease-out_0.45s_both] text-[34px] font-light uppercase tracking-[0.55em] sm:text-[48px] md:text-[68px]">
          EXFRAG
        </h1>

        <p className="mt-4 animate-[fadeUp_1.4s_ease-out_0.75s_both] text-[9px] font-light uppercase tracking-[0.45em] text-white/85 sm:text-[11px]">
          Fragments from the past
        </p>
      </div>

      <a
        href="#catalog"
        className="group absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-white transition-opacity duration-300 hover:opacity-70"
      >
        Explore
        <span className="h-px w-16 origin-center animate-[linePulse_2s_ease-in-out_infinite] bg-white" />
      </a>
    </section>
  );
}