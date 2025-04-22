

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">EduPlatform</h3>
          <p>Empowering learners worldwide.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><Link href="/courses" className="hover:underline">Courses</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 Education St, City</p>
          <p>Email: support@eduplatform.com</p>
          <a href="https://wa.me/1234567890" className="hover:underline">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}