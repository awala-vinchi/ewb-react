import React from 'react'

import {Heart, MessageCircle, Share2} from "lucide-react";

export default function News() {
  return (
    <section className="py-16 w-full flex flex-col items-center justify-center text-neutral-600 bg-stone-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold">OUR LATEST NEWS</h2>
        <p className="text-md ">Blog Posts;</p>
      </div>

      <div>
       
        <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
          {/* Image placeholder */}
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>

          {/* Headline and Subheadline */}
          <h2 className="text-2xl font-bold mb-1">Headline</h2>
          <h3 className="text-lg text-gray-500 mb-2">Subhead</h3>

          {/* Body text */}
          <p className="text-sm text-gray-600 mb-4">
            Magnis porttitor penatibus facilisis feugiat hendrerit. Feugiat
            semper tincidunt mattis lacinia sed velit egestas.
          </p>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-300 text-base rounded-lg">
              Read
            </button>
            <button className="px-4 py-2 bg-gray-800 text-base text-white rounded-lg">
              <Heart />
            </button>
            <button className="px-4 py-2 bg-gray-800 text-base text-white rounded-lg">
              <MessageCircle />
            </button>
            <button className="px-4 py-2 bg-gray-800 text-base text-white rounded-lg">
              <Share2 />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
