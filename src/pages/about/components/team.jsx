import React from 'react'

import { Facebook, Twitter, Linkedin } from "lucide-react";

const volunteers = [
  {
    id: 1,
    name: "Davis Lauren",
    role: "Director",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-davis-image", // Replace with actual image path
    facebook:"fb link",
    twitter: "twitter link",
    linkedin: "linkedin link",
  },
  {
    id: 2,
    name: "Jenny White",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-jenny-image", // Replace with actual image path
    facebook:"fb link",
    twitter: "twitter link",
    linkedin: "linkedin link",

  },
  {
    id: 3,
    name: "James Smith",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-james-image", // Replace with actual image path
    facebook:"fb link",
    twitter: "twitter link",
    linkedin: "linkedin link",
  },
  {
    id: 4,
    name: "James Smith",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-james-image", // Replace with actual image path
    facebook:"fb link",
    twitter: "twitter link",
    linkedin: "linkedin link",
  },
  {
    id: 5,
    name: "James Smith",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-james-image", // Replace with actual image path
    facebook:"fb link",
    twitter: "twitter link",
    linkedin: "linkedin link",
  },
  {
    id: 6,
    name: "James Smith",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-james-image", // Replace with actual image path
    facebook:"fb link",
    twitter: "twitter link",
    linkedin: "linkedin link",
  },
];

export default function team() {
  return (
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR TEAM</h2>
        <p className="text-md ">Meet our Team ;</p>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-6">
          {volunteers.map((volunteer) => (
            <div
              className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              key={volunteer.id}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={volunteer.img} // Replace with the actual path to the image
                  alt="Davis Lauren"
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 relative bg-white -mt-6 z-10 rounded-lg shadow-sm">
                {/* Role */}
                <p className="text-blue-500 text-sm font-bold uppercase mb-1">
                  {volunteer.role}
                </p>
                {/* Name */}
                <h4 className="text-xl font-bold mb-2">{volunteer.name}</h4>
                {/* Description */}
                <p className="text-sm mb-4">
                  Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu
                  scipit.
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-4 text-blue-500">
                  <a
                    href={volunteers.facebook}
                    className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={volunteers.twitter}
                    className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href= {volunteers.linkedin}
                    className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    

    </section>
  );
}
