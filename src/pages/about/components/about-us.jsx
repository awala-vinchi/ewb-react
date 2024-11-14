import React from 'react'
import Img1 from "../../../assets/images/1.jpg";

export default function AboutUs() {
  return (
   
     
      <section className="intro w-full py-16 bg-stone-100 flex items-center justify-center gap-10">
        <div className="w-1/3 h-70 shadow-lg">
          <img
            src={Img1}
            alt="img1"
            className="w-full h-full object-cover rounded-lg border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="w-1/2 min-h-[500px] text-neutral-600 text-justify  flex flex-col justify-center items-start z-22 relative -mt-10">
          <p className="mt-4 text-md">
            Engineers Without Borders KNUST builds a better world through
            engineering projects that empower communities to meet their basic
            human needs. Our highly skilled volunteers work with communities to
            find appropriate solutions for their infrastructure needs.
            <br />
            <br />
            Invest your time where it will have the most impact. By lending your
            passion and expertise, you help us build strong, sustainable
            communities around the world!
            <br />
            <br />
            We're on the frontlines and sharing our expertise to innovate,
            respond, and prepare communities to withstand COVID-19 and future
            shocks. Join us in building resilient communities.
          </p>

          <button className="bg-blue-500 w-[10rem] text-white hover:bg-blue-600  mt-6 px-4 py-2 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out">
            Join Us
          </button>
        </div>
      </section>

  )
}
