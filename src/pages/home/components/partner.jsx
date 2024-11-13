import React from 'react'
import ptn_1 from "../../../assets/images/usa.png";
import ptn_2 from "../../../assets/images/isu.png";
import ptn_3 from "../../../assets/images/KNUST.png";
import ptn_4 from "../../../assets/images/gwt.png";

const partner = [
 {
  id: 1,
  image:ptn_3,
  title:"knust logo",
 },
 {
  id: 2,
  image:ptn_1,
  title:"usa ghana embassy logo",
 },
 {
  id: 3,
  image:ptn_2,
  title:"iowa state university logo",
 },
 {
  id: 4,
  image:ptn_4,
  title:"greater works technologies logo",
 }
]

export default function Partners() {
  return (
    <section className="bg-stone-200 py-16 flex flex-col items-center  text-neutral-600">
      <div>
        <h2 className="text-3xl font-bold">OUR PARTNERS</h2>
        <p className="text-md mb-6 text-center"> Trusted by the biggest brands.</p>
      </div>
      <div className="flex justify-evenly items-center w-full">
        {partner.map((item) => (
          <div className="w-1/4 h-32" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
