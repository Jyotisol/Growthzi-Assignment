'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [sort, setSort] = useState('Popularity');
  const cartItems = useSelector((state) => state.cart.items);

  const courses = [
    { id: 1, title: 'Web Development', image: '/course1.jpg', instructor: 'John Doe', description: 'Learn to build modern websites.', price: 99, category: 'Programming', level: 'Beginner', popularity: 100 },
    { id: 2, title: 'Data Science', image: '/course2.jpg', instructor: 'Jane Smith', description: 'Master data analysis.', price: 129, category: 'Data Science', level: 'Intermediate', popularity: 80 },
    { id: 3, title: 'Python Basics', image: '/course1.jpg', instructor: 'Alice Brown', description: 'Introduction to Python.', price: 79, category: 'Programming', level: 'Beginner', popularity: 90 },
  ];

  const filteredCourses = courses
    .filter((course) => (category === 'All' || course.category === category))
    .filter((course) => (level === 'All' || course.level === level))
    .sort((a, b) => {
      if (sort === 'Price') return a.price - b.price;
      if (sort === 'Popularity') return b.popularity - a.popularity;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} cartItems={cartItems} />

      {/* Courses Listing */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>

          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 p-2 border rounded-md"
                >
                  <option>All</option>
                  <option>Programming</option>
                  <option>Data Science</option>
                </select>
              </div>
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="mt-1 p-2 border rounded-md"
                >
                  <option>All</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700">Sort By</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="mt-1 p-2 border rounded-md"
              >
                <option>Popularity</option>
                <option>Price</option>
              </select>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}