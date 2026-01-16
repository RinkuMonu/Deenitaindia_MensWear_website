import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Popular() {
    const products = [
        { name: 'Chinos Set', price: '$95', colors: '2 Colors available', img: 'model1.jpg' },
        { name: 'The Utility Jacket', price: '$85', colors: '5 Colors available', img: 'model2.jpg' },
        { name: 'The Bomber Jacket', price: '$90', colors: '3 Colors available', img: 'model3.jpg' },
        { name: 'Suede Jacket', price: '$85', colors: '7 Colors available', img: 'model4.jpg' },
      ];
    return (
        <>
             <section className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Banner */}
      <div className="text-center mb-12">
        <img
          src="/image.jpg" 
          alt="New Arrivals Banner" 
          width={1200} 
          height={400} 
          className="w-full max-w-6xl mx-auto h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl mb-8 [file:2]"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          NEW ARRIVALS, NEW JOURNEYS.
        </h1>
        <div className="flex justify-center">
          <a 
            href="#" 
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            View All
          </a>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="swiper-custom"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-end p-6">
                <img
                  src={`/${product.img}`} 
                  alt={`Model in ${product.name}`} 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">{product.name}</h3>
                  <p className="text-white text-lg font-semibold drop-shadow-md">{product.price}</p>
                  <p className="text-white text-sm opacity-90">{product.colors}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
            
        </>
    )
}



