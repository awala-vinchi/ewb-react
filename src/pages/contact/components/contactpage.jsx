import React, { useState } from "react";
import { MapPin, AtSign, PhoneCall } from "lucide-react";

// Contact Form Component
export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log({ email, phone, name, message });
  };

  return (
    <section className="contact-page bg-blue-50 py-16 text-neutral-600">
      {/* Header Section */}

      {/* Contact Form */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-3xl shadow-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border rounded-3xl shadow-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-3xl shadow-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border rounded-3xl shadow-lg"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-start items-start pb-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white mb-20 rounded-3xl p-6">
            <h3 className="text-xl font-semibold my-4">Our Newsletters</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded-3xl shadow-lg"
                  required
                />
              </div>
              <div className="text-center flex justify-start">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-16">
        {" "}
        {/* Added horizontal padding */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-teal-100 p-6 rounded-3xl shadow-lg flex items-center">
            <div className="text-teal-500 text-3xl mr-4">
              <PhoneCall size="40" /> {/* Phone icon */}
            </div>
            <div>
              <h4 className="font-semibold text-xl">(+876) 765 665</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-teal-100 p-6 rounded-3xl shadow-lg flex items-center">
            <div className="text-teal-500 text-3xl mr-4">
              <AtSign size="40" /> {/* Envelope icon */}
            </div>
            <div>
              <h4 className="font-semibold text-xl">mail@influenca.id</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-teal-100 p-6 rounded-2xl shadow-lg flex items-center">
            <div className="text-teal-500 text-3xl mr-4">
              <MapPin size="40" /> {/* Location icon */}
            </div>
            <div>
              <h4 className="font-semibold text-xl">London Eye, London</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="container mx-auto px-6 my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31702.157405647667!2d-1.595732258073867!3d6.675433672447844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946c39956a09%3A0x67868ca2b098015f!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1733419547540!5m2!1sen!2sgh"
          width="100%" // Make the map responsive
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
