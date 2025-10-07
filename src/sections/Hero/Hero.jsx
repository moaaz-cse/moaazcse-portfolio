import React from "react";
import img from "../../assets/images/moaaz_img.JPG";
import gitHubSvg from "../../assets/icons/gitHub.svg";
import leetCodeSvg from "../../assets/icons/leetCode.svg";
import linkedInSvg from "../../assets/icons/linkedIn.svg";
import emailSvg from "../../assets/icons/email.svg";

const Hero = () => {
  const heroData =  {
      imageURL: img,
      name: "Moaaz Ahmed",
      description: ` Cloud Engineer in Training (AWS re/START) | Software Developer -
            React, Node, JavaScript, C++ | M.Tech IT – NSUT Delhi | Ex-Publicis
            Sapient`,
      email: "moaaz.ds@gmail.com",
      leetCode: "https://leetcode.com/u/moaaz-ahmed/",
      gitHub: "https://github.com/moaaz-cse",
      linkedIn: "https://www.linkedin.com/in/moaaz-ahmed-70607621b/",
    };



  return (
    <div
      id="hero"
      className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between p-6"
      style={{ width: "344px", height: "640px", }}
    >
      {/* Profile image box */}
      <div className="bg-gradient-to-b from-orange-500 to-red-600 rounded-xl overflow-hidden mt-2">
        <img
          src={heroData.imageURL}
          alt="Profile"
          className="w-[240px] h-[280px]"
        />
      </div>

      {/* Name */}
      <h2 className="text-[28px] font-bold text-black mt-4">
        {heroData.name}
      </h2>

      {/* Decoration (flame + dotted curve) */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white text-xl">🔥</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center text-[14px] px-2 mt-2">
        {heroData.description}
      </p>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a href={heroData.leetCode} target="_blank" rel="noopener noreferrer">
          <img src={leetCodeSvg} alt="LeetCode" className="w-6 h-6" />
        </a>
        <a href={heroData.gitHub} target="_blank" rel="noopener noreferrer">
          <img src={gitHubSvg} alt="GitHub" className="w-6 h-6" />
        </a>
        <a href={heroData.linkedIn} target="_blank" rel="noopener noreferrer">
          <img src={linkedInSvg} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href={`mailto:${heroData.email}`}>
          <img src={emailSvg} alt="Email" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
