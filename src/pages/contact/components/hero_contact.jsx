import React from "react";

import ImgDonate from "../../../assets/images/donate.jpg";

export default function CharitySection() {
  return (
    <section className="relative w-full flex items-center justify-center text-white h-64 sm:h-80 md:h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={ImgDonate}
          alt="Donate to charity"
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
        <p className="text-lg">
          
        </p>
      </div>
    </section>
  );
}
