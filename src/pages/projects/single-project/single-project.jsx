import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import SanityBlockContent from "@sanity/block-content-to-react";

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

  const customSerializers = {
    types: {
      block(props) {
        const { children, style } = props;

        if (style === "h2") {
          return <h2 className="text-2xl font-semibold my-6">{children}</h2>;
        }

        // Default block style for paragraphs
        return <p className="my-4 text-lg">{children}</p>; // Add margin between paragraphs
      },
    },
  };

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

          <p className="text-gray-600 mb-4">
            <SanityBlockContent
              blocks={project.body}
              projectId="ltigqay9"
              dataset="production"
              serializers={customSerializers}
            />
          </p>

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
