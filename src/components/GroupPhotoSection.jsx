import group6 from '../assets/group/group6.jpg';
import group1 from '../assets/group/group1.jpg';

const GroupPhotoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">Our School Family: Group Photos</h2>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed">
          Moments captured together, creating lasting memories of our school community.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative group">
            <img
              src={group6}
              alt="School Group Photo 1"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group">
            <img
              src={group1}
              alt="School Group Photo 2"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupPhotoSection;