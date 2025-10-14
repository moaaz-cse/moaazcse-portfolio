import React, { useState } from "react";
import data from "../../../data.json"; // adjust the path as needed
import { ArrowUpRight } from "lucide-react";

const Project = () => {
  // Get projects from the JSON file
  const projects = data.Projects || [];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="bg-fgm-black text-white px-6 py-16">
      {/* Heading */}
      <div className="flex flex-col justify-start mb-10">
        <h1 className="text-[100px] font-bold text-white -mt-8 transform scale-x-95 origin-left uppercase">
          Recent
        </h1>
        <h1 className="text-[100px] font-bold text-[#B6B4BD] -mt-12 uppercase">
          Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="md:w-9/12 lg:w-11/12 flex flex-col gap-6">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleExpand(index)}
              className="relative group bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6 cursor-pointer"
            >
              {/* Arrow Icon */}
              <ArrowUpRight
                className="absolute top-6 right-6 text-[#8e8e8e] group-hover:text-white transition"
                size={20}
              />

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 rounded-lg object-contain bg-white/5 p-2"
              />

              {/* Project Details */}
              <div className="flex-1">
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // prevent expand toggle when link clicked
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-white hover:text-[#B6B4BD] transition-colors duration-300">
                    {project.title}
                  </h3>
                </a>

                <p
                  className={`text-[#9d9d9d] text-sm md:text-base mt-3 leading-relaxed overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-96" : "max-h-12"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
