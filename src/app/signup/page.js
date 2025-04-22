// pages/signin.js
import { FaGoogle, FaTwitter } from 'react-icons/fa';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="flex max-w-5xl w-full shadow-md rounded-md overflow-hidden">
        
        {/* Left: Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-white w-1/2 p-8">
          <img
            src="/Frame.png"
            alt="Learning illustration"
            className="w-80 h-auto"
          />
        </div>

        {/* Right: Sign In Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-sm text-right text-gray-500 mb-4">
            English (United States) ▼
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign In</h2>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100">
              <FaGoogle className="mr-2 text-red-500" />
              Continue With Google
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100">
              <FaTwitter className="mr-2 text-blue-400" />
              Continue With Twitter
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mb-4">OR</div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="User name or email address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm pr-16 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute right-3 top-2 text-sm text-gray-500 cursor-pointer">
                Hide
              </span>
            </div>
            <div className="text-right text-sm text-purple-600 cursor-pointer">
              Forget your password
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded py-2 text-sm">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
