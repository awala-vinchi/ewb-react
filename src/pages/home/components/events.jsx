import React from "react";
import { Calendar, MapPin } from "lucide-react";

export default function EventCard() {
  return (
    <section className="py-16 w-full flex flex-col gap-6 items-center justify-center text-neutral-600 bg-stone-100">

      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR EVENTS</h2>
        <p className="text-md ">Join us;</p>
      </div>

      <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Dark Overlay */}

        {/* Date Badge */}
        <div className="absolute top-6 right-6 bg-blue-600 px-2 py-1 rounded-lg text-center z-10">
          <p className="text-white text-xl font-bold">15th</p>
          <p className="text-white text-lg">May</p>
        </div>
        {/* Content */}
        <div className="relative p-6 z-10 mt-24">
          {" "}
          {/* Added mt-12 to create space between badge and content */}
          <h2 className="text-xl font-bold mb-2">
            Poor People's Donation Campaign
          </h2>
          {/* Time and Location */}
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>8:00 am - 12:30 pm</span>
            <MapPin className="w-4 h-4 mx-2" />
            <span>London Park, England</span>
          </div>
          {/* Description */}
          <p className="text-gray-200 mb-4">
            Hic commodo odio pharetra magnis aliquet posuere aptent mus leo
            class urna. Eum diamlorem, netus posuere aptent mus.
          </p>
          {/* View Details Button */}
          <button className="border border-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
