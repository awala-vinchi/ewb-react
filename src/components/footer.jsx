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
    url: "www.facebook.com/ewbknust",
    title: "Facebook",
  },
  {
    id: 2,
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/ewbknust/",
    url: "www.instagram.com/ewbknust",
    title: "Instagram:",
  },
  {
    id: 3,
    icon: <Twitter size={22} />,
    link: "https://twitter.com/ewbknust",
    url: "www.twitter.com/ewbknust",
    title: "Twitter:",
  },
  {
    id: 4,
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/company/ewbknust",
    url: "www.linkedin.com/ewbknust",
    title: "LinkedIn:",
  },
];

const contact = [
  {
    id: 2,
    icon: <Phone size={25} />,
    title: "Phone Number:",
    text1: "+233 (0) 59-582-6411",
  },
  {
    id: 3,
    icon: <Mail size={25} />,
    title: "Mail Address:",
    text1: "info@ewbknust.com",
  },
  {
    id: 1,
    icon: <MapPin size={25} />,
    title: "Official Address:",
    text1: [
      "Kwame Nkrumah University",
      "of Science and Technology,",
      "Kumasi, Ashanti Region, Ghana.",
    ],
  }
];


export default function Footer() {
  return (
    <footer className="w-full py-16 bg-navy-blue text-neutral-200 text-sm">
      {/* <div className="hero w-full h-96 bg-[url('/src/assets/images/6.jpg')] bg-cover bg-top relative mb-5">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div> */}

      <div className="flex justify-around mb-10">

        <div className="column_1  flex flex-col gap-3">
          <h1 className="font-bold text-xl">GET IN TOUCH</h1>

          <div className="">
            {contact.map((item) => (
              <div className="value mb-4" key={item.id}>
                <div className="flex gap-2">
                  <div className=" h-12 w-12 rounded-2xl flex  items-center justify-center text-white bg-blue-800">
                    {item.icon}
                  </div>

                  <div className="">
                    <h2 className="font-semibold mt-0 mb-0 ">{item.title}</h2>
                    {Array.isArray(item.text1) ? (
                      item.text1.map((line, index) => (
                        <p key={index} className="mt-0">
                          {line}
                          <br />
                        </p>
                      ))
                    ) : (
                      <p className="mt-1">{item.text1}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column_2 flex flex-col gap-3">
          <h1 className="font-bold text-xl">GET CONNECTED</h1>
          <div>
            {socials.map((item) => (
            
              <div className="flex items-center gap-4 mb-2" key={item.id}>
                <div className="border-0 rounded-full p-3 bg-blue-500 text-white hover:bg-blue-800 hover:border-blue-500 hover:shadow-md transition-all duration-300">
                  <a href={item.link}>{item.icon}</a>
                </div>
                <div className="flex flex-col">
                  <a href={item.link} className="font-semibold mt-0 mb-0">
                    {item.title}
                  </a>
                  <a href={item.link} className="text-blue-500 underline mt-0">
                    {item.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column_3 ">
          <h1 className="font-bold text-xl">GET SUBSCRIBED</h1>
          <p>
            Don’t miss our future updates.<br></br>Get Subscribed today!
          </p>
        </div>
      </div>

      <div className="text-center justify-center pt-6 border-t w-[90%] mx-auto">
        <small  className="">Copyright &copy; 2022 EWB-KNUST All Rights Reserved</small>
      </div>
    </footer>
  );
}
