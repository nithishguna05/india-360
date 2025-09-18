import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Minus } from "lucide-react"; // icons

const places = ["Tamil Nadu", "Kerala", "Goa", "Delhi", "Mumbai", "Coimbatore", "ladakh", "Jaipur", "Agra", "Sikkim", "Manali", "Kolkata", "Pune", "Chennai", "Madurai", "Bangalore", "dharamshala", "Amritsar", "Shimla", "hampi", "Pondicherry", "Ramaswaram"];

export default function BookNow() {
  const [location, setLocation] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleSearch = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 0) {
      setFilteredPlaces(
        places.filter((place) =>
          place.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    } else {
      setFilteredPlaces([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !date) {
      alert("⚠️ Please fill all fields before searching!");
      return;
    }

    alert(
      `Searching Trips...\nLocation: ${location}\nDate: ${date}\nAdults: ${adults}\nKids: ${kids}`
    );
  };

  return (
    <div className="min-h-[100vh] bg-[url('/assets/book-bg.jpg')] bg-cover bg-center flex items-center relative">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Booking Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
            Book Your Trip
          </h1>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Choose your destination with ease and style.
          </p>

          <div className="space-y-5">
            {/* Location Input */}
            <div className="relative">
              <input
                value={location}
                onChange={handleSearch}
                placeholder="Enter Location"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              {filteredPlaces.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border rounded-lg shadow-lg max-h-40 overflow-y-auto z-20">
                  {filteredPlaces.map((place, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setLocation(place);
                        setFilteredPlaces([]);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-yellow-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Date */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />

            {/* Adults & Kids Counter */}
            <div className="flex gap-4">
              {/* Adults */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Adults
                </label>
                <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="p-1 hover:text-yellow-500"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="p-1 hover:text-yellow-500"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Kids */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Kids
                </label>
                <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-white dark:bg-gray-800">
                  <button
                    type="button"
                    onClick={() => setKids(Math.max(0, kids - 1))}
                    className="p-1 hover:text-yellow-500"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {kids}
                  </span>
                  <button
                    type="button"
                    onClick={() => setKids(kids + 1)}
                    className="p-1 hover:text-yellow-500"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Search Button (small circular with expand on hover) */}
            {/* Search Button */}
<motion.button
  type="submit"
  whileHover={{ width: 140 }} // expands on hover
  whileTap={{ scale: 0.95 }}
  className="flex items-center justify-center gap-2 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300"
>
  <Search size={20} />
  <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-semibold">
    Search
  </span>
</motion.button>

          </div>
        </motion.form>

        {/* Video Section */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { src: "/assets/book/video1.mp4", text: "Adventure" },
            { src: "/assets/book/video2.mp4", text: "Beach" },
            { src: "/assets/book/video3.mp4", text: "City Life" },
            { src: "/assets/book/video4.mp4", text: "Nature" },
          ].map((video, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover transition duration-500 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="vo text-yellow-400 font-extrabold text-xl drop-shadow-lg animate-pulse">
                  {video.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
