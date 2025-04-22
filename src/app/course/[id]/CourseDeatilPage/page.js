'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../components/cartSlice';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CourseDetail({ params }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Mock course data (replace with API or database in production)
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      image: '/course1.jpg',
      instructor: 'John Doe',
      description: 'Learn to build modern, responsive websites using HTML, CSS, JavaScript, and React.',
      price: 99,
      curriculum: [
        'Introduction to HTML',
        'CSS Styling',
        'JavaScript Fundamentals',
        'React Basics',
      ],
      instructorBio: 'John Doe is a senior web developer with over 10 years of experience.',
    },
    {
      id: 2,
      title: 'Data Science',
      image: '/course2.jpg',
      instructor: 'Jane Smith',
      description: 'Master data analysis, visualization, and machine learning with Python.',
      price: 129,
      curriculum: [
        'Python for Data Science',
        'Data Visualization',
        'Machine Learning Basics',
      ],
      instructorBio: 'Jane Smith is a data scientist with a PhD in Statistics.',
    },
  ];

  const course = courses.find((c) => c.id === parseInt(params.id)) || {};

  const handleAddToCart = () => {
    dispatch(addToCart({ id: course.id, title: course.title, price: course.price }));
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} cartItems={cartItems} />

      {/* Course Detail */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <Image src={course.image} alt={course.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-6" />
              <p className="text-gray-700 mb-6">{course.description}</p>
              <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
              <ul className="list-disc list-inside mb-6">
                {course.curriculum?.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
              <p className="text-gray-700">{course.instructorBio}</p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                <p className="text-gray-700 mb-2">Price: ${course.price}</p>
                <p className="text-gray-700 mb-4">Instructor: {course.instructor}</p>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 mb-4"
                >
                  Add to Cart
                </button>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}