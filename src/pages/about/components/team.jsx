import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";
import { Rings } from "react-loader-spinner"; // Import Rings for the loading spinner

export default function Team() {
  const [teamData, setTeam] = useState(null);
  const [loading, setLoading] = useState(true); // Define the loading state

  async function getTeam() {
    try {
      const data = await client.fetch(
        `*[_type == "team"] | order(order asc) {
          name,
          position,
          bio,
          slug {
            current
          },
          profileImage {
            asset -> {
              url
            }
          },
        }`
      );
      setTeam(data);
    } catch (error) {
      console.error("Error fetching team data:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  }

  useEffect(() => {
    getTeam();
  }, []);

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
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p className="text-md text-gray-500">
          Dedicated individuals passionate about holistic well-being.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {/* "Our Team" Card */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <p className="text-gray-600 text-sm">
            Dedicated individuals passionate about holistic well-being. Meet the
            diverse team driving innovation and shaping the future of wellness.
          </p>
        </div>

        {/* Team Members */}
        {teamData &&
          teamData.map((team) => (
            <div
              key={team.slug?.current}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative h-96"
            >
              {/* Image Section */}
              <Link
                to={`/team/${team.slug?.current}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  src={
                    team.profileImage?.asset?.url ||
                    "https://via.placeholder.com/150"
                  }
                  alt={team.name || "Team Member"}
                  className="w-full h-full object-cover"
                />

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 m-6 bg-transparent backdrop-blur-md rounded-lg flex flex-col items-start justify-center">
                  <h4 className="text-md font-bold text-white">
                    {team.name}
                  </h4>
                  <p className="text-sm font-bold text-white">
                    {team.position || "Role not specified"}
                  </p>
                </div>
              </Link>
            </div>
          ))}

        {/* "Join the Team" Card */}
        <div className="lg:col-span-1 bg-blue-100 p-6 rounded-lg shadow-md flex flex-col justify-center text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Join the Team
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Embark on a transformative journey with us. Join the team shaping
            the future of wellness innovation.
          </p>
          <div className="text-center mt-12">
            <Link to="/membership" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
