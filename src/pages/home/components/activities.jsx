import React from "react";
import { HandCoins, Leaf, LifeBuoy } from "lucide-react"; // Icons from lucide-react
import { Link } from "react-router-dom";

export default function OurActivity() {
  const activities = [
    {
      icon: <HandCoins size={48} className="text-teal-400" />, // Fundraising icon
      title: "Fundraising",
      description:
        "Our mission is to gather financial support for meaningful causes, empowering communities and driving impactful change.",
    },
    {
      icon: <Leaf size={48} className="text-teal-400" />, // Volunteering icon
      title: "Volunteering",
      description:
        "Join hands with us to volunteer your time and skills, making a direct impact on lives and creating a better tomorrow.",
    },
    {
      icon: <LifeBuoy size={48} className="text-teal-400" />, // Help & Support icon
      title: "Help & Support",
      description:
        "We offer guidance and assistance to those in need, ensuring everyone has access to resources for a better quality of life.",
    },
  ];

  return (
    <section className="py-16 bg-white text-neutral-600">
      {/* Title Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold lg:text-4xl">OUR ACTIVITY</h2>
        <p className="text-gray-500 text-lg lg:text-xl">
          Increase in the awareness among people about various issues
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 lg:px-32">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{activity.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{activity.description}</p>

            {/* Button */}
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <button className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-green-600 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
