import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import { PortableText } from "@portabletext/react";
import { Rings } from "react-loader-spinner"; // Ensure this is installed

export default function SingleProject() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true); // Declare loading state

  async function fetchSingleProject() {
    try {
      setLoading(true); // Start loading
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
          galleryImages[] {
            asset->{
              url
            }
          }
        }`,
        { slug }
      );
      setProject(data[0]);
    } catch (error) {
      console.error("Error fetching project data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  useEffect(() => {
    fetchSingleProject();
  }, [slug]);

  // Show loading spinner while fetching data
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
    <section className="w-full py-16 flex flex-col items-center bg-gray-50 text-gray-800 mt-10">
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
            <PortableText value={project.body} />
          </div>

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
        <p className="text-gray-600">No project found.</p>
      )}
    </section>
  );
}
