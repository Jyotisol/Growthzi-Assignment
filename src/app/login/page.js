// pages/signin.js
import { FaGoogle, FaTwitter } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg flex">
        
        {/* Left side - Illustration */}
        <div className="w-1/2 p-10 hidden md:flex items-center justify-center bg-purple-100">
          <div className="text-center">
            <img src="/Frame.png" alt="Reading illustration" className="mx-auto w-60" />
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="text-right text-sm text-gray-500 mb-2">
            English (United States) ⌄
          </div>
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100">
              <FaGoogle className="mr-2 text-red-500" /> Continue With Google
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100">
              <FaTwitter className="mr-2 text-blue-400" /> Continue With Twitter
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mb-4">OR</div>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="User name or email address"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm pr-16 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="absolute right-3 top-2 text-sm text-purple-500 cursor-pointer">
                Hide
              </div>
            </div>
            <div className="text-right text-sm text-purple-500 cursor-pointer">
              Forget your password
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded py-2 text-sm">
              Sign In
            </button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
