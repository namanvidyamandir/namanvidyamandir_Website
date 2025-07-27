import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; // For the initial slider/welcome
import AboutUsSection from "./components/AboutUsSection";
import FunctionsSection from "./components/FunctionsSection";
import GatheringSection from "./components/GatheringSection";
import GroupPhotoSection from "./components/GroupPhotoSection";
import IceCreamKidsSection from "./components/IceCreamKidsSection";
import LabourDaySection from "./components/LabourDaySection";
import MothersDaySection from "./components/MothersDaySection";
import PrincipalSection from "./components/PrincipalSection";
import TeachersSection from "./components/TeachersSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection"; // Placeholder for video section


// Placeholder for a simple slider component - you might want to use a library like react-slick or swiper for advanced features
const StudentSlider = ({ images }) => {
  // Basic slider logic or just display first image for now
  if (!images || images.length === 0) return <p>No images to display.</p>;
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <img
        src={images[0]}
        alt="Student Activity"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
      {/* Add slider controls here if building manually */}
      <p className="text-center mt-2 text-gray-700">
        Image 1 of {images.length}
      </p>
    </div>
  );
};

function App() {
  const sliderImages = [
    "https://via.placeholder.com/1200x500/A2D2FF/333333?text=School+Event+1",
    "https://via.placeholder.com/1200x500/FFB6C1/333333?text=School+Activity+2",
    "https://via.placeholder.com/1200x500/C1FFC1/333333?text=Learning+Fun+3",
    "https://via.placeholder.com/1200x500/FFFACD/333333?text=Campus+View+4",
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <section id="home" className="pt-16">
        {" "}
        {/* pt-16 to offset for fixed navbar if any */}
        <HeroSection images={sliderImages} />
      </section>

      <section id="about" className="py-12 bg-gray-50">
        <AboutUsSection />
      </section>

      <section id="activities" className=" bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">
            Our Activities
          </h2>

          {/* Styled Links */}
          <div className="flex justify-center gap-8 flex-wrap text-center">
            <a
              href="#functions"
              className="px-5 py-2 text-blue-500 font-medium rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
            >
              School Functions
            </a>
            <a
              href="#labour-day"
              className="px-5 py-2 text-blue-500 font-medium rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
            >
              Labour Day
            </a>
            <a
              href="#mothers-day"
              className="px-5 py-2 text-blue-500 font-medium rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
            >
              Mother's Day
            </a>
          </div>
        </div>
      </section>

      <section id="functions" className="py-12 bg-gray-50">
        <FunctionsSection />
      </section>

      <section id="gathering" className="py-12">
        <GatheringSection />
      </section>

      <section id="group-photos" className="py-12 bg-gray-50">
        <GroupPhotoSection />
      </section>

      <section id="ice-cream-kids" className="py-12">
        <IceCreamKidsSection />
      </section>

      <section id="labour-day" className="py-12 bg-pink-50">
        <LabourDaySection />
      </section>

      <section id="mothers-day" className="py-12 bg-blue-50">
        <MothersDaySection />
      </section>
      <section id="video" className="py-12 bg-gray-50">
        <VideoSection />
      </section>

      <section id="principal" className="py-12">
        <PrincipalSection />
      </section>

      <section id="teachers" className="py-12 bg-gray-50">
        <TeachersSection />
      </section>

      <section id="contact" className="py-12 bg-green-50">
        <ContactUsSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;