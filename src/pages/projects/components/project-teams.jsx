import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";

export default function Project() {
  const [projectData, setProject] = useState(null);

  async function getProject() {
    try {
      const data = await client.fetch(`*[_type == "project"]{
        title,
        location,
        projectCompleted, // Fetch the progress percentage
        slug {
          current
        },
        mainImage {
          asset -> {
            url
          },
          alt
        }
      }`);
      setProject(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData &&
          projectData.map((project) => (
            <article key={project.slug.current}>
              <Link to={`/projects/${project.slug.current}`}>
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                  {/* Image */}
                  <img
                    className="w-full h-48 object-cover"
                    src={project.mainImage?.asset?.url}
                    alt={project.mainImage?.alt || "Project Image"}
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

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${project.projectCompleted || 0}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {project.projectCompleted
                        ? `${project.projectCompleted}% Completed`
                        : "Progress not available"}
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
