import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../sanityClient";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Team() {
  const [teamData, setTeam] = useState(null);

  async function getTeam() {
    try {
      const data = await client.fetch(
        `*[_type == "team"]{
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
          linkedinProfile,
          facebookProfile,
          xProfile
        }`
      );
      setTeam(data);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  }

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR TEAM</h2>
        <p className="text-md">Meet our Team ;</p>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamData &&
            teamData.map((team) => (
              <article key={team.slug?.current}>
                <Link to={`/projects/${team.slug?.current}`}>
                  <div className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={
                          team.profileImage?.asset?.url ||
                          "https://via.placeholder.com/150"
                        }
                        alt={team.name || "Team Member"}
                        className="w-full h-60 object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 relative bg-white -mt-6 z-10 rounded-lg shadow-sm">
                      {/* Role */}
                      <p className="text-blue-500 text-sm font-bold uppercase mb-1">
                        {team.position || "Role not specified"}
                      </p>
                      {/* Name */}
                      <h4 className="text-xl font-bold mb-2">{team.name}</h4>
                      {/* Description */}
                      <p className="text-sm mb-4">
                        {team.bio || "No bio available"}
                      </p>
                      {/* Social Media Icons */}
                      <div className="flex gap-4 text-blue-500">
                        {team.facebookProfile && (
                          <a
                            href={team.facebookProfile}
                            className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Facebook size={20} />
                          </a>  
                        )}
                        {team.xProfile && (
                          <a
                            href={team.xProfile}
                            className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter size={20} />
                          </a>
                        )}
                        {team.linkedinProfile && (
                          <a
                            href={team.linkedinProfile}
                            className="p-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-blue-600 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
