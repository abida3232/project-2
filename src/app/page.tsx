"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1e293b] min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <div className="text-2xl font-bold ml-16">BrandName</div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex space-x-8 mr-16 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/product" className="hover:text-gray-400">
            Product
          </Link>
          <Link href="/pricing" className="hover:text-gray-400">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>

        {/* Login and Join Us Buttons */}
        <div className={`space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/login" className="hover:text-gray-400">
            Login
          </Link>
          <Link href="/join-us">
            <button className="bg-blue-400 px-5 py-3 rounded-lg">
              Join Us
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-8 md:px-0">
        <h2 className="text-center mt-12 font-bold text-lg text-blue-400 ">
          Welcome
        </h2>
        <h1 className="text-4xl md:text-6xl mt-12 font-bold tracking-wider">
          Selling on the
        </h1>
        <h1 className="text-4xl md:text-6xl mb-12 mt-7 font-bold tracking-wider">
          Internet like a Pro
        </h1>
        <h1 className="text-white my-10 md:text-lg">
          We know how large objects will act, but things on a <br /> small scale just do not act that way.
        </h1>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-400 px-8 mr-1 py-3 rounded hover:bg-[#73a4da]">
            Get Quote Now
          </button>
          <button className="border border-blue-400 text-blue-400 px-7 py-3 rounded">
            Learn More
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 px-4 md:px-10 py-10">
        {/* Card 1 */}
        <div className="bg-white text-black p-7 px-14 shadow-lg">
          <div className="w-20 h-20 bg-[#f4dbd0] rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold">Training Courses</h2>
          <div className="w-12 h-0.5 bg-red-500 mb-4 my-4"></div>
          <p className="text-gray-600">
            The gradual accumulation <br /> of information about atomic and <br /> small-scale behavior...
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-7 px-14 shadow-lg">
          <div className="w-20 h-20 bg-[#c1e6b7] rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold">2,769 Online Courses</h2>
          <div className="w-12 h-0.5 bg-red-500 mb-4 my-4"></div>
          <p className="text-gray-600">
            The gradual accumulation <br /> of information about atomic and <br /> small-scale behavior...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-400 text-white p-7 px-14 shadow-lg">
          <div className="w-20 h-20 bg-white rounded-lg mb-4"></div>
          <h2 className="text-xl font-semibold">Training Courses</h2>
          <div className="w-12 h-0.5 bg-white mb-4 my-4"></div>
          <p className="text-gray-600">
            The gradual accumulation <br /> of information about atomic and <br /> small-scale behavior...
          </p>
        </div>
      </section>
    </div>
  );
}
