import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import HeaderLogo from "../../assets/images/header-logo.png";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "CATALOG", path: "/catalog" },
  { title: "ABOUT", path: "/about" },
  { title: "GALLERY", path: "/gallery" },
  { title: "CONTACT", path: "/contact" },
];

const externalLinks = [
  ["YAGA", "https://www.yaga.ee/exfrag"],
  ["VINTED", "https://www.vinted.pl/member/3129043410"],
  ["INSTAGRAM", "https://www.instagram.com/exfrag.eu"],
  ["TIKTOK", "https://www.tiktok.com/@.exfrag"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full font-['Montserrat'] transition-all duration-500 ${
        isScrolled && !isOpen
          ? "bg-white/90 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`relative z-[1000] mx-auto flex max-w-[1720px] items-center justify-between px-6 transition-all duration-500 md:px-8 ${
          isScrolled && !isOpen ? "py-3 md:py-4" : "py-4 md:py-6"
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={HeaderLogo}
            alt="EXFRAG"
            className={`w-[82px] transition duration-300 md:w-[92px] ${
              isOpen ? "invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `group relative text-[10px] font-medium uppercase tracking-[0.32em] text-black transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`
              }
            >
              {link.title}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-10 md:flex">
          {externalLinks.slice(0, 2).map(([title, href]) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[10px] font-medium uppercase tracking-[0.32em] text-black opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              {title}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[1001] flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-[2px] w-7 transition-all duration-500 ${
              isOpen ? "rotate-45 bg-white" : "-translate-y-1.5 bg-black"
            }`}
          />
          <span
            className={`absolute h-[2px] w-7 transition-all duration-500 ${
              isOpen ? "-rotate-45 bg-white" : "translate-y-1.5 bg-black"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[998] flex h-dvh flex-col overflow-hidden bg-black/90 px-6 text-white backdrop-blur-md transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 text-[20px] font-medium uppercase tracking-[0.18em]">
          {navLinks.map((link, index) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="group relative transition-all duration-300 hover:tracking-[0.24em] hover:opacity-70"
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              {link.title}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="relative z-10 mb-10 border-t border-white/10 pt-6">
          <div className="grid grid-cols-2 gap-y-4 text-center text-[12px] font-medium uppercase tracking-[0.18em]">
            {externalLinks.map(([title, href]) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-opacity duration-300 hover:opacity-60"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}