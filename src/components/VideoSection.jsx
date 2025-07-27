import React from 'react';
import vid1 from '../assets/video/vid1.mp4';
import vid2 from '../assets/video/vid2.mp4';

const VideoSection = () => {
  // Calculate width based on 9:16 aspect ratio and 70vh height
  const videoWidth = `calc(70vh * 9 / 16)`;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-2">Our Playful Learners</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Watch our little stars having fun while learning in our vibrant play school!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Video 1 */}
          <div className="relative group" style={{ height: '70vh', width: videoWidth }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
            <div className="relative h-full w-full bg-white rounded-lg shadow-xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Creative Learning Time</h3>
              </div>
            </div>
          </div>
          
          {/* Video 2 */}
          <div className="relative group" style={{ height: '70vh', width: videoWidth }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
            <div className="relative h-full w-full bg-white rounded-lg shadow-xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={vid2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Fun Activities</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Join Our Play School
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;