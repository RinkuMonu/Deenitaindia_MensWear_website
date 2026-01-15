"use client";

export default function ElevatedSection() {
  return (
    <section className="relative w-full bg-[#d6f4fc] py-24">
      {/* Light background panel */}
      <div className="absolute left-0 top-32 w-full h-[70%] bg-[#eef5f7] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center px-6">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold leading-snug mb-6">
            A blue line favorite:
            <br /> The napoli fit.
          </h2>

          <p className="text-gray-500 leading-relaxed max-w-md">
            Inspired by classic Neapolitan tailoring traditions, our Napoli fit
            is defined by a well-tailored, yet accessible, fit, and features
            canvas construction and a wider shoulder for an adaptable option
            that works in just about any setting.
          </p>
        </div>

        {/* CENTER IMAGE (UPLIFTED) */}
        <div className="relative flex justify-center">
          <img
            src="/home/coat-img.png" // replace with your image
            alt="Blazer"
            className="w-[280px] lg:w-[340px] drop-shadow-2xl -mt-32"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Padded shoulder</h3>

          <p className="text-gray-500 leading-relaxed max-w-md">
            Similar to the classic notch lapel, this slightly widened take is
            extended to 9cm at its widest point, giving those gents with a broad
            chest a more proportional look.
          </p>
        </div>
      </div>
    </section>
  );
}
