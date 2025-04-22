'use client';

import Image from 'next/image';
import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
      {/* Hero Section */}
      <div className="w-full rounded-lg overflow-hidden shadow-md mb-12">
        <Image
          src="/contact.png"
          alt="Contact Us"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our courses or services? We're here to help you on your educational journey.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Phone Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <FaPhone className="text-blue-600 text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-4">Mon-Fri, 9am-5pm EST</p>
          <p className="text-lg font-medium mb-4">(555) 123-4567</p>
          <div className="flex gap-3">
            <a 
              href="tel:+15551234567" 
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
            <a 
              href="https://wa.me/15551234567" 
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <FaEnvelope className="text-indigo-600 text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
          <p className="text-lg font-medium mb-4">info@edulearn.com</p>
          <a 
            href="mailto:info@edulearn.com" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <FaEnvelope /> Send Email
          </a>
        </div>

        {/* Location Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <FaMapMarkerAlt className="text-purple-600 text-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-4">123 Education Avenue, Learning City</p>
          <p className="text-lg font-medium mb-4">ST 12345, United States</p>
          <a 
            href="https://maps.google.com?q=123+Education+Avenue+Learning+City" 
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt /> Get Directions
          </a>
        </div>
      </div>

      {/* Map Embed */}
      <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132773!2d-73.98784468459382!3d40.74844087932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select 
                id="subject" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="courses">Courses Information</option>
                <option value="admissions">Admissions</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea 
                id="message" 
                rows={5} 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-semibold transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office Hours */}
        <div className="bg-violet-50 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-violet-100 p-3 rounded-full">
                <FaClock className="text-violet-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Regular Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 1pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-violet-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-violet-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                <p className="text-gray-700 mb-2">
                  123 Education Avenue<br />
                  Learning City, ST 12345<br />
                  United States
                </p>
                <a 
                  href="https://maps.google.com?q=123+Education+Avenue+Learning+City" 
                  className="text-violet-600 font-medium inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt /> View on map
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-violet-100 p-3 rounded-full">
                <FaPhone className="text-violet-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Emergency Contact</h3>
                <p className="text-gray-700 mb-2">
                  For urgent matters outside office hours
                </p>
                <div className="flex gap-3">
                  <a 
                    href="tel:+15551234567" 
                    className="text-blue-600 font-medium inline-flex items-center gap-1"
                  >
                    <FaPhone /> (555) 987-6543
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I enroll in a course?',
              a: 'Click on the Courses section, select your desired course, and follow the enrollment instructions. You can also contact our admissions office for assistance.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, bank transfers, and installment plans for course payments.',
            },
            {
              q: 'Do you offer financial aid or scholarships?',
              a: 'Yes, we offer various financial assistance options including scholarships, grants, and payment plans. Contact our financial aid office for details.',
            },
            {
              q: 'Can I get a refund if I’m not satisfied?',
              a: 'We offer a 30-day money-back guarantee for all our courses if you’re not completely satisfied with your learning experience.',
            },
            {
              q: 'How can I schedule a campus tour?',
              a: 'You can schedule a tour by clicking the "Schedule Visit" button above, calling our admissions office, or filling out the contact form.',
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 hover:border-violet-300 transition-colors">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-lg text-gray-800 group-hover:text-violet-600">{q}</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-3 text-gray-600">{a}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}