import React from "react";
import { useParams } from "react-router-dom";

export default function StatePage() {
  const { slug } = useParams();

  const stateInfo = {
    goa: {
      title: "Goa",
      description:
        "Famous for its beaches, nightlife, and Portuguese heritage. Goa is the perfect blend of relaxation and adventure.",
      attractions: [
        { name: "Baga Beach", img: "/assets/car/goa1.jpg" },
        { name: "Fort Aguada", img: "/assets/car/goa2.webp" },
        { name: "Dudhsagar Falls", img: "/assets/car/goa3.jpg" },
        { name: "Basilica of Bom Jesus", img: "/assets/car/goa4.jpg" },
        { name: "Anjuna Market", img: "/assets/car/goa5.jpg" },
        { name: "Chapora Fort", img: "/assets/car/goa6.jpg" },
      ],
    },
    kerala: {
      title: "Kerala",
      description:
        "Known as 'God’s Own Country', Kerala is famous for backwaters, houseboats, and lush green landscapes.",
      attractions: [
        { name: "Munnar Hills", img: "/assets/car/ka1.JPG" },
        { name: "Alleppey Backwaters", img: "/assets/car/ka2.jpg" },
        { name: "Kochi Fort", img: "/assets/car/ka3.webp" },
        { name: "Kumarakom", img: "/assets/car/ka4.avif" },
        { name: "Wayanad", img: "/assets/car/ka5.jpg" },
        { name: "Thekkady", img: "/assets/car/ka6.jpg" },
      ],
    },
    rajasthan: {
      title: "Rajasthan",
      description:
        "The land of kings, famous for palaces, forts, deserts, and royal heritage.",
      attractions: [
        { name: "Jaipur City Palace", img: "/assets/car/ra1.jpg" },
        { name: "Hawa Mahal", img: "/assets/car/ra2.png" },
        { name: "Jodhpur Mehrangarh Fort", img: "/assets/car/ra3.jpg" },
        { name: "Udaipur Lake Palace", img: "/assets/car/ra4.webp" },
        { name: "Jaisalmer Fort", img: "/assets/car/ra5.jpg" },
        { name: "Pushkar", img: "/assets/car/ra6.jpg" },
      ],
    },
    maharashtra: {
      title: "Maharashtra",
      description:
        "Home to Mumbai, the financial capital of India, with caves, beaches, and bustling cities.",
      attractions: [
        { name: "Gateway of India", img: "/assets/car/ma1.jpg" },
        { name: "Ajanta Caves", img: "/assets/car/ma2.webp" },
        { name: "Ellora Caves", img: "/assets/car/ma3.jpg" },
        { name: "Marine Drive", img: "/assets/car/ma4.jpg" },
        { name: "Lonavala", img: "/assets/car/ma5.jpg" },
        { name: "Shirdi", img: "/assets/car/ma6.jpg" },
      ],
    },
    delhi: {
      title: "Delhi",
      description:
        "The capital city of India, rich in monuments, markets, and Mughal history.",
      attractions: [
        { name: "India Gate", img: "/assets/car/de1.jpg" },
        { name: "Red Fort", img: "/assets/car/de2.jpg" },
        { name: "Qutub Minar", img: "/assets/car/de3.jpg" },
        { name: "Lotus Temple", img: "/assets/car/de4.jpg" },
        { name: "Akshardham Temple", img: "/assets/car/de5.gif" },
        { name: "Jama Masjid", img: "/assets/car/de6.jpg" },
      ],
    },
    karnataka: {
      title: "Karnataka",
      description:
        "A mix of modern cities, ancient ruins, and natural beauty like waterfalls and forests.",
      attractions: [
        { name: "Mysore Palace", img: "/assets/car/kar1.webp" },
        { name: "Hampi", img: "/assets/car/kar2.jpg" },
        { name: "Jog Falls", img: "/assets/car/kar3.jpg" },
        { name: "Coorg", img: "/assets/car/kar4.jpg" },
        { name: "Bangalore Vidhana Soudha", img: "/assets/car/kar5.jpg" },
        { name: "Badami Caves", img: "/assets/car/kar6.avif" },
      ],
    },
    sikkim: {
      title: "Sikkim",
      description:
        "A Himalayan state famous for monasteries, mountains, and tea gardens.",
      attractions: [
        { name: "Gangtok", img: "/assets/car/si1.jpg" },
        { name: "Tsomgo Lake", img: "/assets/car/si2.webp" },
        { name: "Yumthang Valley", img: "/assets/car/si3.jpg" },
        { name: "Pelling", img: "/assets/car/si4.jpg" },
        { name: "Rumtek Monastery", img: "/assets/car/si5.jpg" },
        { name: "Nathula Pass", img: "/assets/car/si6.jpg" },
      ],
    },
    kashmir: {
      title: "Kashmir",
      description:
        "Called 'Paradise on Earth', Kashmir is famous for snow, mountains, and houseboats.",
      attractions: [
        { name: "Dal Lake", img: "/assets/car/kas1.jpg" },
        { name: "Gulmarg", img: "/assets/car/kas2.jpg" },
        { name: "Sonamarg", img: "/assets/car/kas3.webp" },
        { name: "Pahalgam", img: "/assets/car/kas4.jpg" },
        { name: "Shankaracharya Temple", img: "/assets/car/kas5.jpg" },
        { name: "Mughal Gardens", img: "/assets/car/kas6.webp" },
      ],
    },
    tamilnadu: {
      title: "Tamil Nadu",
      description:
        "Rich in Dravidian architecture, temples, classical dance, and cultural heritage.",
      attractions: [
        { name: "Meenakshi Amman Temple", img: "/assets/car/tn1.jpg" },
        { name: "Marina Beach", img: "/assets/car/tn2.jpg" },
        { name: "Brihadeeswarar Temple", img: "/assets/car/tn3.jpg" },
        { name: "Kodaikanal", img: "/assets/car/tn4.avif" },
        { name: "Ooty", img: "/assets/car/tn5.jpg" },
        { name: "Mahabalipuram", img: "/assets/car/tn6.jpg" },
      ],
    },
    andhrapradesh: {
      title: "Andhra Pradesh",
      description:
        "Known for Tirupati temple, beaches, and a rich cultural legacy of the Vijayanagara Empire.",
      attractions: [
        { name: "Tirupati Balaji Temple", img: "/assets/car/an1.jpg" },
        { name: "Araku Valley", img: "/assets/car/an2.jpg" },
        { name: "Borra Caves", img: "/assets/car/an3.jpg" },
        { name: "Visakhapatnam Beach", img: "/assets/car/an4.jpg" },
        { name: "Lepakshi Temple", img: "/assets/car/an5.jpg" },
        { name: "Gandikota Fort", img: "/assets/car/an6.jpg" },
      ],
    },
  };

  const state = stateInfo[slug];

  if (!state) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">State Not Found</h1>
        <p className="mt-2">Sorry, we don’t have details for this destination.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title & Description */}
      <h1 className="text-4xl font-bold mb-4">{state.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        {state.description}
      </p>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {state.attractions.map((place, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:scale-105 transform transition"
            data-aos="fade-up"
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{place.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore the beauty of {place.name}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
