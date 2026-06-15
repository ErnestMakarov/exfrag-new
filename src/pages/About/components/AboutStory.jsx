import FooterAboutImg from "../../../assets/images/footer/footer-about.png";

export default function AboutStory() {
  return (
    <section className="bg-white px-8 py-20 text-black md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <div className="mb-10 h-px w-14 bg-black/30" />

          <h2 className="max-w-[520px] text-[22px] font-medium uppercase leading-[1.6] tracking-[0.22em] md:text-[30px]">
            We work with what already exists.
          </h2>

          <p className="mt-8 max-w-[520px] text-[12px] uppercase leading-7 tracking-[0.17em] opacity-70">
            EXFRAG is an archival clothing brand focused on reconstruction,
            limited pieces and material memory. Some garments are built from
            existing clothes. Some are made from new fabric. Every release is
            shaped by hand, availability of materials and the idea of making
            every piece feel individual.
          </p>

          <p className="mt-8 max-w-[520px] text-[12px] uppercase leading-7 tracking-[0.17em] opacity-70">
            Reconstructed pieces may include vintage denim, old garments,
            textile fragments and materials with visible traces of time. New
            fabric pieces are made from unused fabric, but still follow the same
            EXFRAG language: raw structure, limited production and archive
            inspired silhouettes.
          </p>
        </div>

        <div className="relative h-[340px] overflow-hidden bg-black md:h-[460px]">
          <img
            src={FooterAboutImg}
            alt="EXFRAG archive landscape"
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}