import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import packages from "../data/packages";

export default function PackagePage() {
  const { id } = useParams();
  const p = packages.find((x) => String(x.id) === id) || packages[0];
  const nav = useNavigate(); // ← Add this

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-80 object-cover rounded col-span-1 md:col-span-2"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{p.title}</h1>
          <p className="text-gray-500 mb-4">
            {p.duration} • {p.highlights}
          </p>
          <div className="text-2xl font-bold mb-4">₹{p.price}</div>
          {/* Navigate to Book Page */}
          <button
            onClick={() => nav("/book")}
            className="bg-[var(--primary)] text-white px-6 py-2 rounded hover:shadow-lg transition"
          >
            Book Now
          </button>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-xl font-semibold">Itinerary</h3>
        <p className="text-gray-600 mt-2">
          Sample itinerary details go here. Replace with real data.
        </p>
      </section>
    </div>
  );
}
