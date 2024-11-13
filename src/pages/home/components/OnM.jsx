import React from 'react'


const objectives = [
  {
    id: 1,
    icon: "🌍",
    title: "Community Empowerment",
    description:
      "Actively seek opportunities to engage in projects that build the capacities and empower the most underserved communities in Ghana to meet their basic human needs.",
  },
  {
    id: 2,
    icon: "📚",
    title: "Knowledge Sharing",
    description:
      "Provide students with technical and cultural knowledge to effectively approach and solve world problems on a community-based level.",
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Engineering Skills",
    description:
      "Develop skill set in engineering students to prepare them to be of service to humanity.",
  },
  {
    id: 4,
    icon: "🤝",
    title: "Integrity & Responsibility",
    description:
      "Cultivate a sense of volunteerism, integrity, and responsibility in KNUST students.",
  },
  {
    id: 5,
    icon: "🌐",
    title: "Building Relationships",
    description:
      "Develop and foster relationships between EWB-Ghana KNUST, professional mentors, and disadvantaged communities.",
  },
];

export default function OnM() {
  return (
    <section className="mission-n-objectives w-full py-16 bg-white items-center justify-center space-y-10">
      <div className="mission w-1/2  bg-pink-100 m-auto p-5 mt-16 text-neutral-600 text-justify  flex flex-col justify-center items-center z-20 rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out relative">
        <h2 className="text-3xl font-bold">OUR MISSION</h2>
        <p className="mt-4 text-md">
          The mission of EWB-KNUST shall be to work with disadvantaged
          communities in Ghana to improve their quality of life through
          education and the implementation of practical, environmental and
          economically sustainable engineering projects.
        </p>
      </div>

      <div className="objectives text-neutral-600 text-justify flex flex-col justify-center items-center p-16">
        <div>
          <h2 className="text-3xl font-bold">OUR OBJECTIVES</h2>
          <p className="text-md ml-5"> Our Strategic Priorities are;</p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-5">


          {objectives.map((item) => (
            <div
              className="col-span-1 bg-pink-100 text-neutral-600 rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out  p-6   flex flex-col items-center text-center"
              key={item.id}
            >
              <span className="text-3xl">{item.icon}</span>{" "}
              {/* Globe with Meridians */}
              <h3 className="text-lg font-bold mt-4">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
