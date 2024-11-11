import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faDonate,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function call_to_action() {
  return (
    <section className="call-to-action w-full flex flex-col items-center justify-center">
      <div className="w-full flex-1 py-36 bg-blue-800">
        <h1 className="container px-24 text-center text-white text-5xl font-extrabold">
          Your little support can give a child in a community a livelihood.
          Let's contribute!
        </h1>
      </div>

      <div className="w-full flex flex-1 py-16 bg-teal-400 justify-between relative">
        <div className=" flex flex-col items-center justify-center w-1/3 text-wrap">
          <FontAwesomeIcon
            icon={faUsers}
            size="3x"
            className="pb-6  text-blue-800"
          />
          <h2 className="text-center text-white text-3xl font-bold">
            Become A Volunteer...
          </h2>
          <h2 className="text-center text-white text-xl font-semibold px-6">
            Are you passionate about the livelihood of people? then...
          </h2>
          <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-800  mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            Join Us Now
          </button>
        </div>

        {/* Overlapping div */}
        <div className="absolute flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 -top-16  w-3/4 md:w-1/3 h-[30rem] bg-teal-400 shadow-lg rounded-lg z-10 transition-transform duration-300 hover:scale-105  p-16">
          {/* Content inside the overlapping div */}
          <FontAwesomeIcon
            icon={faDonate}
            size="3x"
            className="pb-6  text-blue-800"
          />
          <h2 className="text-center text-white text-3xl font-bold">
            Donate To Support
          </h2>
          <h2 className="text-center text-white text-xl font-bold px-6">
            Sponsor an entire trending project
          </h2>

          <button className="bg-blue-500 w-[15rem] text-white hover:bg-blue-800  mt-10 px-4 py-2 rounded-md  border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            Donate Now
          </button>
        </div>

        <div className=" socials flex flex-col items-center justify-center w-1/3 text-wrap">
          <FontAwesomeIcon
            icon={faHandshake}
            size="3x"
            className="text-blue-800"
          />
          <h2 className="text-center text-white text-3xl font-bold">
            Become A Partner
          </h2>
          <h2 className="text-center text-white text-xl font-bold px-6">
            Let's Make A Difference Today
          </h2>

          <button className="bg-blue-500 w-[15rem] text-white hover:bg-blue-800  mt-10 px-4 py-2 rounded-md  border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            Get Involved Now
          </button>
        </div>
      </div>
    </section>
  );
}
