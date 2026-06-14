import { useState } from "react";
import emailjs from "@emailjs/browser";

import ContactHeroImg from "../../assets/images/contact/contact-hero.png";
import ContactImg from "../../assets/images/contact/contact-img.png";

const SERVICE_ID = "service_o3f9qla";
const TEMPLATE_ID = "template_qwvs75t";
const PUBLIC_KEY = "FRg2d-gy8wK3aDlVA";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "exfrag.contact@gmail.com",
        },
        PUBLIC_KEY
      );

      setStatus("Message sent.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-black">
        <img
          src={ContactHeroImg}
          alt="EXFRAG contact"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1720px] items-center px-8 text-white">
          <div>
            <h1 className="text-[32px] font-light uppercase tracking-[0.5em] md:text-[48px]">
              Contact
            </h1>

            <p className="mt-8 max-w-[360px] text-[12px] font-light uppercase leading-7 tracking-[0.28em]">
              We are here <br />
              to answer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20 text-black md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.75fr_1.25fr] md:items-start">
          <div>
            <div className="mb-10 h-px w-14 bg-black/30" />

            <p className="max-w-[360px] text-[12px] uppercase leading-7 tracking-[0.18em]">
              Have a question <br />
              or want to collaborate? <br />
              Reach out to us.
            </p>

            <p className="mt-10 max-w-[360px] text-[12px] uppercase leading-7 tracking-[0.18em]">
              We will get back <br />
              to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid gap-8">
              <label className="grid gap-3 text-[11px] uppercase tracking-[0.2em]">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border-b border-black/20 bg-transparent py-3 text-[13px] normal-case tracking-normal outline-none placeholder:text-black/30 focus:border-black"
                />
              </label>

              <label className="grid gap-3 text-[11px] uppercase tracking-[0.2em]">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="border-b border-black/20 bg-transparent py-3 text-[13px] normal-case tracking-normal outline-none placeholder:text-black/30 focus:border-black"
                />
              </label>

              <label className="grid gap-3 text-[11px] uppercase tracking-[0.2em]">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  className="resize-none border-b border-black/20 bg-transparent py-3 text-[13px] normal-case tracking-normal outline-none placeholder:text-black/30 focus:border-black"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-10 h-12 min-w-[190px] bg-black px-8 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80"
            >
              Send message →
            </button>

            {status && (
              <p className="mt-5 text-[11px] uppercase tracking-[0.18em] opacity-60">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="grid bg-black text-white md:grid-cols-[0.75fr_1.25fr]">
        <div className="px-8 py-16 md:px-12 md:py-20">
          <h2 className="text-[14px] font-medium uppercase tracking-[0.28em]">
            Contact info —
          </h2>

          <div className="mt-10 grid gap-8 text-[11px] uppercase tracking-[0.18em] text-white/70">
            <div>
              <p className="text-white">Email</p>
              <a
                href="mailto:exfrag.contact@gmail.com"
                className="mt-3 block break-all transition-colors hover:text-white"
              >
                exfrag.contact@gmail.com
              </a>
            </div>

            <div>
              <p className="text-white">Instagram</p>
              <a
                href="https://www.instagram.com/exfrag.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block transition-colors hover:text-white"
              >
                @exfrag.eu
              </a>
            </div>

            <div>
              <p className="text-white">TikTok</p>
              <a
                href="https://www.tiktok.com/@.exfrag"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block transition-colors hover:text-white"
              >
                @.exfrag
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden md:min-h-[430px]">
          <img
            src={ContactImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>
    </>
  );
}