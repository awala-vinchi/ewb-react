import React, { useState } from "react";
import { PhoneCall, AtSign } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSc8eQIYRSFW1gUIWc4WUiv9AGmR1jw2Khp_5w9M7VRYIGJBag/viewform?usp=pp_url&entry.2005620554=${encodeURIComponent(
      name
    )}&entry.1045781291=${encodeURIComponent(
      email
    )}&entry.1166974658=${encodeURIComponent(
      phone
    )}&entry.839337160=${encodeURIComponent(message)}`;
    window.location.href = formUrl;
  };

  

  return (
    <section className="contact-page bg-blue-50 text-neutral-600 flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 bg-white shadow-lg rounded-3xl w-full max-w-md mt-10">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Get in Touch and Partner with Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-3xl shadow-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-3xl shadow-lg"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-3xl shadow-lg"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-3xl shadow-lg"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out w-full"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Google Map Embed */}
      <div className="container mx-auto px-6 my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31702.157405647667!2d-1.595732258073867!3d6.675433672447844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946c39956a09%3A0x67868ca2b098015f!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1733419547540!5m2!1sen!2sgh"
          width="100%"
          height="450"
          style={{ border: 2 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
}
