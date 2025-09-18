import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Us
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="public/about.jpg"
              alt="about"
              className="rounded-2xl shadow-lg hover:scale-105 transform transition duration-500 w-full md:w-[90%]"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Who We Are
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              We are passionate travelers and storytellers dedicated to
              curating unforgettable journeys across India. From the bustling
              streets of Delhi to the serene backwaters of Kerala, we bring you
              experiences that go beyond sightseeing.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              Our mission is simple: to connect you with the heart of India
              through unique tours, personalized packages, and authentic
              cultural encounters.
            </p>

            {/* Mission & Vision inline */}
            <div className="mt-6 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  🌍 Our Mission
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  To make travel in India effortless, inspiring, and immersive.
                  We design trips that match your dreams.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  ✨ Our Vision
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  To become India’s most trusted travel companion, inspiring
                  people worldwide to explore the vibrant culture, heritage, and
                  natural beauty of our land.
                </p>
              </div>

<div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                ✅ Expert Guides
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Our experienced local guides ensure you don’t just visit —
                you truly experience every destination.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                🏞️ Unique Experiences
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                From hidden gems to landmarks, we bring you a blend of
                adventure, culture, and relaxation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                💼 Hassle-Free Planning
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Sit back and relax while we handle all the logistics — so
                you can enjoy your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


            </div>
          </div>
        </div>

     
        
  );
}
