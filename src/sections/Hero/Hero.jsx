import React from "react";
import img from "../../assets/images/moaaz_img.JPG";
import gitHubSvg from "../../assets/icons/gitHub.svg";
import leetCodeSvg from "../../assets/icons/leetCode.svg";
import linkedInSvg from "../../assets/icons/linkedIn.svg";
import emailSvg from "../../assets/icons/email.svg";

const Hero = () => {
  const heroData = [
    {
      imageURL: img,
      name: "Moaaz Ahmed",
      description: ` Cloud Engineer in Training (AWS re/START) | Software Developer -
            React, Node, JavaScript, C++ | M.Tech IT – NSUT Delhi | Ex-Publicis
            Sapient`,
      email: "moaaz.ds@gmail.com",
      leetCode: "https://leetcode.com/u/moaaz-ahmed/",
      gitHub: "https://github.com/moaaz-cse",
      linkedIn: "https://www.linkedin.com/in/moaaz-ahmed-70607621b/",
    },
  ];
  return (
    <div className="bg-fgm-white flex items-center justify-center min-h-screen p-4">
      <div className="rounded-xl shadow-lg overflow-hidden p-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
        <div>
          <div className="relative bg-fgm-orange rounded-2xl">
            <img
              src={heroData[0].imageURL}
              alt="Profile"
              className="w-full h-48 object-contain"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">{heroData[0].name}</h2>
            <p className="text-gray-600 mb-4">{heroData[0].description}</p>
            <div className="flex justify-center space-x-4 text-orange-500">
              <a
                href={heroData[0].leetCode}
                aria-label="leetCode profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leetCodeSvg}
                  alt="LeetCode"
                  className="w-6 h-6 hover:opacity-75 transition-opacity"
                />
              </a>
              <a
                href={heroData[0].gitHub}
                aria-label="gitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={gitHubSvg}
                  alt="LeetCode"
                  className="w-6 h-6 hover:opacity-75 transition-opacity"
                />
              </a>
              <a
                href={heroData[0].linkedIn}
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedInSvg}
                  alt="LeetCode"
                  className="w-6 h-6 hover:opacity-75 transition-opacity"
                />
              </a>
              <a href={`mailto:${heroData[0].email}`} aria-label="Email">
                <img
                  src={emailSvg}
                  alt="LeetCode"
                  className="w-6 h-6 hover:opacity-75 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
