import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";
import { MapPin } from "lucide-react";
import { Rings } from "react-loader-spinner";

export default function Project() {
  const [projectData, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Optional error handling

  async function getProject() {
    try {
      const data = await client.fetch(`*[_type == "project"]{
        title,
        location,
        description,
        slug{
          current
        },
        mainImage{
          asset ->{
            url
          }
        }
      }`);
      setProject(data);
    } catch (err) {
      console.error("Error fetching project data:", err);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setIsLoading(false); // Ensure loading state is updated
    }
  }

  useEffect(() => {
    getProject();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Rings
          height="100"
          width="100"
          color="blue"
          ariaLabel="loading-indicator"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-semibold">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center">
      <div className="text-neutral-600 text-center p-10">
        <h2 className="text-3xl font-bold">OUR POPULAR PROJECTS</h2>
        <p className="text-md mt-2">Discover exciting upcoming events!</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        {projectData &&
          projectData.slice(0, 3).map((project) => (
            <article key={project.slug.current}>
              <Link
                to={`/projects/${project.slug.current}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative group h-96 w-72 overflow-hidden rounded-lg shadow-lg mx-auto">
                  <img
                    src={
                      project.mainImage?.asset?.url ||
                      "https://via.placeholder.com/300"
                    }
                    alt={project.mainImage?.alt || project.title}
                    className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm h-full w-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-end justify-center">
                    <div className="text-white text-start p-6">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <p className="flex text-wrap text-md">
                        <MapPin size={20} className="mt-1" />
                        <span className="pt-1 ml-1">{project.location}</span>
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
        <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600 mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}
