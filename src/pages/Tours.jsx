import React, { useState } from "react";
import PackageCard from "../components/PackageCard";
import packages from "../data/packages";

export default function Tours({ initialCount = 6 }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Tours & Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.slice(0, count).map((p) => (
          <PackageCard key={p.id} p={p} />
        ))}
      </div>
      <div className="mt-6 text-center">
        {count < packages.length ? (
          <button
            onClick={() => setCount((c) => Math.min(packages.length, c + 6))}
            className="px-6 py-2 border rounded hover:bg-gray-100"
          >
            Load More
          </button>
        ) : (
          <div className="text-gray-500">No more packages</div>
        )}
      </div>
    </div>
  );
}
