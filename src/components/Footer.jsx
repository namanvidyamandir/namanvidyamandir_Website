import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About School */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Naman Vidya Mandir</h3>
            <p className="text-gray-300 flex-grow">
              A premier educational institution committed to nurturing young minds with values, knowledge, and skills for the 21st century.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/share/g/1AyXoTzHTQ/ " 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transform transition duration-300"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@namanvidyamandir6261?si=Ozpo1lfz9nuhQZju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transform transition duration-300"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/918882162872" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded-full hover:scale-110 transform transition duration-300"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Removed extra spacing */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition duration-300">About Us</a></li>
              <li><a href="#functions" className="text-gray-300 hover:text-yellow-400 transition duration-300">Functions</a></li>
              <li><a href="#activities" className="text-gray-300 hover:text-yellow-400 transition duration-300">Activities</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Our Branches</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Main Campus</h4>
                  <p className="text-gray-300 text-sm">A197, Gali No- 13, Chander Vihar, Delhi-92</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Second Branch</h4>
                  <p className="text-gray-300 text-sm">Bahlopur,Sec.-63A,Noida,New Colony,(Near Pusta Road, Shivmandir)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="text-yellow-400 mr-2" />
                <a href="tel:+917217742455" className="text-gray-300 hover:text-yellow-400 transition duration-300">+91 8882162872</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-2" />
                <a href="mailto:info@namanvidyamandir.edu" className="text-gray-300 hover:text-yellow-400 transition duration-300">Namanvidyamandir01@gmail.com</a>
              </div>
              <div className="pt-2">
                <h4 className="font-medium mb-2">Office Hours</h4>
                <p className="text-gray-300 text-sm">Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p className="text-gray-300 text-sm">Saturday: 8:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Naman Vidya Mandir. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed and developed with ❤️ by <a href="#" className="text-yellow-400 hover:underline">Alpha Delving</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;