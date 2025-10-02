import React, { useState } from "react";
import {
  Listbox,
  ListboxOption,
  ListboxOptions,
  ListboxButton,
} from "@headlessui/react";
const options = [
  { value: "", label: "Select..." },
  { value: "project", label: "New Project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "other", label: "Other" },
];
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
    <div
      id="contact"
      className="bg-fgm-black text-white text-center px-4 py-10 sm:px-6 lg:px-12 max-w-3xl mx-auto rounded-2xl shadow-lg"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        <span className="block">LET&apos;S WORK</span>
        <span className="block text-gray-600 font-normal">TOGETHER</span>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 lg:w-1/2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 lg:w-1/2"
          />
        </div>
        <Listbox>
          <div className="relative">
            <ListboxButton className="w-full p-3 rounded-lg bg-slate-800 text-white text-left focus:outline-none focus:ring-2 focus:ring-orange-500">
              {({ value }) => value?.label ?? "Select..."}
            </ListboxButton>

            <ListboxOptions className="absolute mt-1 w-full rounded-lg bg-slate-900 shadow-lg z-10">
              {options.map((option, idx) => (
                <ListboxOption
                  key={idx}
                  value={option}
                  className="cursor-pointer select-none p-2 text-white text-left hover:bg-slate-700"
                >
                  {option.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="p-3 rounded-lg bg-orange-500 hover:bg-orange-600 font-semibold transition"
        >
          Submit
        </button>
      </form>
      <p className="mt-6 text-xs sm:text-sm text-gray-400">
        Made by
        <a href="#" className="text-orange-500 hover:underline mx-1">
          Moaaz
        </a>
        | Powered by
        <a href="#" className="text-orange-500 hover:underline mx-1">
          Growing Mindset
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
