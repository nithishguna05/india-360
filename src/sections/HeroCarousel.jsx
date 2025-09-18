import React, { useState, useEffect, useRef } from "react";
import { Search, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  { id: 1, title: "India 360", subtitle: "Explore India all around", media: "/assets/hero/in.mp4", poster: "/assets/hero/India-360.jpg", topic: "India 360", type: "video" },
  { id: 2, title: "Adventure", subtitle: "Thrilling mountain & river adventures", media: "/assets/hero/av.mp4", poster: "/assets/hero/Adventure.jpg", topic: "Adventure", type: "video" },
  { id: 3, title: "Nature", subtitle: "Lush landscapes & scenic beauty", media: "/assets/hero/na.mp4", poster: "/assets/hero/Nature.jpg", topic: "Nature", type: "video" },
  { id: 4, title: "Wildlife", subtitle: "Meet the wild", media: "/assets/hero/wi.mp4", poster: "/assets/hero/Wildlife.jpg", topic: "Wildlife", type: "video" },
  { id: 5, title: "Heritage", subtitle: "Ancient monuments & culture", media: "/assets/hero/he.mp4", poster: "/assets/hero/Heritage.jpg", topic: "Heritage", type: "video" },
  { id: 6, title: "Spiritual", subtitle: "Peaceful spiritual journeys", media: "/assets/hero/te.mp4", poster: "/assets/hero/Spiritual.jpg", topic: "Spiritual", type: "video" },
];

const places = ["Tamil Nadu", "Kerala", "Goa", "Delhi", "Mumbai", "Coimbatore", "ladakh", "Jaipur", "Agra", "Sikkim", "Manali", "Kolkata", "Pune", "Chennai", "Madurai", "Bangalore", "dharamshala", "Amritsar", "Shimla", "hampi", "Pondicherry", "Ramaswaram"];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [location, setLocation] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const videoRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Pause all videos except current
    videoRefs.current.forEach((v, i) => {
      if (v) i === idx ? v.play() : v.pause();
    });
  }, [idx]);

  const nextSlide = () => setIdx((idx + 1) % slides.length);
  const prevSlide = () => setIdx((idx - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-500 ${i === idx && fade ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {s.type === "video" ? (
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={s.media}
              poster={s.poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={s.media} alt={s.title} className="w-full h-full object-cover" />
          )}

          <div className="absolute inset-0 hero-overlay flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              {slides[idx].title.split(" ").map((word, index) =>
                index % 2 === 0 ? <span key={index} className="text-yellow-400">{word} </span> : <span key={index}>{word} </span>
              )}
            </h1>
            <p className="mt-2 md:mt-4 max-w-2xl text-white drop-shadow">{slides[idx].subtitle}</p>

            <section className="container mx-auto px-4 mt-6 max-w-5xl" data-aos="fade-up">
              <div className="bg-white/20 backdrop-blur-md rounded-lg shadow p-4">
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                  {/* Location */}
                  <div className="relative w-full sm:w-40">
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full border border-white/40 bg-transparent text-white placeholder-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Location"
                    />
                    {location && (
                      <div className="absolute bg-white text-black mt-1 w-full rounded shadow-lg max-h-40 overflow-y-auto z-20">
                        {places.filter((p) => p.toLowerCase().startsWith(location.toLowerCase())).map((p, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 hover:bg-yellow-100 cursor-pointer"
                            onClick={() => setLocation(p)}
                          >
                            {p}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <input type="date" className="w-full sm:w-36 border border-white/40 bg-transparent text-white px-3 py-2 rounded placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Check-in" />
                  <input type="date" className="w-full sm:w-36 border border-white/40 bg-transparent text-white px-3 py-2 rounded placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Check-out" />

                  <div className="flex items-center gap-2 text-white">
                    <span>Adults</span>
                    <button onClick={() => setAdults(Math.max(1, adults - 1))}><Minus size={16} /></button>
                    <span>{adults}</span>
                    <button onClick={() => setAdults(adults + 1)}><Plus size={16} /></button>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span>Kids</span>
                    <button onClick={() => setKids(Math.max(0, kids - 1))}><Minus size={16} /></button>
                    <span>{kids}</span>
                    <button onClick={() => setKids(kids + 1)}><Plus size={16} /></button>
                  </div>

                  {/* Search Button */}
                  <button className="flex items-center justify-center gap-2 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:w-32 group">
                    <Search size={20} />
                    <span className="hidden group-hover:inline text-sm font-semibold">Search</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Topics */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold">
              {slides.map((t, i) => (
                <div
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`cursor-pointer px-2 md:px-3 transition-all duration-300 ${
                    i === idx ? "bg-yellow-400 text-black rounded-full px-4 py-1" : "text-white hover:text-yellow-300"
                  }`}
                >
                  {t.topic.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white z-20">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white z-20">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 hidden md:flex">
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setIdx(i)}
      className={`w-3 h-3 rounded-full ${i === idx ? "bg-yellow-400" : "bg-white/50"}`}
    />
  ))}
</div>

    </div>
  );
}
