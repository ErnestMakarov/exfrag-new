import FooterAboutImg from "../../../assets/images/footer/footer-about.png";

export default function AboutStory() {
  return (
    <section className="bg-white px-8 py-20 text-black md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.75fr_1.25fr] md:items-center">
        <div>
          <div className="mb-10 h-px w-14 bg-black/30" />

          <p className="max-w-[420px] text-[12px] uppercase leading-7 tracking-[0.18em]">
            EXFRAG is an archival clothing brand working with what already
            exists.
          </p>

          <p className="mt-8 max-w-[420px] text-[12px] uppercase leading-7 tracking-[0.18em]">
            Our core material is vintage denim — garments with history, wear
            and character.
          </p>

          <p className="mt-8 max-w-[420px] text-[12px] uppercase leading-7 tracking-[0.18em]">
            Instead of producing from scratch, we deconstruct, rethink and
            rebuild. Each piece is reworked by hand into something new while
            preserving traces of its past.
          </p>
        </div>

        <div className="relative h-[320px] overflow-hidden bg-black md:h-[420px]">
          <img
            src={FooterAboutImg}
            alt="EXFRAG archive landscape"
            className="h-full w-full object-cover opacity-90"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}