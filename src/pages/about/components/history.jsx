import React from "react";

export default function HistorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our History
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We started with a simple idea: to create a better future for those in
          need. Over the years, our organization has grown into a community of
          passionate people dedicated to making a real impact. Here's a look at
          our journey so far:
        </p>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our History"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-xl text-gray-700 mb-4">
                Since our founding in 2010, we have worked relentlessly to
                improve lives, focusing on education, healthcare, and
                sustainable development in communities that need it the most.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Through partnerships with local and international organizations,
                we have successfully launched several impactful programs, with
                thousands of lives touched by our efforts.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
            <div className="w-full md:w-1/2">
              <p className="text-xl text-gray-700 mb-4">
                As we continue to grow, we stay true to our mission of building
                a better future. With your help, we aim to extend our reach and
                accomplish even more in the coming years.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our Achievements"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
