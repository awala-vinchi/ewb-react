import React from "react";
import Img1 from "../../../assets/images/1.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center text-neutral-600 bg-white p-8 py-16">
      {/* Image Section */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <img
          src={Img1}
          alt="Smiling children"
          className="w-full h-full object-cover rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full md:pl-8">
        <h2 className="text-blue-500 uppercase font-semibold mb-2 text-center md:text-left">
          About Us
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
          Our Commitment to Building Strong,
          <br />
          Resilient Communities
        </h3>
        <p className="mb-4 text-justify md:text-left">
          Engineers Without Borders KNUST is dedicated to improving lives
          through impactful engineering projects that address the essential
          needs of communities. Our talented volunteers collaborate with
          communities to create tailored solutions for their infrastructure
          challenges, ensuring sustainable progress.
        </p>
        <div className="flex items-center mb-6">
          <ul className="space-y-2 md:space-y-3">
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Partnering with communities for long-term impact
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Delivering innovative solutions to meet critical needs
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Empowering local communities to thrive sustainably
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Empowering local communities to thrive sustainably
            </li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap md:flex-nowrap items-center bg-blue-500 text-white rounded-lg overflow-hidden">
          <div className="flex-1 text-center p-4">
            <p className="text-2xl font-bold">13k+</p>
            <p>Volunteers</p>
          </div>
          <div className="w-px h-10 bg-white mx-2"></div>
          <div className="flex-1 text-center p-4">
            <p className="text-2xl font-bold">330+</p>
            <p>Sponsors</p>
          </div>
          <div className="w-px h-10 bg-white mx-2"></div>
          <div className="flex-1 text-center p-4">
            <p className="text-2xl font-bold">108</p>
            <p>Branches</p>
          </div>
          <div className="w-px h-10 bg-white mx-2"></div>
          <div className="flex-1 text-center p-4">
            <p className="text-2xl font-bold">65+</p>
            <p>Awards</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:justify-start">
          <Link to="/membership" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-blue-500 w-full sm:w-[10rem] text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
