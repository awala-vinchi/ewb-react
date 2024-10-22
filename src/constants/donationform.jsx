import React, { useState } from "react";

function ContactForm() {
  // Setting up state for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Form submitted:", formData);

    // You can now send `formData` to a server, clear the form, etc.
  };

  return (
    <div className="form-container max-w-[400px] m-0">
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">
            Message:
          </label>
          <textarea
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-800 rounded-md border hover:border-blue-500 hover:shadow-md transition-all duration-300 ease-in-out"
        >
          Invole Now
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
