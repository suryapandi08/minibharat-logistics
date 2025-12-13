import React from "react";

interface LocationItem {
  name: string;
  img: string;
}

const LocationsSection: React.FC = () => {
  const locations: LocationItem[] = [
    { name: "Madurai", img: "/assets/locations/madurai.jpg" },
    { name: "Coimbatore", img: "/assets/locations/coimbatore.jpg" },
    { name: "Chennai", img: "/assets/locations/chennai.jpg" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="relative group h-64 w-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-orange-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h2 className="text-2xl font-bold text-white">{loc.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
