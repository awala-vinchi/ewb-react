import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/images/1.jpg";

export default function OurImpact() {
  return (
    <section className="py-16 bg-gray-100 text-neutral-600">
      {/* Section Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
        <p className="text-md md:text-lg">
          Together, we are making a difference. Here's a look at the lasting
          impact of our efforts.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Impact Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            500+
          </h3>
          <p className="text-lg md:text-xl mb-4">
            Clean Water Projects Completed
          </p>
          <p className="text-gray-500">
            We have implemented over 500 clean water projects in rural areas,
            providing access to safe drinking water for thousands of people.
          </p>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={Img1}
            alt="Project Impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Impact Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            200+
          </h3>
          <p className="text-lg md:text-xl mb-4">Volunteers Mobilized</p>
          <p className="text-gray-500">
            Over 200 dedicated volunteers have joined our cause, contributing
            their time and expertise to help us achieve our mission.
          </p>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={Img1}
            alt="Volunteer Impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Impact Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            1M+
          </h3>
          <p className="text-lg md:text-xl mb-4">Trees Planted</p>
          <p className="text-gray-500">
            As part of our climate initiative, we've planted over 1 million
            trees to combat deforestation and restore natural ecosystems.
          </p>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={Img1}
            alt="Environmental Impact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-blue-500 text-white text-md md:text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out">
            Get Involved and Make a Difference
          </button>
        </Link>
      </div>
    </section>
  );
}
