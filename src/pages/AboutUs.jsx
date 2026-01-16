"use client"
import AboutBannerSection from '../components/about/AboutBanner';
import BlockImageSection from '../components/home/Blockimage';
import ElevatedSection from '../components/home/Elevated';

export default function AboutUs() {
  return (
    <>
        <AboutBannerSection />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#393838] mb-6">About <span className='text-[#cba146]'>Us</span></h1>
        <div className="w-24 h-1.5 bg-[#393838] mx-auto rounded-full"></div>
      </div>
      <div className="bg-gradient-to-r from-[#393838]/5 to-purple-50 rounded-3xl p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="bg-[#cba146] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Est. 1981 | Handcrafted in Rajasthan
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#393838]">
                Jajam Block Prints
                <span className="block text-base font-normal text-gray-600 mt-2">A Sub-Brand by Shree Shyam</span>
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                To expand our legacy, we're excited to introduce Jajam Block Prints — a fresh, contemporary sub-brand
                designed for the modern lifestyle. Named after the traditional floor spreads of Rajasthan, Jajam brings
                the same authenticity and heritage in a more modern, design-forward format.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking for handcrafted apparel, home furnishings, or custom textiles, Jajam Block Prints
                blends traditional techniques with contemporary style—made with heart, for you.
              </p>
            </div>
          </div>
          <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/1.jpeg"
              alt="Jajam Block Prints modern designs"
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-medium">Contemporary Designs</p>
              <p className="text-xs opacity-80">Traditional Craft, Modern Appeal</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Stand For Section */}
      {/* <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#393838] mb-4">What We Stand For</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to authenticity, sustainability, and artisan craftsmanship drives everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-lg">
              <img
                src="/4.jpeg"
                alt="In-house production"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-bold">100% In-House</h3>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#393838] mb-3">100% In-House Production</h3>
            <p className="text-gray-600 text-sm">Complete control over quality from start to finish</p>
          </div>

          <div className="text-center group">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-lg">
              <img
                src="/6.jpeg"
                alt="Natural dyes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-bold">Natural Dyes</h3>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#393838] mb-3">Natural Dyes & Sustainable Practices</h3>
            <p className="text-gray-600 text-sm">Eco-friendly processes that respect our environment</p>
          </div>

          <div className="text-center group">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-lg">
              <img
                src="/5.jpeg"
                alt="Artisan craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-bold">Authentic Craft</h3>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#393838] mb-3">Authentic Artisan Craftsmanship</h3>
            <p className="text-gray-600 text-sm">Skills passed down through generations of master craftsmen</p>
          </div>

          <div className="text-center group">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-lg">
              <img
                src="/12.jpeg"
                alt="Rajasthan heritage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-bold">Heritage</h3>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#393838] mb-3">Rooted in Rajasthan's Textile Heritage</h3>
            <p className="text-gray-600 text-sm">Preserving centuries-old traditions for future generations</p>
          </div>
        </div>
      </div> */}
    </div>
       <BlockImageSection />
      <ElevatedSection />
    </>
  )
}
