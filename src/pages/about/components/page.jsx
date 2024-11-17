import React from 'react'
import { Handshake, Book, Droplet, Heart, Salad } from "lucide-react";

export default function page() {
  return (
    <section className="flex flex-col items-center text-center py-12 bg-white text-neutral-600">
      <h2 className="text-4xl font-bold mx-24 mb-4">
        We are a Global non-profit organization that supports good causes and
        positive change all over the world.
      </h2>
      <p className=" mb-8 max-w-2xl">
        EWB-KNUST brings together engineers, students and anyone with a passion
        for helping disadvantaged communities improve their quality of life.
        EWB-KNUST focuses on both education and the implementation of
        sustainable engineering projects at the grassroot level. Our members
        work hard to ensure that the communities they serve benefit as much as
        possible from every project whilst our Board ensures that each project
        gets the funding it needs to achieve its full potential.
      </p>
      <p className="mb-6 font-semibold text-xl max-w-2xl">
        Actively engaged in the following areas;
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl">
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
          <Handshake className="text-blue-500 mb-4" size={40} />
          <p className="font-semibold">No Poverty</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
          <Book className="text-blue-500 mb-4" size={40} />
          <p className="font-semibold">Best Education</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
          <Droplet className="text-blue-500 mb-4" size={40} />
          <p className="font-semibold">Clean Water</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
          <Heart className="text-blue-500 mb-4" size={40} />
          <p className="font-semibold">Good Health</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
          <Salad className="text-blue-500 mb-4" size={40} />
          <p className="font-semibold">Nutrition</p>
        </div>
      </div>
    </section>
  );
}
