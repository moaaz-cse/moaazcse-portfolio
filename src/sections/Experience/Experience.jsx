import React from "react";
import data from "../../../data.json";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  // Access the Experience array from JSON
  const experienceData = data.Experience?.[0]; // Get the first (and only) object

  return (
    <section
      id="experience"
      className="bg-fgm-black text-white px-6 py-10 mt-10"
    >
      {/* Header Section */}
      <div className="text-start mb-8">
        <h1 className="text-[100px] font-bold text-white -mt-8 transform scale-x-96 origin-left uppercase">
          {experienceData.exp}
        </h1>
        <h1 className="text-[100px] font-bold text-[#B6B4BD] -mt-12 uppercase">
          EXPERIENCE
        </h1>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-6 md:w-11/12">
        {experienceData.items.map((exp, idx) => (
          <div
            key={idx}
            className="relative group bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 rounded-2xl p-6 md:p-8"
          >
            {/* Arrow Icon */}
            <ArrowUpRight
              className="absolute top-6 right-6 text-[#8e8e8e] group-hover:text-white transition"
              size={20}
            />

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              {exp.title}
            </h3>

            {/* Responsibilities List */}
            <ul className="list-disc pl-5 text-[#9d9d9d] text-base md:text-lg leading-relaxed mb-4 space-y-2">
              {exp.responsibilities.map((resp, rIdx) => (
                <li key={rIdx}>{resp}</li>
              ))}
            </ul>

            {/* Date */}
            <p className="text-[#767676] text-sm md:text-base">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
