import React from 'react'

import { Facebook, Twitter, Instagram } from "lucide-react";

const volunteers = [
  {
    name: "Davis Lauren",
    role: "Director",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-davis-image", // Replace with actual image path
  },
  {
    name: "Jenny White",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-jenny-image", // Replace with actual image path
  },
  {
    name: "James Smith",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-james-image",
     // Replace with actual image path
  },
];

export default function team() {
  return (
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR TEAM</h2>
        <p className="text-md ">Meet our Team ;</p>
      </div>

      <div className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <div className="relative">
          <img
            src="path-to-davis-image" // Replace with the actual path to the image
            alt="Davis Lauren"
            className="w-full h-60 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 relative bg-white -mt-6 z-10 rounded-lg shadow-sm">
          {/* Role */}
          <p className="text-blue-500 text-sm font-bold uppercase mb-1">
            Director
          </p>
          {/* Name */}
          <h4 className="text-xl font-bold mb-2">Davis Lauren</h4>
          {/* Description */}
          <p className="text-sm mb-4">
            Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu
            scipit.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 text-blue-500">
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
