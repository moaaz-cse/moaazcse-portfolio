import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Listbox,
  ListboxOption,
  ListboxOptions,
  ListboxButton,
} from "@headlessui/react";
import data from "../../../data.json";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const contactData = data.Contact?.[0];

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);

    // Here you would typically handle form submission, e.g., send data to a server
    try {
      // Here you would typically handle the form submission,
      await fetch(
        "https://script.google.com/macros/s/AKfycbzeWGEQ7kbweXj18tHRckBz-ikhuxS4SiuBbwdVpM1FZh09h-nHbe6PhR2cztn6h6Ou/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      toast.success("Form submitted successfully!", { autoClose: 3000 });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error(
        "Sorry, there was an error sending your message. Please try again later.",
        { autoClose: 3000 }
      );
    } finally {
      setLoading(false);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact"
      className="bg-fgm-black text-white px-4 py-10 sm:px-6 lg:px-12 max-w-3xl  rounded-2xl shadow-lg "
      // style={{ border: "2px solid red" }}
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-start mb-10 my-6">
        <h1 className="md:text-[90px] text-[50px] font-extrabold text-white uppercase leading-none">
          Let's Work
        </h1>
        <h1 className="md:text-[90px] text-[50px] font-extrabold text-[#B6B4BD] uppercase mt-2 md:mt-0 leading-none">
          Together
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        // style={{ border: "2px solid red" }}
      >
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
                  onClick={() =>
                    setFormData({ ...formData, subject: option.value })
                  }
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="p-3 rounded-lg bg-orange-500 hover:bg-orange-600 font-semibold transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <p className="mt-6 text-xs sm:text-sm text-gray-400 text-center">
        Made by
        <a href="#" className="text-orange-500 hover:underline mx-1">
          {contactData.name}
        </a>
        |
        <a
          href={`mailto:${contactData.email}`}
          className="text-orange-500 hover:underline mx-1"
        >
          {contactData.email}
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
