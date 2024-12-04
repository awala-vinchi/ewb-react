import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDonate,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const helpOptions = [
  {
    title: "Become A Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tenetur maxime commodo teneture.",
    icon: <FontAwesomeIcon icon={faUser} className="h-12 w-12 text-blue-500" />,
    buttonText: "Join Us Now",
  },
  {
    title: "Donate To Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tenetur maxime commodo teneture.",
    icon: (
      <FontAwesomeIcon
        icon={faDonate}
        className="h-12 w-12 text-blue-500"
      />
    ),
    buttonText: "Donate Now",
  },
  {
    title: "Become A Partner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tenetur maxime commodo teneture.",
    icon: (
      <FontAwesomeIcon icon={faHandshake} className="h-12 w-12 text-blue-500" />
    ),
    buttonText: "Learn More",
  },
];

export default function HowYouCanHelp() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How You Can Help
        </h2>
        <p className="text-lg text-gray-600">
          Whether you have time, skills, or resources,
          <br />
          there are many ways you can make a difference.
          <br />
          Here's how you can get involved and contribute to our mission.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {helpOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="mb-4 text-blue-500">{option.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {option.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{option.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              {option.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out">
          Get Involved Today
        </button>
      </div>
    </section>
  );
}
