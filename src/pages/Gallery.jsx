import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function LesserKnownWonders() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const destinations = [
    {
      title: "Kanthalloor",
      subtitle: "Kashmir of Kerala",
      location: "Kerala",
      image: "/assets/gallery/kanthalloor.jpg",
    },
    {
      title: "Ziro Valley",
      subtitle: "Hidden gem of Arunachal",
      location: "Arunachal",
      image: "/assets/gallery/Ziro-Valley.webp",
    },
    {
      title: "Gokarna",
      subtitle: "Tranquil beaches of Karnataka",
      location: "Karnataka",
      image: "/assets/gallery/gokarana.jpg",
    },
    {
      title: "Majuli",
      subtitle: "World's largest river island",
      location: "Assam",
      image: "/assets/gallery/Majuli.jpg",
    },
    {
      title: "Chopta",
      subtitle: "Mini Switzerland of India",
      location: "Uttarakhand",
      image: "/assets/gallery/Chopta.webp",
    },
    {
      title: "Mandarmani",
      subtitle: "Golden beach of Bengal",
      location: "West Bengal",
      image: "/assets/gallery/mandarmani.jpg",
    },
    {
      title: "Spiti Valley",
      subtitle: "The middle land",
      location: "Himachal Pradesh",
      image: "/assets/gallery/spilti.jpg",
    },
    {
      title: "Lonar Lake",
      subtitle: "Meteor lake of Maharashtra",
      location: "Maharashtra",
      image: "/assets/gallery/lonar.jpg",
    },
    {
      title: "Tawang",
      subtitle: "Monasteries & mountains",
      location: "Arunachal Pradesh",
      image: "/assets/gallery/wangTawang.jpg",
    },
    {
      title: "Dzukou Valley",
      subtitle: "Valley of flowers",
      location: "Nagaland",
      image: "/assets/gallery/dzuko.jpg",
    },
    {
      title: "Dhanushkodi",
      subtitle: "End Of India",
      location: "Tamil Nadu",
      image: "/assets/gallery/Dhanushkodi.avif",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentIndex((c) => (c + 1) % destinations.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [currentIndex, destinations.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length,
    );
    setProgress(0);
  };

  const getIndex = (index) =>
    (index + destinations.length) % destinations.length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <h3 className="text-gray-400 tracking-wide mb-2" data-aos="fade-down">
        Uncover India's
      </h3>
      <h1
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-700 mb-10"
        data-aos="fade-up"
      >
        LESSER KNOWN WONDERS
      </h1>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {/* Left Slide (desktop only) */}
        <div
          className="hidden lg:block w-1/3 px-2 transform scale-90 blur-sm opacity-60 transition duration-500"
          data-aos="fade-right"
        >
          <img
            src={destinations[getIndex(currentIndex - 1)].image}
            alt={destinations[getIndex(currentIndex - 1)].title}
            className="rounded-2xl h-[250px] md:h-[300px] lg:h-[350px] w-full object-cover shadow-lg hover:scale-105 hover:blur-0 hover:opacity-100 hover:shadow-xl transition duration-500 cursor-pointer"
          />
        </div>

        {/* Center Slide */}
        <div
          className="w-full sm:w-2/3 lg:w-1/3 px-2 transform scale-100 lg:scale-105 transition duration-500"
          data-aos="zoom-in"
        >
          <div className="relative group">
            <img
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].title}
              className="rounded-2xl h-[220px] sm:h-[300px] lg:h-[400px] w-full object-cover shadow-2xl group-hover:scale-110 group-hover:shadow-yellow-500/40 transition duration-700 cursor-pointer"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-yellow-400">
                {destinations[currentIndex].title}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base">
                {destinations[currentIndex].subtitle}
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-white flex items-center gap-2">
              <span className="text-red-500 text-sm sm:text-lg lg:text-xl">
                ●
              </span>
              <p className="font-semibold text-xs sm:text-sm lg:text-base">
                {destinations[currentIndex].location}
              </p>
            </div>
          </div>
        </div>

        {/* Right Slide (tablet & desktop) */}
        <div
          className="hidden sm:block w-1/3 px-2 transform scale-90 blur-sm opacity-60 transition duration-500"
          data-aos="fade-left"
        >
          <img
            src={destinations[getIndex(currentIndex + 1)].image}
            alt={destinations[getIndex(currentIndex + 1)].title}
            className="rounded-2xl h-[200px] sm:h-[300px] lg:h-[350px] w-full object-cover shadow-lg hover:scale-105 hover:blur-0 hover:opacity-100 hover:shadow-xl transition duration-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Arrows */}
      <div
        className="flex justify-center gap-6 sm:gap-8 mt-6"
        data-aos="fade-up"
      >
        <button
          onClick={handlePrev}
          className="p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
          aria-label="Previous"
        >
          <FaArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 sm:p-3 rounded-full bg-white shadow-md hover:bg-gray-200 transition"
          aria-label="Next"
        >
          <FaArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
        {destinations.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setProgress(0);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative w-2 h-2 sm:w-3 sm:h-3 rounded-full focus:outline-none"
            >
              <div
                className={`absolute inset-0 rounded-full ${isActive ? "bg-gray-200" : "bg-gray-300"}`}
              />
              {isActive && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-yellow-500"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              )}
              <div
                className={`absolute inset-0 rounded-full pointer-events-none ${isActive ? "ring-2 ring-yellow-500" : "border-2 border-gray-400"}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
