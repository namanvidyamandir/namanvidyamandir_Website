import React from 'react';
import mother1 from '../assets/mother/mother1.jpg';
import mother2 from '../assets/mother/mother2.jpg';

const MothersDaySection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">Celebrating Mother's Day</h2>
        <div className="text-center text-gray-700 mb-10 max-w-3xl mx-auto space-y-4">
          <p className="text-lg leading-relaxed">
            Mother's Day is a special occasion for us to honor and appreciate the incredible love, care, and
            sacrifices of mothers. It's a day to make them feel cherished and valued.
          </p>
          <p className="text-lg leading-relaxed">
            At our school, we celebrate Mother's Day with heartfelt activities. Children create handmade cards,
            perform songs, and express their love for their mothers in beautiful ways. It's a day filled with
            emotion, joy, and gratitude, strengthening the precious bond between mother and child.
          </p>
        </div>

        {/* Image Cards - Portrait 9:16, closer together */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
            {/* Card 1 */}
            <div className="w-full sm:w-[280px] md:w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src={mother1}
                alt="Mother's Day Celebration 1"
                className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm text-center mt-2">
                  A touching moment from our Mother's Day program.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[280px] md:w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src={mother2}
                alt="Mother's Day Craft Activity"
                className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm text-center mt-2">
                  Students proudly display handmade gifts for their mothers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MothersDaySection;