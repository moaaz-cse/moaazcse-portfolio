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
    <div id="hero" className="bg-fgm-black p-6 mt-15 md:mt-10">
      <div className="bg-fgm-white rounded-xl shadow-lg overflow-hidden p-2">
        <div>
          <div className="flex justify-center rounded-2xl py-2">
            <img
              src={heroData[0].imageURL}
              alt="Profile"
              className="w-[80%] md:w-[60%] lg:w-[70%] rounded-2xl "
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-3xl pb-3 font-bold">{heroData[0].name}</h2>
            <p className="text-gray-600 mb-4">{heroData[0].description}</p>
            <div className="flex justify-center gap-6">
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
