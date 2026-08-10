"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description?: string;
};

type LightboxGalleryProps = {
  images: GalleryImage[];
};

export function LightboxGallery({ images }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i !== null ? (i - 1 + images.length) % images.length : null,
        );
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, images.length]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-square overflow-hidden rounded-sm border border-border-strong bg-surface-card transition-all hover:border-gold/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${image.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-sm text-foreground">{image.title}</p>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].title}
        >
          <button
            type="button"
            className="absolute inset-0"
            onClick={close}
            aria-label="Close lightbox"
          />
          <div className="relative z-10 max-h-[85vh] max-w-4xl">
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 text-gold-text"
              aria-label="Close"
            >
              Close ✕
            </button>
            <div className="relative aspect-square w-[min(90vw,600px)]">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-foreground">
                {images[activeIndex].title}
              </p>
              {images[activeIndex].description && (
                <p className="mt-2 text-sm text-muted">
                  {images[activeIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
