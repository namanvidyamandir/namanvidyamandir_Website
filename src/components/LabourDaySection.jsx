import React from 'react';
import Slider from 'react-slick';
import l1 from '../assets/labour/l1.jpg';
import l2 from '../assets/labour/l2.jpg';
import l3 from '../assets/labour/l3.jpg';
import l4 from '../assets/labour/l4.jpg';
import l5 from '../assets/labour/l5.jpg';
import l6 from '../assets/labour/l6.jpg';

const LabourDaySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-white mx-1 hover:bg-red-300 transition-all duration-300"></div>
    ),
  };

  const images = [
    { src: l1, caption: "Students participating in Labour Day activities." },
    { src: l2, caption: "Children dressed as community helpers." },
    { src: l3, caption: "Role-playing real-life professions." },
    { src: l4, caption: "Learning about the dignity of labour." },
    { src: l5, caption: "Community helpers day celebration." },
    { src: l6, caption: "Interactive learning through play." },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-100 via-white to-red-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-4">Celebrating Labour Day</h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          At our school, we believe in instilling respect for all professions and the dignity of labour.
        </p>

        {/* Carousel wrapper - centered on desktop, full width on mobile */}
        <div className="flex justify-center w-full px-4">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="outline-none px-2">
                  <div className="relative group">
                    {/* Portrait 9:16 Image */}
                    <img
                      src={image.src}
                      alt={`Labour Day ${index + 1}`}
                      className="w-full h-[560px] object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Caption overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl backdrop-blur-sm">
                      <p className="text-white text-sm text-center">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <p className="text-center text-gray-700 mt-10 max-w-2xl mx-auto leading-relaxed">
          These celebrations help children appreciate the hard work that goes into making our communities function smoothly.
          It's a day of learning, respect, and fun!
        </p>
      </div>
    </section>
  );
};

export default LabourDaySection;