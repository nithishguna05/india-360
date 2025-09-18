import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PackageCard({ p }) {
  const nav = useNavigate()
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group hover:shadow-md transition text-center">
      <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />

      {/* Overlay + Button */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => nav(`/package/${p.id}`)}
          className="ex px-5 py-2 rounded-full font-medium text-sm text-white bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore 
        </button>
      </div>

      <div className="p-4 flex flex-col items-center">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-sm mt-2 text-gray-500">{p.duration} • {p.highlights}</p>
        <div className="mt-2">
          <div className="text-lg font-bold">₹{p.price}</div>
          <div className="text-sm text-gray-500">per person</div>
        </div>
      </div>
    </div>
  )
}
