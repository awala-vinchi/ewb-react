import React, { useState } from "react";
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
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://ewb-react-backend.onrender.com/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );


      const data = await response.json();
      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail(""); // Clear the input field
      } else {
        setMessage(data.message || "Subscription failed");
      }
    } catch (error) {
      setMessage("Error subscribing. Please try again later.");
    }
  };

  return (
    <footer className="w-full py-16 bg-navy-blue text-neutral-200 text-sm">
      <div className="flex flex-col sm:flex-row justify-around mb-10 px-2">
        <div className="column_1 flex flex-col gap-4">
          <h1 className="font-bold text-lg sm:text-xl">GET IN TOUCH</h1>
          <div>
            {contact.map((item) => (
              <div className="value mb-4" key={item.id}>
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 rounded-full flex items-center justify-center text-white bg-blue-800">
                    {item.icon}
                  </div>
                  <div className="text-sm sm:text-base">
                    <h2 className="font-semibold">{item.title}</h2>
                    {Array.isArray(item.text1) ? (
                      item.text1.map((line, index) => (
                        <p key={index} className="leading-tight">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p>{item.text1}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column_2 flex flex-col gap-4">
          <h1 className="font-bold text-lg sm:text-xl">GET CONNECTED</h1>
          <div>
            {socials.map((item) => (
              <div className="flex items-center gap-3 mb-4" key={item.id}>
                <div className="rounded-full p-2 sm:p-3 bg-blue-500 text-white hover:bg-blue-800 transition-all">
                  <a href={item.link}>{item.icon}</a>
                </div>
                <div className="flex flex-col">
                  <a href={item.link} className="font-semibold">
                    {item.title}
                  </a>
                  <a
                    href={item.link}
                    className="text-blue-500 underline text-sm"
                  >
                    {item.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column_3 flex flex-col gap-4">
          <h1 className="font-bold text-lg sm:text-xl">GET SUBSCRIBED</h1>
          <p className="text-sm">
            Don’t miss our future updates.
            <br />
            Get Subscribed today!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-2xl shadow-lg text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>

      <div className="text-center mt-10 pt-6 border-t w-[90%] mx-auto">
        <small>&copy; 2022 EWB-KNUST All Rights Reserved</small>
      </div>
    </footer>
  );
}