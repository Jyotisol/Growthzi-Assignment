import Image from "next/image";

export default function Blog() {
    return (
      <div className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
        {/* Hero Section */}
       <div className="w-full rounded-lg overflow-hidden shadow-md">
               <Image
                 src="/blog.png" // Replace with your actual image path
                 alt="Our Services"
                 width={1200}
                 height={600}
                 className="w-full h-auto object-cover"
               />
             </div>
  
        {/* Blog Header */}
        <div className="text-center py-10 px-4">
          <h1 className="text-3xl font-bold mb-2">EduLearn Blog</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Insights, tips, and trends in education, career development, and lifelong learning
          </p>
        </div>
  
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
          {["All Posts", "Education Trends", "Career Development", "Learning Tips", "Student Stories", "Industry Insights"].map((tab, i) => (
            <button
              key={i}
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition"
            >
              {tab}
            </button>
          ))}
        </div>
  
        {/* Featured Articles */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The Future of Remote Learning",
                tag: "VIRTUAL",
                desc: "Explore how technology is reshaping education and creating new opportunities.",
              },
              {
                title: "Top Skills Employers Want in 2023",
                tag: "CAREER",
                desc: "Discover the most in-demand skills and how to build them.",
              },
              {
                title: "Effective Learning Strategies",
                tag: "LEARNING",
                desc: "Uncover proven methods to retain knowledge and enhance your study habits.",
              },
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">{article.tag}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{article.desc}</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700">Read Article</button>
                  <button className="px-4 py-2 text-sm border border-purple-600 text-purple-600 rounded hover:bg-purple-100">Save</button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Latest Articles */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                title: "How AI is Changing Education Assessment",
                date: "March 15, 2023",
              },
              {
                title: "Building a Portfolio That Gets You Hired",
                date: "March 10, 2023",
              },
              {
                title: "The Power of Microlearning: Small Steps, Big Results",
                date: "March 8, 2023",
              },
              {
                title: "From Backpacks to Briefcases: Life After Graduation",
                date: "March 5, 2023",
              },
              {
                title: "Celebrating Skills Day: Opportunities for New Grads",
                date: "March 2, 2023",
              },
              {
                title: "Learning Paths: Free Week of Online Learning",
                date: "March 1, 2023",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                <p className="text-sm text-purple-600 font-medium">{item.date}</p>
                <h4 className="font-semibold mt-1">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
        {/* Popular Topics */}
<div className="text-center px-4 py-12">
  <h2 className="text-2xl font-semibold mb-6">Popular Topics</h2>
  <div className="flex flex-wrap justify-center gap-3">
    {[
      "Web Development", "Data Science", "UI/UX Design", "Digital Marketing", 
      "Career Transitions", "Remote Work", "Learning Methods", "Industry Trends"
    ].map((topic, i) => (
      <span
        key={i}
        className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer transition"
      >
        {topic}
      </span>
    ))}
  </div>
</div>

{/* Editor's Picks */}
<div className="px-4 max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6">Editor&apos;s Picks</h2>
  <div className="grid gap-6">
    <Image src="/blog2.png" alt="Editors Pick 1" className="rounded-xl shadow" width={200} height={200}/>
    <Image src="/blog3.png" alt="Editors Pick 2" className="rounded-xl shadow" width={200} height={200}/>
  </div>
</div>

{/* Newsletter Section */}
<div className="bg-white py-16 mt-16 px-4 text-center">
  <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
  <p className="text-gray-600 max-w-md mx-auto mb-6">
    Get the latest articles, learning resources, and industry insights delivered to your inbox
  </p>
  <form className="flex justify-center flex-wrap gap-2 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Email address"
      className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button
      type="submit"
      className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
    >
      Subscribe
    </button>
  </form>
</div>

      </div>
    );
  }
  