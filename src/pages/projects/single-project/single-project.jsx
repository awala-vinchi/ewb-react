import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import { PortableText } from "@portabletext/react";

export default function SingleProject() {
  const { slug } = useParams(); // Access the slug from the route
  const [project, setProject] = useState(null);

  async function fetchSingleProject() {
    try {
      const data = await client.fetch(
        `*[_type == "project" && slug.current == $slug]{
          title,
          location,
          body,
          projectCompleted,
          mainImage {
            asset->{
              url
            }
          },
          galleryImages[]{
            asset->{
              url
            }
          }
        }`,
        { slug }
      );
      setProject(data[0]); // Assign the fetched project to state
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  }

  useEffect(() => {
    fetchSingleProject();
  }, [slug]);

  // Custom components for Portable Text
  const components = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold my-6">{children}</h2>
      ),
      normal: ({ children }) => <p className="my-4 text-lg">{children}</p>,
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
      number: ({ children }) => (
        <ol className="list-decimal ml-6">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
      number: ({ children }) => <li className="mb-2">{children}</li>,
    },
    types: {
      image: ({ value }) => (
        <img
          src={value.asset.url}
          alt={value.alt || "Project Image"}
          className="w-full h-auto rounded-lg my-6"
        />
      ),
    },
  };

   if (loading) {
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


  return (
    <section className="w-full py-16 flex flex-col items-center bg-gray-50 text-gray-800">
      {project ? (
        <div className="max-w-5xl w-full p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <img
            src={project.mainImage.asset.url}
            alt={project.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> {project.location}
          </p>

          <p className="text-gray-600 mb-6">
            <strong>Percentage Completed:</strong> {project.projectCompleted}
          </p>

          <div className="text-gray-600 mb-4">
            <PortableText value={project.body} components={components} />
          </div>

          {/* Gallery Section */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.asset.url}
                    alt={`Gallery Image ${index + 1}`}
                    className="h-40 w-full object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-600">Loading project details...</p>
      )}
    </section>
  );
}
