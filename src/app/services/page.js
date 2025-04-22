'use client'
import Image from 'next/image'
import React from 'react'

const services = [
  {
    tag: 'online',
    title: 'Online Courses',
    description:
      'Self-paced learning experiences with expert-designed curriculum, interactive assignments, and personalized feedback.',
    button: 'Explore Courses',
  },
  {
    tag: 'groups',
    title: 'Live Workshops',
    description:
      'Interactive sessions led by industry experts, offering real-time collaboration and hands-on learning opportunities.',
    button: 'View Schedule',
  },
  {
    tag: 'personal',
    title: '1:1 Tutoring',
    description:
      'Personalized instruction tailored to individual learning styles, goals, and pace with dedicated subject experts.',
    button: 'Book a Session',
  },
]
const specializedPrograms = [
    {
      tag: 'code',
      title: 'Tech Bootcamps',
      description:
        'Intensive training programs in programming, data science, and digital marketing with job placement assistance.',
      button: 'Learn More',
    },
    {
      tag: 'business',
      title: 'Corporate Training',
      description:
        'Customized learning solutions for organizations to upskill teams and drive business growth.',
      button: 'Request Info',
    },
    {
      tag: 'school',
      title: 'Certification Prep',
      description:
        'Structured preparation for industry-recognized certifications with practice exams and expert guidance.',
      button: 'View Certifications',
    },
    {
      tag: 'children',
      title: 'Youth Programs',
      description:
        'Age-appropriate educational activities for K-12 students to develop critical thinking and creativity.',
      button: 'Discover Programs',
    },
  ]
  

  const learningResources = [
    { tag: 'resources', title: 'Digital Library', desc: 'Access thousands of e-books, journals, and research papers' },
    { tag: 'videos', title: 'Video Tutorials', desc: 'Step-by-step visual guides for complex concepts' },
    { tag: 'interactive', title: 'Practice Exercises', desc: 'Interactive problems with instant feedback' },
    { tag: 'forum', title: 'Study Groups', desc: 'Collaborative learning spaces for peer discussion' },
    { tag: 'mobile', title: 'Mobile Learning App', desc: 'Learn on-the-go with our dedicated mobile application' },
  ]
  
const approaches = [
  {
    tag: 'assessment',
    title: 'Needs Assessment',
    description:
      'We begin by understanding your specific learning goals and current knowledge level.',
  },
  {
    tag: 'architecture',
    title: 'Custom Planning',
    description:
      'Our experts design a personalized learning path tailored to your objectives.',
  },
  {
    tag: 'interactive',
    title: 'Engaging Delivery',
    description:
      'Interactive content keeps you motivated and ensures knowledge retention.',
  },
  {
    tag: 'insights',
    title: 'Progress Tracking',
    description:
      'Regular assessments and feedback help measure growth and adjust strategies.',
  },
]

const ServicesSection = () => {
  return (
    <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
      {/* Hero Image */}
      <div className="w-full rounded-lg overflow-hidden shadow-md">
        <Image
          src="/services.png" // Replace with your actual image path
          alt="Our Services"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-2 text-gray-600">
          Comprehensive educational solutions designed to meet your learning needs
        </p>
      </div>

      {/* Core Offerings */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-center mb-6">Core Offerings</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md">
              <span className="text-xs uppercase text-purple-600 font-bold">
                {service.tag}
              </span>
              <h4 className="mt-2 text-lg font-bold">{service.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </div>
      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Programs</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {specializedPrograms.map((program, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md">
              <span className="text-xs uppercase text-purple-600 font-bold">{program.tag}</span>
              <h4 className="mt-2 text-lg font-semibold">{program.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{program.description}</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded text-sm">
                {program.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="grid md:grid-cols-2 items-center gap-10 mt-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Learning Resources</h2>
          {learningResources.map((resource, i) => (
            <div key={i}>
              <span className="text-xs uppercase text-purple-600 font-medium">{resource.tag}</span>
              <h4 className="text-md font-semibold">{resource.title}</h4>
              <p className="text-gray-600 text-sm">{resource.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <Image
            src="/services1.png" // Replace with your actual image path
            width={200}
            height={200}
            alt="Learning Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {approaches.map((item, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md">
              <span className="text-xs uppercase text-purple-600 font-bold">{item.tag}</span>
              <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-4">
          Schedule a free consultation with our education advisors
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded text-sm">
          Book Consultation
        </button>
      </section>
    </div>
  )
}

export default ServicesSection
