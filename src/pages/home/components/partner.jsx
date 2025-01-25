import React from "react";
import ptn_1 from "../../../assets/images/usa.png";
import ptn_2 from "../../../assets/images/isu.png";
import ptn_3 from "../../../assets/images/KNUST.png";
import ptn_4 from "../../../assets/images/gwt.png";

const partner = [
  {
    id: 1,
    image: ptn_3,
    title: "KNUST logo",
  },
  {
    id: 2,
    image: ptn_1,
    title: "USA Ghana Embassy logo",
  },
  {
    id: 3,
    image: ptn_2,
    title: "Iowa State University logo",
  },
  {
    id: 4,
    image: ptn_4,
    title: "Greater Works Technologies logo",
  },
];

export default function Partners() {
  return (
    <section className="bg-stone-200 py-16 flex flex-col items-center text-neutral-600">
      {/* Title Section */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold lg:text-4xl">OUR PARTNERS</h2>
        <p className="text-md lg:text-lg text-gray-600">
          Trusted by the biggest brands.
        </p>
      </div>

      {/* Partners Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 w-full max-w-screen-xl">
        {partner.map((item) => (
          <div
            className="flex justify-center items-center"
            key={item.id}
            aria-label={item.title}
          >
            <img
              src={item.image}
              alt={item.title}
              className="max-w-full h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
