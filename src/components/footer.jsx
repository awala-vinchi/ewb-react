import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const socials = [
  {
    id: 1,
    icon: <Facebook size={22} />,
    link: "https://www.facebook.com/ewbknust",
  },
  {
    id: 2,
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/ewbknust/",
  },
  {
    id: 3,
    icon: <Twitter size={22} />,
    link: "https://twitter.com/ewbknust",
  },
  {
    id: 4,
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/company/ewbknust",
  },
];

const contact = [
  {
    id: 1,
    icon: <MapPin size={25} />,
    title: "Official Address:",
    text1: "KNUST, Kumasi",
    text2: "Ghana",
  },
  {
    id: 2,
    icon: <Phone size={25} />,
    title: "Phone Number:",
    text1: "Telephone: +233 599-482-207",
    text2: "Mobile: +233 599-482-207",
  },
  {
    id: 1,
    icon: <Mail size={25} />,
    title: "Mail Address:",
    text1: "kanmiezah@gmail.com",
    text2: "kanmiezah@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-stone-300  text-neutral-600 flex flex-col">
      <div className="flex gap-6 items-center justify-evenly pb-5 border-b w-[89%] mx-auto">
        {contact.map((item) => (
          <div className="" key={item.id}>
            <div className="flex gap-3 ">
              <div className=" h-12 w-12 rounded-2xl flex  items-center justify-center text-white bg-blue-800">
                {item.icon}
              </div>

              <div className="">
                {/* <h2 className="font-semibold">{item.title}</h2> */}
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex items-center justify-center gap-5 mt-10">
        {socials.map((item) => (
          <div
            className=" border-0 rounded-full p-3 bg-blue-500 text-white hover:bg-blue-800    hover:border-blue-500 hover:shadow-md transition-all duration-300 "
            key={item.id}
          >
            <a href={item.link}>{item.icon}</a>
          </div>
        ))}
      </div>
      <div className="w-full text-center justify-center mt-10">
        <p>Copyright &copy; 2022 EWB-KNUST All Rights Reserved</p>
      </div>
    </footer>
  );
}
