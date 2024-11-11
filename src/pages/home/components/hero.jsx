import React from 'react'

export default function hero() {
  return (
    <section className="hero w-full h-screen bg-[url('/src/assets/images/hero.jpg')] bg-cover bg-center relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,20,68,0.92)] to-[rgba(10,33,58,0.57)]">
        {/* Hero message aligned to the left */}
        <div className="hero_message flex flex-col justify-center pt-24 px-14 items-start text-white h-full">
          <h1 className="text-7xl font-bold w-[38rem]">
            Welcome to EWB - KNUST
          </h1>
          <p className=" text-3xl">Impacting Lives, Changing Communities!</p>

          <div className="mt-6">
            <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600  mt-4 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
