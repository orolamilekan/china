"use client";

import React, { useState } from "react";
import Image from "next/image";

const VendorSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+234",
    storeName: "",
    storeAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Vendor Data Submitted:", formData);
    // TODO: API call to register vendor
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-10">
        <Image
          src="/images/trust.jpeg" // Replace with your own image in public/images
          alt="Vendor Signup Illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* FORM SECTION */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 bg-white">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Vendor Sign Up</h2>
        <p className="mb-6 text-gray-500">Create your vendor account to start selling.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone with Country Code */}
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <div className="flex">
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                placeholder="+234"
                className="w-20 border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
                className="flex-1 border border-gray-300 rounded-r-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Store Name */}
          <div>
            <label className="block text-gray-700 mb-1">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="My Store"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Store Address */}
          <div>
            <label className="block text-gray-700 mb-1">Store Address</label>
            <input
              type="text"
              name="storeAddress"
              value={formData.storeAddress}
              onChange={handleChange}
              placeholder="123 Main Street, City, Country"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Forgot Password */}
          <div className="text-right">
            <a href="/forgot-password" className="text-indigo-600 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-gray-500 text-center">
          Already have an account?{" "}
          <a href="/vendor-login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default VendorSignup;
