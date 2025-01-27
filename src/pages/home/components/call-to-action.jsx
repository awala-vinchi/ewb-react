import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faDonate,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function CallToAction() {
  return (
    <section className="call-to-action w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full flex-1 py-24 bg-blue-800 text-center">
        <h1 className="container px-6 md:px-24 text-white text-3xl md:text-5xl font-extrabold leading-relaxed">
          Your little support can give a child in a community a livelihood.{" "}
          <br />
          Let's contribute!
        </h1>
      </div>

      {/* Action Section */}
      <div className="w-full flex flex-col lg:flex-row py-16 bg-teal-400 justify-between items-center relative space-y-16 lg:space-y-0">
        {/* Volunteer Section */}
        <div className="flex flex-col items-center text-center px-6 lg:w-1/3">
          <FontAwesomeIcon
            icon={faUsers}
            size="3x"
            className="pb-6 text-blue-800"
          />
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Become A Volunteer...
          </h2>
          <p className="text-white text-md md:text-lg px-4">
            Are you passionate about the livelihood of people? Then join us!
          </p>
          <Link to="/membership" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-blue-500 w-40 text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border transition-all duration-300 ease-in-out">
              Join Us
            </button>
          </Link>
        </div>

        {/* Empty Space (Mobile Only) */}
        <div className="lg:hidden flex flex-col items-center text-center px-6 bg-teal-500 p-16 shadow-xl rounded-xl transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon
            icon={faDonate}
            size="3x"
            className="pb-6 text-blue-800"
          />
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Donate To Support
          </h2>
          <p className="text-white text-md md:text-lg px-6">
            Sponsor an entire trending project and make an impact today!
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-blue-500 w-48 text-white hover:bg-blue-800 mt-8 px-4 py-2 rounded-md border hover:shadow-md transition-all duration-300 ease-in-out">
              Donate Now
            </button>
          </Link>
        </div>

        {/* Overlapping Donate Section (Large Screens Only) */}
        <div className="hidden lg:block absolute flex-col items-center text-center left-1/2 transform -translate-x-1/2 -top-20 w-11/12 md:w-2/3 lg:w-1/3 lg:h-[30rem] bg-teal-400 shadow-lg rounded-lg z-10 transition-transform duration-300 hover:scale-105 p-8 lg:p-16">
          <FontAwesomeIcon
            icon={faDonate}
            size="3x"
            className="pb-6 text-blue-800"
          />
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Donate To Support
          </h2>
          <p className="text-white text-md md:text-lg px-6">
            Sponsor an entire trending project and make an impact today!
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-blue-500 w-48 text-white hover:bg-blue-800 mt-8 px-4 py-2 rounded-md border hover:shadow-md transition-all duration-300 ease-in-out">
              Donate Now
            </button>
          </Link>
        </div>

        {/* Partner Section */}
        <div className="flex flex-col items-center text-center px-6 lg:w-1/3">
          <FontAwesomeIcon
            icon={faHandshake}
            size="3x"
            className="pb-6 text-blue-800"
          />
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Become A Partner
          </h2>
          <p className="text-white text-md md:text-lg px-4">
            Let's work together to make a difference today.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-blue-500 w-48 text-white hover:bg-blue-800 mt-8 px-4 py-2 rounded-md border hover:shadow-md transition-all duration-300 ease-in-out">
              Get Involved Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
