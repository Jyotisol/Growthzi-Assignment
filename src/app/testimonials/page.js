"use client";

import Image from "next/image";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const metricsData = {
  labels: [
    "Job Offer",
    "Salary ↑",
    "Promotion",
    "New Career",
    "Startup",
    "Freelance",
  ],
  datasets: [
    {
      label: "Success %", // optional
      data: [90, 80, 75, 78, 65, 72],
      backgroundColor: "#7C3AED", // Tailwind purple-600
      borderRadius: 6,
    },
  ],
};

const metricsOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 20 },
    },
  },
};

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
      {/* Hero Section */}
      <div className="w-full rounded-lg overflow-hidden shadow-md">
        <Image
          src="/testimonial.png"
          alt="Hero Image"
          objectFit="cover"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="bg-purple-100 p-6 flex flex-col items-center text-center mt-20">
        <h2 className="text-3xl font-bold mt-8">Student Success Stories</h2>
        <p className="text-gray-600 mt-2">
          Hear from our students about how EduLearn courses transformed their
          careers and lives
        </p>

        {/* Tabs */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {[
            "All Testimonials",
            "Career Changers",
            "Skill Builders",
            "Entrepreneurs",
            "Students",
          ].map((tab) => (
            <button
              key={tab}
              className="bg-white px-4 py-2 rounded-full shadow text-sm hover:bg-purple-200 transition"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-2xl font-semibold mb-6">Featured Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              text: "The Web Development course gave me the skills to move from marketing to a UX-focused developer role. I doubled my salary within 6 months of completion!",
            },
            {
              name: "Michael Chen",
              text: "After completing the Data Science Essentials course, I got hired as a Data Analyst. Within 9 months, my company even sponsored my salary upgrade!",
            },
            {
              name: "Priya Patel",
              text: "The Digital Marketing Strategy course helped me scale my small business online. I've tripled my sales in the past 6 months, thanks to relevant contacts with top-leader clients.",
            },
          ].map((testimonial, i) => (
            <div key={i} className="bg-purple-50 p-4 rounded-xl shadow">
              <span className="text-purple-500 text-xs">⭐ TESTIMONIAL</span>
              <h4 className="mt-2 font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{testimonial.text}</p>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700">
                  Watch Video
                </button>
                <button className="px-3 py-1 text-xs border border-purple-600 text-purple-600 rounded hover:bg-purple-100">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Transformation Stories */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h3 className="text-2xl font-semibold mb-4">
          Career Transformation Stories
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "James Wilson",
              role: "Retail Manager to UX Designer",
              course: "UX/UI Design Principles",
            },
            {
              name: "Elena Rodriguez",
              role: "Software Engineer to Solutions Engineer",
              course: "Web Development",
            },
            {
              name: "Daniel Kim",
              role: "Accountant to Data Scientist",
              course: "Core Data Science Essentials",
            },
            {
              name: "Arun Mehendale",
              role: "Customer Service to Digital Marketer",
              course: "Digital Marketing Strategy",
            },
          ].map((story, i) => (
            <li key={i} className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-purple-300 text-white flex items-center justify-center font-bold">
                {story.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{story.name}</p>
                <p className="text-sm text-gray-600">
                  From {story.role} | Course:{" "}
                  <span className="italic">{story.course}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-4xl mx-auto my-12 px-4">
        <h3 className="text-xl font-semibold text-center mb-6">
          Success Metrics
        </h3>
        <Bar data={metricsData} options={metricsOptions} />
      </div>

      {/* Video Testimonials */}
      <div className="max-w-5xl mx-auto my-16 px-4 text-center">
        <h3 className="text-xl font-semibold mb-6">Video Testimonials</h3>
        <div className="relative w-full h-[300px] mx-auto mb-6">
          <Image
            src="/testimonial1.png"
            alt="Video"
            className="w-full h-full object-cover rounded-xl"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
              ▶
            </button>
          </div>
        </div>

        <Image
          src="/testimonial2.png" // replace with your thumbnails
          alt="Person"
          className="w-full h-100 object-cover rounded-xl"
          width={200}
          height={200}
        />
      </div>

      {/* Employer Feedback */}
      <div className="max-w-5xl mx-auto my-16 px-4">
        <h3 className="text-xl font-semibold mb-6">Employer Feedback</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "TechCorp Industries",
              feedback:
                "Our hires from EduLearn performed exceptionally and adapted quickly.",
            },
            {
              name: "Global Marketing Group",
              feedback:
                "EduLearn's graduates bring fresh ideas and energy to our teams.",
            },
          ].map((employer, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="font-bold text-lg mb-2">{employer.name}</h4>
              <p className="text-gray-600 mb-4">{employer.feedback}</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700">
                  View Hires
                </button>
                <button className="px-4 py-2 text-sm border border-purple-600 text-purple-600 rounded hover:bg-purple-100">
                  Hiring Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share Your Story CTA */}
      <div className="bg-purple-100 py-12 text-center">
        <h3 className="text-xl font-semibold">Share Your Story</h3>
        <p className="text-gray-700 mt-2">
          Are you an EduLearn graduate? We&abop;d love to hear how our courses
          impacted your career!
        </p>
        <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
          Submit Your Testimonial
        </button>
      </div>
    </div>
  );
}
