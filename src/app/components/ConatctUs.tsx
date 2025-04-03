"use client";
import React from "react";

const ConatctUs = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0067B1] p-10">
      <div className="grid grid-cols-2 gap-16 w-full max-w-5xl bg-[#0067B1] p-10">
        {/* Left Side - Contact Details */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Get in touch</h2>
          <div>
            <p className="text-lg font-semibold text-white-400">
              For general enquiries
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white-600">Address:</h3>
            <p className="text-white-500">
              110, 16th Road, Chembur, Mumbai – 400071
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white-600">Phone:</h3>
            <p className="text-white-500">+91 22 25208822</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white-600">Email:</h3>
            <p className="text-white-500">info@supremegroup.co.in</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-white-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label className="block text-white-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-white-700 font-semibold">
              Subject
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block text-white-700 font-semibold">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={4}
            />
          </div>

          <button className="w-[220] h-[150] bg-white text-black p-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConatctUs;
