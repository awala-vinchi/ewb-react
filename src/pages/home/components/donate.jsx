import React from "react";

import ImgDonate from "../../../assets/images/donate.jpg";

export default function CharitySection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
      >
        <img
          className="w-full h-full object-top"
          src={ImgDonate}
          alt="Donate to charity"
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative text-center z-10 px-4">
        <p className="text-sm text-blue-500 font-bold mb-2">GET INVOLVE</p>
        <h2 className="text-3xl font-bold mb-4">
          We've Funded 12,503 Charity Projects For 25M People Around The World
        </h2>
        <button className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
          Get Involve Now
        </button>
      </div>
    </section>
  );
}
