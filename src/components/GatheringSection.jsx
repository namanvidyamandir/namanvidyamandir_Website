import React from 'react';
import group6 from '../assets/group/group6.jpg';
import group1 from '../assets/group/group1.jpg';
import group2 from '../assets/group/group2.jpg';

const GatheringItem = ({ imgSrc, caption }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <img src={imgSrc} alt="Student Gathering" className="w-full h-72 object-cover" />
    <div className="p-5">
      <p className="text-center text-gray-600 italic">{caption}</p>
    </div>
  </div>
);

const GatheringSection = () => {
  const gatherings = [
    { imgSrc: group6, caption: "Enjoying delicious and healthy meals together." },
    { imgSrc: group1, caption: "Fun and laughter during our school picnic." },
    { imgSrc: group2, caption: "Celebrating special occasions with tasty treats." },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-6">Student Gatherings & Joyful Moments</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          We believe that happy students are engaged learners. Our school organizes various gatherings where students can relax,
          socialize, and enjoy delicious food. These moments of shared joy strengthen bonds and create a positive school environment.
          From special lunch days to festive treats, students cherish these times.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gatherings.map((item, index) => (
            <GatheringItem key={index} imgSrc={item.imgSrc} caption={item.caption} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatheringSection;