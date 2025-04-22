"use client";
import Image from "next/image";
import React, { useState } from "react";
const featuredCourses = [
  {
    icon: "school",
    title: "Web Development",
    description:
      "Learn modern web development techniques from industry experts. 12-week comprehensive course.",
  },
  {
    icon: "psychology",
    title: "Data Science",
    description:
      "Master data analysis, visualization and machine learning with practical projects.",
  },
  {
    icon: "Business",
    title: "Business Management",
    description:
      "Develop leadership skills and business acumen with our industry-recognized certification.",
  },
];

const whyChooseUs = [
  {
    icon: "verified",
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of practical experience.",
  },
  {
    icon: "laptop",
    title: "Flexible Learning",
    description:
      "Access course materials anytime, anywhere with our online platform.",
  },
  {
    icon: "support_agent",
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to help with your questions.",
  },
  {
    icon: "workspace_premium",
    title: "Certification",
    description:
      "Receive industry-recognized certificates upon course completion.",
  },
];

const testimonials = [
  {
    icon: "format_quote",
    category: "WEB DEVELOPMENT",
    name: "Sarah Johnson",
    feedback:
      "The course exceeded my expectations. I landed a job as a front-end developer within a month of completion.",
  },
  {
    icon: "format_quote",
    category: "DATA SCIENCE",
    name: "Michael Chen",
    feedback:
      "Comprehensive curriculum with practical projects. The instructors were knowledgeable and supportive.",
  },
  {
    icon: "format_quote",
    category: "BUSINESS MANAGEMENT",
    name: "Emily Rodriguez",
    feedback:
      "This course transformed my career. The skills I gained helped me secure a promotion within weeks.",
  },
];

const blogPosts = [
  {
    title: "The Future of Online Learning",
    summary: "Exploring emerging technologies and methodologies in education",
  },
  {
    title: "5 Career Development Tips",
    summary:
      "Essential strategies for professional growth in today’s job market",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-4 py-20 max-w-7xl mx-auto">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-lg m-6 p-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-semibold">
            <span className="text-white">Transform</span> Your Future
            <br />
            With Quality <span className="font-bold text-white">Education</span>
          </h1>
          <p>
            Discover courses taught by industry experts and enhance your skills
            for tomorrow&abop;s challenges
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 px-4 py-2 rounded text-sm">
              Explore Courses
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/student.png"
            alt="Student"
            className="rounded-lg w-full max-w-sm mx-auto"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className="text-center my-10 px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-xl shadow-sm text-left"
            >
              <span className="text-sm text-purple-500 font-medium">
                {course.icon}
              </span>
              <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{course.description}</p>
              <div className="flex space-x-2 mt-4">
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                  Enroll Now
                </button>
                <button className="text-purple-600 border border-purple-600 px-3 py-1 rounded text-sm">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-xl shadow-sm">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mb-2">
                {item.icon}
              </span>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-10">Student Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-xl shadow-sm">
              <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mb-2">
                {testimonial.icon}
              </span>
              <p className="text-xs font-bold text-gray-700 mb-1">
                {testimonial.category}
              </p>
              <h4 className="font-semibold mb-1">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest from Our Blog
        </h2>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <Image
            src="/Home.png"
            alt="Blog 1"
            className="rounded-xl object-cover w-full h-150 md:row-span-2"
            width={200}
            height={200}
          />
          <Image
            src="/Home1.png"
            alt="Blog 2"
            className="rounded-xl object-cover w-full h-80"
            width={200}
            height={200}
          />
          <div className="flex gap-4">
            <Image
              src="/Home2.png"
              alt="Blog 3"
              className="rounded-xl object-cover w-full h-65"
              width={200}
              height={200}
            />
            <Image
              src="/Home3.png"
              alt="Blog 4"
              className="rounded-xl object-cover w-full h-65"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md px-4 py-3 border"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                    article
                  </div>
                  <div>
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.summary}</p>
                  </div>
                </div>
                <span className="text-2xl">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-3 text-sm text-gray-500">
                  {/* Placeholder content */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">
            Ready to Start Your Learning Journey?
          </h3>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}
