import React from "react";
import ImgDonate from "../../../assets/images/donate.jpg";
import { Trophy, User, Globe } from "lucide-react";

export default function Statistics() {
  return (
    <section className="relative w-full h-[300px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          className="w-full h-full object-cover object-top"
          src={ImgDonate} // Use your desired image here
          alt="Donate to charity"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Stats Container */}
      <div className="relative w-full bg-black bg-opacity-70 py-6 flex items-center justify-evenly px-8 text-white">
        {/* Each Stat */}
        <div className="flex flex-col items-center">
          <Trophy className="w-10 h-10 text-yellow-400" />
          <h2 className="text-2xl font-bold">2250+</h2>
          <p className="text-sm">Causes Complete</p>
        </div>

        <div className="flex flex-col items-center">
          <User className="w-10 h-10 text-yellow-400" />
          <h2 className="text-2xl font-bold">3255+</h2>
          <p className="text-sm">Saved Lives</p>
        </div>

        <div className="flex flex-col items-center">
          <Trophy className="w-10 h-10 text-yellow-400" />
          <h2 className="text-2xl font-bold">1250+</h2>
          <p className="text-sm">Volunteers</p>
        </div>

        <div className="flex flex-col items-center">
          <Globe className="w-10 h-10 text-yellow-400" />
          <h2 className="text-2xl font-bold">3546+</h2>
          <p className="text-sm">Church Places</p>
        </div>
      </div>
    </section>
  );
}
