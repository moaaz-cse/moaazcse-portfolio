import React from "react";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experienceData = {
    exp: "2 YEARS OF",
    items: [
      {
        title: "Software Developer | Publicis Sapient",
        date: "Oct 2021 - Dec 2022",
        description:
          "Managed troubleshooting and resolving post-deployment issues (L3 support) across multiple markets, reducing bug turnaround time by 30%. Developed and maintained full-stack features for Nestlé brand portals, handling frontend interfaces and backend integrations.",
      },
      {
        title: "MERN Developer | Embifi Pvt. Ltd.",
        date: "Feb 2021 - Sep 2021",
        description:
          "Developed and deployed the company’s website using the MERN stack, optimized for mobile, tablet, and desktop devices. Collaborated with backend teams to optimize API performance and integrated server-side data into frontend views, enhancing user engagement.",
      },
    ],
  };

  return (
    <section
      id="experience"
      className="bg-fgm-black text-white px-6 py-10 mt-10"
    >
      {/* Header Section */}
      <div className="text-start mb-8">
        <h1 className="text-[100px] font-bold text-white -mt-8 transform scale-x-96 origin-left uppercase">
          {experienceData.exp} {/* e.g. '2' */}
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

            {/* Description */}
            <p className="text-[#9d9d9d] text-base md:text-lg leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Date */}
            <p className="text-[#767676] text-sm md:text-base">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
