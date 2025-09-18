import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const states = [
  { slug: "goa", name: "Goa", img: "/assets/DestinationCarousel/goa.jpg" },
  { slug: "kerala", name: "Kerala", img: "/assets/DestinationCarousel/munnar.jpg" },
  { slug: "rajasthan", name: "Rajasthan", img: "/assets/DestinationCarousel/rajasthan.jpg" },
  { slug: "maharashtra", name: "Maharashtra", img: "/assets/DestinationCarousel/mumbai.avif" },
  { slug: "delhi", name: "Delhi", img: "/assets/DestinationCarousel/delhi.jpg" },
  { slug: "karnataka", name: "Karnataka", img: "/assets/DestinationCarousel/karanataka.jpg" },
  { slug: "sikkim", name: "Sikkim", img: "/assets/DestinationCarousel/sikkim.jpg" },
  { slug: "kashmir", name: "Kashmir", img: "/assets/DestinationCarousel/kashmir.jpg" },
  { slug: "tamilnadu", name: "Tamil Nadu", img: "/assets/DestinationCarousel/tamilnadu.webp" },
  { slug: "andhrapradesh", name: "Andhra Pradesh", img: "/assets/DestinationCarousel/andra.webp" },
];

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentIndex((c) => (c + 1) % states.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % states.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + states.length) % states.length);
    setProgress(0);
  };

  const getIndex = (index) => (index + states.length) % states.length;

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        
        {/* Left Slide (hidden on small screens) */}
        <div className="hidden md:block w-1/3 px-2 transform scale-90 blur-sm opacity-60 transition duration-500">
          <img
            src={states[getIndex(currentIndex - 1)].img}
            alt={states[getIndex(currentIndex - 1)].name}
            onClick={() => nav(`/state/${states[getIndex(currentIndex - 1)].slug}`)}
            className="rounded-2xl h-[200px] md:h-[350px] w-full object-cover shadow-lg hover:scale-105 hover:blur-0 hover:opacity-100 hover:shadow-xl transition duration-500 cursor-pointer"
          />
        </div>

        {/* Center Slide */}
        <div className="w-full md:w-1/3 px-2 transform scale-100 md:scale-105 transition duration-500">
          <div className="relative group cursor-pointer">
            <img
              src={states[currentIndex].img}
              alt={states[currentIndex].name}
              className="rounded-2xl h-[220px] sm:h-[300px] md:h-[400px] w-full object-cover shadow-2xl group-hover:scale-105 group-hover:shadow-yellow-500/40 transition duration-700"
            />

            {/* Overlay Content */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
                {states[currentIndex].name}
              </h2>
              <p className="text-xs sm:text-sm md:text-base">Popular attractions & tours</p>

              {/* Explore Me Button */}
              <button
                onClick={() => nav(`/state/${states[currentIndex].slug}`)}
                className="de mt-2 sm:mt-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition absolute right-[-100px] sm:right-[-120px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100"
              >
                Explore Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Slide (hidden on small screens) */}
        <div className="hidden md:block w-1/3 px-2 transform scale-90 blur-sm opacity-60 transition duration-500">
          <img
            src={states[getIndex(currentIndex + 1)].img}
            alt={states[getIndex(currentIndex + 1)].name}
            onClick={() => nav(`/state/${states[getIndex(currentIndex + 1)].slug}`)}
            className="rounded-2xl h-[200px] md:h-[350px] w-full object-cover shadow-lg hover:scale-105 hover:blur-0 hover:opacity-100 hover:shadow-xl transition duration-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 sm:gap-8 mt-4 sm:mt-6">
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
        {states.map((_, idx) => {
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
                className={`absolute inset-0 rounded-full ${
                  isActive ? "bg-gray-200" : "bg-gray-300"
                }`}
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
                className={`absolute inset-0 rounded-full pointer-events-none ${
                  isActive ? "ring-2 ring-yellow-500" : "border-2 border-gray-400"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
