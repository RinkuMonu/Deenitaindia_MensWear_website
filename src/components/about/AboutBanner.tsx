"use client";
import { Link } from "react-router-dom";

export default function AboutBannerSection() {
  return (
    <section className="w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-slate-700 mb-3">
            Men's Wear Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Dress Sharp, <br className="hidden md:block" />
            Live Confident
          </h1>

          <p className="text-slate-600 max-w-xl mb-8">
            Discover premium men’s fashion designed for style, comfort, and confidence. From everyday essentials to statement outfits, our collection blends modern trends with timeless craftsmanship to elevate your wardrobe.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-white font-semibold shadow-md hover:bg-slate-800 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[280px] md:h-[360px] lg:h-[420px]">
          <img
            src="/menswear/banner.jpg"
            alt="Men's Wear Collection"
            className="object-contain rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
