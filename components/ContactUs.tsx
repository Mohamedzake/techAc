"use client";

import React from "react";

const ContactUsGreen = () => {
  return (
    <section className="bg-gradient-to-br from-[#e8f5e9] to-[#f1fdf3] text-green-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700">Let’s Connect</h2>
        <p className="text-green-600 mt-4 max-w-2xl mx-auto">
          Whether you&apos;re looking for partnerships, support, or just want to
          say hello — we&apos;re here for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <div className="bg-white border border-green-200 p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded bg-white text-green-900 border border-green-300 placeholder:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-4 rounded bg-white text-green-900 border border-green-300 placeholder:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded bg-white text-green-900 border border-green-300 placeholder:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center text-green-800 space-y-6">
          <div>
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-1 text-green-700">contact@gizaseeds.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="mt-1 text-green-700">+20 109 966 0247</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Office</h3>
            <p className="mt-1 text-green-700">
              6th of October City, Giza, Egypt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsGreen;
