import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import function1 from '../assets/function/function1.jpg';
import function2 from '../assets/function/function2.jpg';
import function3 from '../assets/function/function3.jpg';
import function4 from '../assets/function/function4.jpg';
import function7 from '../assets/function/function7.jpg';

import Slider from 'react-slick';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {dots.map((dot, index) => (
          <span
            key={index}
            {...dot.props}
            className={`w-3 h-3 rounded-full transition-all ${
              dot.props['aria-selected'] === 'true' ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-white'
            }`}
          />
        ))}
      </div>
    ),
  };

  const slides = [
    {
      image: function1,
      title: "Welcome to Our School",
      subtitle: "Where every child shines.",
    },
    {
      image: function2,
      title: "Excellence in Education",
      subtitle: "Empowering minds for the future.",
    },
    {
      image: function3,
      title: "Innovative Teaching Methods",
      subtitle: "Learning beyond textbooks.",
    },
    {
      image: function4,
      title: "Innovative Teaching Methods",
      subtitle: "Learning beyond textbooks.",
    },
    {
      image: function7,
      title: "Innovative Teaching Methods",
      subtitle: "Learning beyond textbooks.",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-75"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 flex items-center justify-center">
              <div className="text-center px-6 max-w-3xl mx-auto">
                <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4 drop-shadow-md animate-fadeIn delay-300">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;