import React from 'react';
import teacher1 from '../assets/teacher-group/teacher-group1.jpg'
import function6 from '../assets/function/function6.jpg'
import teacher3 from '../assets/teacher-group/teacher-group3.jpg'
import teacher4 from '../assets/teacher-group/teacher-group4.jpg'

const TeacherCard = ({ imgSrc, name, subject }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <img src={imgSrc} alt={name} className="w-full h-60 object-cover"/>
        <div className="p-5">
            <h3 className="text-xl font-semibold text-teal-700">{name}</h3>
            <p className="text-teal-500">{subject}</p>
        </div>
    </div>
);

const TeachersSection = () => {
    const teachers = [
        { imgSrc: teacher1, name: "Our Dedicated Teachers", subject: "Team Photo" },
        { imgSrc: function6, name: "Our Principal", subject: "Planning & Collaboration" },
        { imgSrc: teacher3, name: "Staff Group", subject: "Years of Experience" },
        { imgSrc: teacher4, name: "Our Awesome Educators", subject: "Guiding Young Minds" },
    ];
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">Our Experienced Teachers</h2>
            <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
                Meet the passionate educators who inspire our students every day. Our teachers are committed to
                providing high-quality education and a supportive learning environment. These are some of our team moments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teachers.map((teacher, index) => (
                    <TeacherCard key={index} imgSrc={teacher.imgSrc} name={teacher.name} subject={teacher.subject} />
                ))}
            </div>
        </div>
    );
};

export default TeachersSection;