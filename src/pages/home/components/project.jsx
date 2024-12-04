import React from "react";
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import  client from "../../../sanityClient";

import { FaMapPin } from "react-icons/fa";


export default function Project() {
  
const [projectData, setProject] = useState(null);

async function getProject() {
  const data = await client.fetch(`*[_type == "project"]{
          title,
          location,
          description,
         slug{
         current
         },
         mainImage{
          asset ->{
          url}
          }
        }`);

  setProject(data);
}

useEffect(() => {
  getProject();
}, []);


  return (
    <section className="w-full py-24 flex flex-col items-center justify-center">
      <div className="text-neutral-600 text-justify justify-center items-center p-10">
        <h2 className="text-3xl font-bold">OUR POPULAR PROJECTS</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly">
        {projectData &&
          projectData.map((project, index) => (
            <article>
              <Link
                to={`/projects/${project.slug.current}`}
                key={project.slug.current}
              >
                <div
                  className="relative group h-96 w-64 overflow-hidden rounded-lg shadow-lg"
                  key={index}
                >
                  <img
                    src={project.mainImage.asset.url} // Replace with the image URL you want
                    alt={project.mainImage.alt}
                    className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm h-full w-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-end justify-center">
                    <div className="text-white text-start p-6">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <p className="flex text-wrap text-md">
                        <FaMapPin size={25} className="" />
                        <p className="pt-1">{project.location}</p>
                      </p>
                      <button className="bg-blue-500 w-[6rem] text-white text-xs hover:bg-blue-600 mt-2 p-1 rounded-full border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
      </div>

      <div className="mt-6">
        <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
          All Projects
        </button>
      </div>
    </section>
  );
}
