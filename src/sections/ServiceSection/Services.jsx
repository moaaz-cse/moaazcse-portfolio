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
  const experienceNumber = yearOfExperience.replace(/\D/g, "");
  const projectNumber = projectCompleted.replace(/\D/g, "");

  return (
    <div className="">
      {/* Heading Section */}
      <div className="bg-fgm-black px-6 md:text-start xxs:text-center md:my-3 xxs:my-6">
        <div className="flex flex-col justify-start">
          <h1 className="md:text-[100px] xxs:text-[50px] font-bold text-white -mt-8 transform scale-x-96 origin-left uppercase">
            Software
          </h1>
          <h1 className="md:text-[100px] xxs:text-[50px] xxs:-mt-6 font-bold text-[#B6B4BD] md:-mt-12 uppercase">
            Engineer
          </h1>
        </div>

        {/* Dynamic Description */}
        <p className="md:w-9/12 lg:w-11/12 py-3 text-[#998f8f]">
          {description}
        </p>
      </div>

      {/* Experience & Projects Section */}
      <div className="md:w-11/12 h-[155.5px] px-6">
        <div className="flex w-full h-[155.5px] justify-start">
          {/* Years of Experience */}
          <div className="w-[200px] flex flex-col justify-between">
            <h1 className="text-[68px] font-bold text-fgm-white transform scale-x-190 origin-left tracking-[-3px]">
              +{experienceNumber}
            </h1>
            <h2 className="text-[#998F8F]">
              YEARS OF <br /> EXPERIENCE
            </h2>
          </div>

          {/* Projects Completed */}
          <div className="md:w-[250px] md:mx-10">
            <h1 className="text-[68px] font-bold text-fgm-white transform scale-x-190 origin-left tracking-[-3px]">
              +{projectNumber}
            </h1>
            <h2 className="text-[#998F8F]">
              PROJECTS <br /> COMPLETED
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
