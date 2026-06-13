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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-black" : "text-black";
  const lineColor = isScrolled ? "bg-black" : "bg-black";

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full font-['Montserrat'] transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1720px] items-center justify-between px-8 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="relative z-[1000]"
        >
          <img src={HeaderLogo} alt="EXFRAG" className="w-[92px]" />
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `group relative text-[10px] font-medium uppercase tracking-[0.32em] ${textColor} transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`
              }
            >
              {link.title}
              <span
                className={`absolute -bottom-2 left-0 h-px w-0 ${lineColor} transition-all duration-300 group-hover:w-full`}
              />
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-10 md:flex">
          {[
            ["YAGA", "https://www.yaga.ee/exfrag"],
            ["VINTED", "https://www.vinted.pl/member/3129043410"],
          ].map(([title, href]) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative text-[10px] font-medium uppercase tracking-[0.32em] ${textColor} opacity-70 transition-opacity duration-300 hover:opacity-100`}
            >
              {title}
              <span
                className={`absolute -bottom-2 left-0 h-px w-0 ${lineColor} transition-all duration-300 group-hover:w-full`}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[1000] flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-[2px] w-8 transition-all duration-300 ${
              isOpen ? "rotate-45 bg-white" : "-translate-y-1.5 bg-black"
            }`}
          />
          <span
            className={`absolute h-[2px] w-8 transition-all duration-300 ${
              isOpen ? "-rotate-45 bg-white" : "translate-y-1.5 bg-black"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[998] flex flex-col bg-black/85 px-8 py-6 text-white backdrop-blur-sm transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-[18px] font-medium uppercase tracking-[0.08em]">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="transition-all duration-300 hover:tracking-[0.18em] hover:opacity-60"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="mb-8 flex justify-center gap-16 text-[16px] font-medium uppercase underline underline-offset-4">
          <a
            href="https://www.vinted.pl/member/3129043410"
            target="_blank"
            rel="noopener noreferrer"
          >
            VINTED
          </a>

          <a
            href="https://www.yaga.ee/exfrag"
            target="_blank"
            rel="noopener noreferrer"
          >
            YAGA
          </a>
        </div>
      </div>
    </header>
  );
}