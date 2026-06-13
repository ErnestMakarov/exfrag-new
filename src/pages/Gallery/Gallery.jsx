import { useState } from "react";

import ImgOne from "../../assets/products/1-1.png";
import ImgTwo from "../../assets/products/1-2.png";
import ImgThree from "../../assets/products/1-3.png";

const galleryImages = [
  ImgOne,
  ImgTwo,
  ImgThree,
  ImgOne,
  ImgThree,
  ImgTwo,
  ImgOne,
  ImgTwo,
  ImgThree,
  ImgOne,
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="bg-white px-4 py-28 md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="columns-2 gap-3 sm:columns-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="mb-3 cursor-pointer break-inside-avoid overflow-hidden md:mb-4"
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full transition duration-500 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute right-8 top-8 text-5xl text-white transition hover:rotate-90"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>

          <button
            className="absolute left-6 text-5xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <img
            src={galleryImages[activeImage]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 text-5xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}