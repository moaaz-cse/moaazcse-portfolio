// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="bg-black text-white text-center px-4 py-10 sm:px-6 lg:px-12 max-w-3xl mx-auto rounded-2xl shadow-lg">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        <span className="block">LET&apos;S WORK</span>
        <span className="block text-gray-600 font-normal">TOGETHER</span>
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name + Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Subject */}
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select...</option>
          <option value="project">New Project</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Other</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="p-3 rounded-lg bg-orange-500 hover:bg-orange-600 font-semibold transition"
        >
          Submit
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-xs sm:text-sm text-gray-400">
        Made by{" "}
        <a href="#" className="text-orange-500 hover:underline">
          Templyo
        </a>{" "}
        | Powered by{" "}
        <a href="#" className="text-orange-500 hover:underline">
          Framer
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
