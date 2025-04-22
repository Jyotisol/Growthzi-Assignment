'use client';

import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../lib/redux/cartSlice';
import Image from 'next/image';

export default function CourseCard({ course }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent link navigation if this is inside a Link
    dispatch(addToCart({ 
      id: course.id, 
      title: course.title, 
      price: course.price,
      image: course.image // Include image if you want to show it in cart
    }));
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      
        <div className="relative h-48 w-full">
          <Image 
            src={course.image} 
            alt={course.title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
     
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 mb-2">By {course.instructor}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{course.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${course.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            aria-label={`Add ${course.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}