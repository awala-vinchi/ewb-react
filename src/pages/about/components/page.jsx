import React from "react";
import { Handshake, Book, Droplet, Heart, Salad } from "lucide-react";

export default function Page() {
  return (
    <section className="flex flex-col items-center text-center py-12 bg-white text-neutral-600">
      {/* Introduction Section */}
      <header className="max-w-5xl flex flex-col lg:flex-row lg:gap-8 text-center  mb-10">
        <h2 className="text-4xl font-bold mt-8 lg:mb-0 lg:flex-1 lg:text-right">
          We are a Global non-profit organization that supports good causes and
          positive change all over the world.
        </h2>
        <p className="text-lg lg:flex-1 lg:text-left">
          EWB-KNUST brings together engineers, students, and anyone with a
          passion for helping disadvantaged communities improve their quality of
          life. EWB-KNUST focuses on both education and the implementation of
          sustainable engineering projects at the grassroot level. Our members
          work hard to ensure that the communities they serve benefit as much as
          possible from every project, whilst our Board ensures that each
          project gets the funding it needs to achieve its full potential.
        </p>
      </header>

      {/* Engagement Areas */}
      <p className="mb-6 font-semibold text-xl">
        Actively engaged in the following areas:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
        {[
          { icon: Handshake, label: "No Poverty" },
          { icon: Book, label: "Best Education" },
          { icon: Droplet, label: "Clean Water" },
          { icon: Heart, label: "Good Health" },
          { icon: Salad, label: "Nutrition" },
        ].map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <item.icon className="text-blue-500 mb-4" size={40} />
            <p className="font-semibold">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
