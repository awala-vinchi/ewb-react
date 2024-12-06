import React from "react";

import ImgDonate from "../../../assets/images/donate.jpg";

export default function CharitySection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
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
        <h2 className="text-3xl font-bold mb-4">OUR LATEST NEWS</h2>
        <p className="text-md">Blog Post;</p>
      </div>
    </section>
  );
}
