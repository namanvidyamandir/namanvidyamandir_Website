import React from 'react';
import principal1 from '../assets/principal/principal1.jpg';
import principal2 from '../assets/principal/principal2.jpg';
import principal3 from '../assets/principal/principal3.jpg';
import principal4 from '../assets/principal/principal4.jpg';
import principal5 from '../assets/principal/principal5.jpg';

const PrincipalSection = () => {
  const principalImages = [
    principal1,
    principal2,
    principal3,
    principal4,
    principal5,
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-4">Message from the Principal</h2>

        {/* Principal Profile */}
        <div className="flex flex-col items-center">
          <img
            src={principalImages[2]}
            alt="School Principal"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-indigo-200 shadow-2xl transition-transform duration-300 hover:scale-105"
          />
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">Mrs. Neetu Singh Bhardwaj</p>
          <p className="text-indigo-600 text-sm uppercase tracking-wider mt-1">Head of School</p>

          {/* Quote / Message */}
          <blockquote className="mt-6 max-w-3xl text-center text-gray-700 italic leading-relaxed text-lg md:text-xl px-4">
            "Welcome to Naman Vidya Mandir! We are dedicated to fostering an environment of academic excellence and holistic development.
            Our goal is to empower every student to reach their full potential and become compassionate, responsible global citizens.
            We look forward to partnering with you in your child's educational journey."
          </blockquote>
        </div>

        {/* Title for Gallery */}
        <h3 className="text-2xl font-semibold text-indigo-500 text-center mt-12 mb-6">
          Our Esteemed Principal Through the Years
        </h3>

        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center gap-6">
          {principalImages.map((img, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={img}
                alt={`Principal ${index + 1}`}
                className="w-40 h-52 md:w-48 md:h-60 object-cover rounded-xl shadow-lg border border-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;