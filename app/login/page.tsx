"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { FiUser, FiLock } from "react-icons/fi";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex w-1/2 bg-gray-50 items-center justify-center p-10">
          <Image
            src="/images/login.jpeg" // Add your image inside public folder
            alt="Login Illustration"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sign up
          </h2>

          <form className="space-y-5">
            {/* Name Input */}
            <div className="relative">
              <FiUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FiLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
            >
              Log in
            </button>
          </form>

          {/* Bottom Links */}
          <div className="mt-6 text-sm text-gray-600 flex flex-col gap-4">
            <Link
              href="/register"
              className="text-blue-500 hover:underline"
            >
              Create an account
            </Link>

            <div>
              Or login with
              <div className="flex gap-3 mt-3">
                <button className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-600 text-white hover:opacity-90">
                  <FaFacebookF size={14} />
                </button>

                <button className="w-9 h-9 flex items-center justify-center rounded-md bg-sky-500 text-white hover:opacity-90">
                  <FaTwitter size={14} />
                </button>

                <button className="w-9 h-9 flex items-center justify-center rounded-md bg-red-500 text-white hover:opacity-90">
                  <FaGoogle size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
