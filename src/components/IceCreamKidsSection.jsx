import React from 'react';
import kid1 from '../assets/kids/kids.jpg';
import kid2 from '../assets/kids/kids2.jpg';
import kid3 from '../assets/kids/kids3.jpg';
import kid4 from '../assets/kids/kids5.jpg';

const IceCreamKidCard = ({ imgSrc, kidName, creationName }) => (
  <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 p-1 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 group">
    <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
      {/* Portrait Image - 9:16 aspect ratio */}
      <img
        src={imgSrc}
        alt={`${kidName} with ${creationName}`}
        className="w-full h-[500px] object-cover"
      />
      <div className="p-5 text-center flex-grow">
        <h3 className="text-xl font-bold text-pink-600 mb-1">{kidName}</h3>
        <p className="text-gray-700">Proudly showing off their "{creationName}"!</p>
      </div>
    </div>
  </div>
);

const IceCreamKidsSection = () => {
  const kids = [
    { imgSrc: kid1, kidName: "Darshit", creationName: "Giant Cone" },
    { imgSrc: kid2, kidName: "Ronish", creationName: "Rainbow Swirl" },
    { imgSrc: kid3, kidName: "Payal", creationName: "Choco Delight" },
    { imgSrc: kid4, kidName: "Rudra", creationName: "Strawberry Dream" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-4 tracking-tight">
          Creative Cones: Our Little Artists!
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Imagination at its sweetest! Our students had a blast creating their own giant cardboard ice creams.
          This fun activity sparked creativity and brought so many smiles. Look at these amazing creations!
        </p>

        {/* Grid Layout - Cards closer together */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl">
            {kids.map((kid, index) => (
              <IceCreamKidCard
                key={index}
                imgSrc={kid.imgSrc}
                kidName={kid.kidName}
                creationName={kid.creationName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IceCreamKidsSection;