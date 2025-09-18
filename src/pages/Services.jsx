import React from "react";
import {
  FaPlane,
  FaHotel,
  FaUserTie,
  FaUtensils,
  FaHiking,
  FaBus,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  { name: "Asha", text: "Wonderful experience!", rating: 5 },
  { name: "Ravi", text: "Great guide, amazing food.", rating: 4 },
  { name: "Meera", text: "Everything was so well organized!", rating: 5 },
  { name: "Karan", text: "Comfortable hotels and smooth transport.", rating: 4 },
  { name: "Priya", text: "Loved the adventure activities!", rating: 5 },
];

export default function Services() {
  const services = [
    {
      title: "Flight Booking",
      desc: "Fast and reliable booking system.",
      icon: <FaPlane className="text-3xl text-blue-500" />,
    },
    {
      title: "Accommodations",
      desc: "Handpicked hotels & homestays.",
      icon: <FaHotel className="text-3xl text-green-500" />,
    },
    {
      title: "Local Guides",
      desc: "Certified & friendly guides.",
      icon: <FaUserTie className="text-3xl text-yellow-500" />,
    },
    {
      title: "Food & Drinks",
      desc: "Taste authentic local cuisines.",
      icon: <FaUtensils className="text-3xl text-red-500" />,
    },
    {
      title: "Adventures",
      desc: "Thrilling treks, rafting & more.",
      icon: <FaHiking className="text-3xl text-purple-500" />,
    },
    {
      title: "Transport",
      desc: "Safe and comfortable travel options.",
      icon: <FaBus className="text-3xl text-indigo-500" />,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer text-center"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
            What Our Travelers Say
          </h3>
          <Slider {...settings}>
            {reviews.map((r, i) => (
              <div key={i} className="px-3">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition h-full">
                  <div className="flex justify-between items-center">
                    <strong className="text-gray-800 dark:text-white">
                      {r.name}
                    </strong>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) =>
                        index < r.rating ? (
                          <FaStar key={index} />
                        ) : (
                          <FaRegStar key={index} />
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
