import React from 'react'

const volunteers = [
  {
    name: "Davis Lauren",
    role: "Director",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-davis-image", // Replace with actual image path
  },
  {
    name: "Jenny White",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-jenny-image", // Replace with actual image path
  },
  {
    name: "James Smith",
    role: "Volunteer",
    description:
      "Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.",
    img: "path-to-james-image", // Replace with actual image path
  },
];

export default function project_teams() {
  return (
    <section className="bg-stone-100 flex flex-col items-center justify-center text-neutral-600 gap-6 py-16 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR PROJECTS</h2>
        <p className="text-md ">Meet our Team ;</p>
      </div>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Image */}
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/600x400" // Replace with the image URL you want
          alt="Children"
        />

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Financial Help For Poor Families
          </h2>

          <p className="text-sm mb-4">
            Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu
            scipit.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-orange-500 h-3 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Percentage Complete: 70%</p>

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Donate Now
            </button>
            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-100">
              Program Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
