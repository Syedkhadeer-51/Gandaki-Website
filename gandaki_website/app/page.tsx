"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/hero/cows.webp",     
    label: "Welcome to Gandaki",
    title: "Rescue.\nLove. Care.\nRepeat.",
    subtitle: "A safe haven for animals who have known suffering — and now deserve safety, dignity, and love.",
    cta: { label: "Meet Our Animals", href: "/animals" },
  },
  {
    image: "/hero/hero-2.jpg",
    label: "Our Mission",
    title: "Every life\nmatters.",
    subtitle: "We rescue animals from unsafe situations and give them a permanent home where they can live freely.",
    cta: { label: "Our Story", href: "/about" },
  },
  {
    image: "/hero/hero-3.jpg",
    label: "Get Involved",
    title: "Be part of\nthe change.",
    subtitle: "Volunteer, donate, or sponsor an animal. Your support directly saves lives and restores dignity.",
    cta: { label: "Donate Now", href: "/donate" },
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const go = useCallback((n: number) => {
    setCurrent((n + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(t);
  }, [current, go]);

  return (
    <section className="relative h-[88vh] min-h-125 max-h-170 overflow-hidden bg-gray-700">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
          {/* dark gradient over image for text legibility */}
          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-16 md:px-24 max-w-2xl">
        <p className="text-[11px] font-bold tracking-[2px] uppercase text-white/75 mb-3">
          {slides[current].label}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-4 whitespace-pre-line drop-shadow-lg">
          {slides[current].title}
        </h1>
        <p className="text-base font-light text-white/90 leading-relaxed mb-8 max-w-md">
          {slides[current].subtitle}
        </p>
        <Link
          href={slides[current].cta.href}
          className="inline-block w-fit px-8 py-4 border-2 border-white text-white text-[11px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-gray-900 transition-colors duration-200"
        >
          {slides[current].cta.label}
        </Link>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(current - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-black/25 text-white text-2xl hover:bg-black/50 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => go(current + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-black/25 text-white text-2xl hover:bg-black/50 transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full border-2 border-white/80 transition-colors ${
              i === current ? "bg-white/90" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}