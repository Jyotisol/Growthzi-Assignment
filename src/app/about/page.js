"use client"
import { Line } from 'react-chartjs-2'


import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import Image from 'next/image'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function AboutSection() {
  const values = [
    {
      label: "school",
      title: "Our Mission",
      text: "To democratize education by providing accessible, high-quality learning experiences that empower individuals to achieve their full potential.",
    },
    {
      label: "visibility",
      title: "Our Vision",
      text: "A world where quality education is a right, not a privilege, and where learning knows no boundaries of geography, economic, or background.",
    },
    {
      label: "diversity_3",
      title: "Inclusivity",
      text: "We believe education should be accessible to all, regardless of background or circumstances.",
    },
    {
      label: "auto_graph",
      title: "Excellence",
      text: "We are committed to maintaining the highest standards in our resources and teaching methods.",
    },
    {
      label: "lightbulb",
      title: "Innovation",
      text: "We continuously evolve our approach to meet the changing needs of learners and industries.",
    },
    {
      label: "groups",
      title: "Community",
      text: "We foster a supportive learning environment where collaboration and mutual respect thrive.",
    },
  ]

  const team = [
    {
      title: "FOUNDER & CEO",
      name: "Dr. Sarah Johnson",
      desc: "Experienced psychologist with 15+ years in education leadership. PhD in Educational Psychology from Stanford University."
    },
    {
      title: "CHIEF ACADEMIC OFFICER",
      name: "Michael Chen",
      desc: "Education strategist with experience in leading global initiatives. Specialized in curriculum development and learning solutions."
    },
    {
      title: "HEAD OF TECHNOLOGY",
      name: "Emily Rodriguez",
      desc: "Tech leader with deep experience in creating intuitive learning platforms. Previously led engineering teams at major EdTech companies."
    },
  ]

  const stats = [
    { title: "Students worldwide", value: "100,000+" },
    { title: "Countries reached", value: "50+" },
    { title: "Expert instructors", value: "200+" },
    { title: "Completion rate", value: "95%" },
  ]

  // Chart Data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Data',
      },
    },
  }

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto mt-20">
      {/* Hero Image */}
      <div className="mb-12">
        <Image
          src="/about.png"
          alt="Students studying"
          className="rounded-xl w-full h-150 "
          width={200}
          height={200}
        />
      </div>

      {/* Intro */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">About EduLearn</h2>
        <p className="text-gray-600 mt-2">
          Empowering students worldwide with quality education since 2010
        </p>
      </div>

      {/* Our Story */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-gray-700">
          Founded in 2010, EduLearn began with a simple mission: to make quality education
          accessible to everyone. What started as a small team of passionate educators has grown
          into a global platform serving thousands of students across 50+ countries. Our journey
          reflects our commitment to innovation, excellence, and student success.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold">Our Mission & Values</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((item, idx) => (
          <div key={idx} className="bg-purple-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-purple-600 bg-purple-100 px-2 py-1 text-xs rounded-full">
                {item.label}
              </span>
              <h4 className="font-bold">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Leadership Team */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-lg shadow text-center">
              <p className="text-sm font-semibold text-purple-700 uppercase mb-2">{member.title}</p>
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact Chart */}
        <div className="my-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <div className="bg-purple-200 h-[300px] flex items-center justify-center text-purple-900 text-lg font-semibold rounded-lg">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white mb-20">
          {stats.map((item, i) => (
            <div key={i} className="bg-purple-600 p-6 rounded-lg">
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="mt-2 text-sm">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
          <p className="mb-6">We’re always looking for passionate educators and innovators to join our mission</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">View Open Positions</button>
        </div>

       
      </div>
    </section>
  )
}
