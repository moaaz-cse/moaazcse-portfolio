import React from "react";
import data from "../../../data.json";

const Services = () => {
  const serviceData = data.ServiceSection?.[0]; // Access the first item safely

  if (!serviceData) {
    return (
      <p className="text-center text-gray-400 py-10">
        No service data available.
      </p>
    );
  }

  // Extract dynamic data
  const { description, yearOfExperience, projectCompleted } = serviceData;

  // Extract numbers only (for display like +12 → +2)
  const experienceNumber = yearOfExperience.replace(/[^\d.]/g, "");
  const projectNumber = projectCompleted.replace(/[^\d.]/g, "");

  return (
    <div className="">
      {/* Heading Section */}
      <div className="bg-fgm-black px-6 md:text-start xxs:text-center md:my-3 xxs:my-6">
        <div className="flex flex-col justify-start">
          <h1 className="md:text-[100px] xs:text-left xxxs:mt-2.5 xxxs:text-center xxxs:text-[50px] xxs:text-[50px] font-bold text-white -mt-8 transform scale-x-96 origin-left uppercase">
            Cloud
          </h1>
          <h1 className="md:text-[100px] xs:text-left xxs:text-[50px] xxxs:text-[50px] xxxs:text-center xxs:-mt-6 font-bold text-[#B6B4BD] md:-mt-12 uppercase">
            Engineer
          </h1>
        </div>

        {/* Dynamic Description */}
        <p className="md:w-9/12 lg:w-11/12 py-3 text-[#998f8f]">
          {description}
        </p>
      </div>

      {/* Experience & Projects Section */}
      <div className="w-full md:w-11/12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center md:justify-start gap-6 md:gap-10">
          {/* Years of Experience */}
          <div className="flex flex-col justify-between items-center md:items-start w-full md:w-[200px]">
            <h1 className="text-[48px] sm:text-[56px] md:text-[68px] font-bold text-fgm-white md:transform md:scale-x-150 md:origin-left tracking-tight">
              +{experienceNumber}
            </h1>
            <h2 className="text-[#998F8F] text-center md:text-left text-sm sm:text-base">
              YEARS OF <br /> EXPERIENCE
            </h2>
          </div>

          {/* Projects Completed */}
          <div className="flex flex-col justify-between items-center md:items-start w-full md:w-[250px]">
            <h1 className="text-[48px] sm:text-[56px] md:text-[68px] font-bold text-fgm-white md:transform md:scale-x-150 md:origin-left tracking-tight">
              +{projectNumber}
            </h1>
            <h2 className="text-[#998F8F] text-center md:text-left text-sm sm:text-base">
              PROJECTS <br /> COMPLETED
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
