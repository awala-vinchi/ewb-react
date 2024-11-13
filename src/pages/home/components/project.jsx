import React from "react";

import Pjt1 from "../../../assets/images/h2o.jpg";
import Pjt2 from "../../../assets/images/ir.jpg";
import Pjt3 from "../../../assets/images/bg.jpg";

import { FaMapPin } from "react-icons/fa";


const projects = [
  {
    id: 1,
    title: "Water Distribution System",
    location: "Ullo, Upper West, Ghana",
    img: Pjt1,
  },
  {
    id: 2,
    title: "Rain Water Catchment/ Irrigation",
    location: "Ullo, Upper West, Ghana",
    img: Pjt2,
  },
  {
    id: 3,
    title: "Bridge Construction",
    location: "Ullo, Upper West, Ghana",
    img: Pjt3,
  },
];

export default function Project() {
  // Renamed to 'Project'
  return (
    <section className="w-full py-24 bg-stone-100 flex flex-col items-center justify-center">
      <div className="text-neutral-600 text-justify justify-center items-center p-10">
        <h2 className="text-3xl font-bold">POPULAR PROJECTS</h2>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          (
            item // Fixed 'projects.map' reference
          ) => (
            <div key={item.id}>
              <div className="relative group h-96 w-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item?.img}
                  alt={`${item.title}'s image`}
                  className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm h-full w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-end justify-center">
                  <div className="text-white text-start p-6">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="flex text-wrap text-md">
                      <FaMapPin size={25} className="" />
                      <p className="pt-1">{item.location}</p>
                    </p>
                    <button className="bg-blue-500 w-[6rem] text-white text-xs hover:bg-blue-600 mt-2 p-1 rounded-full border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-6">
        <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
          All Projects
        </button>
      </div>
    </section>
  );
}
