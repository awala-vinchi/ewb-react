import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";

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
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR PROJECTS</h2>
        <p className="text-md ">Meet our Team ;</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData &&
          projectData.map((project, index) => (
            <article>
              <Link
                to={`/projects/${project.slug.current}`}
                key={project.slug.current}
              >
                <div
                  className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                  key={index}
                >
                  {/* Image */}
                  <img
                    className="w-full h-48 object-cover"
                    src={project.mainImage.asset.url} // Replace with the image URL you want
                    alt={project.mainImage.alt}
                  />

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h2>

                    {/* Location */}
                    <h4 className="text-sm font-semibold text-gray-600 mb-4">
                      {project.location}
                    </h4>

                    <p className="text-sm mb-4">{project.description}</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {project.projectCompleted}
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-between">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Donate Now
                      </button>
                      <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
                        Program Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
      </div>
    </section>
  );
}
