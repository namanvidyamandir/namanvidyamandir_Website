import React from 'react';
import bd2 from '../assets/blueDay/bd2.jpg';
import function1 from '../assets/function/function1.jpg';
import function2 from '../assets/function/function2.jpg';
import function3 from '../assets/function/function3.jpg';
import function4 from '../assets/function/function4.jpg';
import function7 from '../assets/function/function7.jpg';

const FunctionGalleryItem = ({ imgSrc, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FunctionsSection = () => {
 const functions = [
  {
    imgSrc: bd2,
    title: "Blue Day",
    description: "A fun-filled day where students and teachers dress in blue, exploring the color through creative activities, storytelling, and art. It’s a calm, joyful celebration of creativity and unity."
  },
  {
    imgSrc: function1,
    title: "Cultural Dance Fest",
    description: "An energetic showcase of diverse cultural dances from across India and around the world. Students dazzle the stage with vibrant costumes, rhythm, and spirit in this unforgettable performance."
  },
  {
    imgSrc: function2,
    title: "Annual Day",
    description: "The most awaited event of the year, where students shine on stage with mesmerizing performances in music, dance, and drama. A proud day filled with joy, applause, and cherished memories."
  },
  {
    imgSrc: function3,
    title: "Cultural Fest",
    description: "A colorful celebration of diversity where students explore and present various cultures through food, attire, dance, and traditions — fostering respect, curiosity, and global awareness."
  },
  {
    imgSrc: function4,
    title: "Costume Parade",
    description: "A lively parade where young learners dress up as their favorite characters — real or imaginary — expressing creativity, confidence, and imagination in the most adorable way!"
  },
  {
    imgSrc: function7,
    title: "Maha Shivratri",
    description: "A serene and meaningful celebration of Maha Shivratri, where students learn about devotion, tradition, and spiritual significance through storytelling, music, and symbolic rituals."
  }
];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">School Functions & Events</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Our school believes in holistic development, and functions are an integral part of our curriculum.
          These events provide platforms for students to showcase their talents, learn new skills, and create lasting memories.
          Here's a glimpse into some of our vibrant functions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {functions.map((func, index) => (
            <FunctionGalleryItem
              key={index}
              imgSrc={func.imgSrc}
              title={func.title}
              description={func.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsSection;