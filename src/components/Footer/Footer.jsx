import { Link } from "react-router-dom";

import FooterDropImg from "../../assets/images/footer/footer-drop.png";
import FooterAboutImg from "../../assets/images/footer/footer-about.png";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-black font-['Montserrat'] text-white">
      <div className="grid border-y border-white/10 md:grid-cols-2">
        <Link
          to="/catalog"
          className="group relative min-h-[160px] overflow-hidden border-b border-white/10 md:min-h-[190px] md:border-b-0 md:border-r"
        >
          <img
            src={FooterDropImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 p-6 md:p-10">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.24em] md:text-[13px] md:tracking-[0.28em]">
              New Drop —
            </h2>
            <p className="mt-5 text-[9px] italic uppercase tracking-[0.1em] opacity-80 md:text-[10px]">
              Discover the latest pieces
            </p>
            <p className="mt-2 text-[9px] italic uppercase tracking-[0.1em] opacity-80 md:text-[10px]">
              Archive 001
            </p>
          </div>
        </Link>

        <Link
          to="/about"
          className="group relative min-h-[160px] overflow-hidden md:min-h-[190px]"
        >
          <img
            src={FooterAboutImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 p-6 md:p-10">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.24em] md:text-[13px] md:tracking-[0.28em]">
              About EXFRAG —
            </h2>
            <p className="mt-5 text-[9px] italic uppercase tracking-[0.1em] opacity-80 md:text-[10px]">
              Built from fragments
            </p>
            <p className="mt-2 text-[9px] italic uppercase tracking-[0.1em] opacity-80 md:text-[10px]">
              of the past.
            </p>
          </div>
        </Link>
      </div>

      <div className="mx-auto grid max-w-[1720px] gap-10 px-6 py-10 text-[10px] uppercase tracking-[0.14em] text-white/65 sm:px-8 md:grid-cols-4 md:gap-12 md:py-12 md:tracking-[0.18em]">
        <div className="min-w-0">
          <Link to="/" className="text-[15px] tracking-[0.4em] text-white">
            EXFRAG
          </Link>
          <p className="mt-8">© 2026 EXFRAG</p>
          <p className="mt-2">All rights reserved.</p>
        </div>

        <nav className="flex min-w-0 flex-col gap-3">
          <Link to="/catalog" className="transition-colors hover:text-white">
            Catalog
          </Link>
          <Link to="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link to="/gallery" className="transition-colors hover:text-white">
            Gallery
          </Link>
          <Link to="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex min-w-0 flex-col gap-3">
          <a
            href="https://www.yaga.ee/exfrag"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Yaga
          </a>
          <a
            href="https://www.vinted.pl/member/3129043410"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Vinted
          </a>
        </div>

        <div className="min-w-0">
          <p className="text-white/80">Contact us</p>

          <input
            type="email"
            placeholder="Your email"
            className="mt-4 w-full min-w-0 border-b border-white/15 bg-transparent pb-3 text-white outline-none placeholder:text-white/25 focus:border-white/50"
          />

          <div className="mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <a
              href="https://www.instagram.com/exfrag"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="mailto:exfrag.contact@gmail.com"
              className="break-all transition-colors hover:text-white sm:break-normal"
            >
              exfrag.contact@gmail.com
            </a>

            <a
              href="https://www.tiktok.com/@.exfrag"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}