import React from 'react';
import group6 from '../assets/group/group6.jpg';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Empowering Minds, Shaping Futures
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <b>Naman Vidya Mandir</b>, where we nurture young minds and foster a love for learning.
            Our dedicated team of educators is committed to providing a supportive and stimulating
            environment where every student can achieve their full potential.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in a holistic approach to education, focusing not only on academic excellence
            but also on the development of character, creativity, and critical thinking skills.
            Our curriculum is designed to be engaging and relevant, preparing students for the challenges
            and opportunities of the future.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Join us on this exciting journey of discovery and growth!
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
            <img
              src={group6}
              alt="School Campus"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <span className="text-blue-600 font-semibold">Our Inspiring Campus</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;