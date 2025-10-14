import React from "react";
import data from "../../../data.json";
import img from "../../assets/images/moaaz_img.JPG";
import gitHubSvg from "../../assets/icons/gitHub.svg";
import leetCodeSvg from "../../assets/icons/leetCode.svg";
import linkedInSvg from "../../assets/icons/linkedIn.svg";
import emailSvg from "../../assets/icons/email.svg";

const Hero = () => {
  // Access the first Hero object from JSON
  const heroData = data.Hero?.[0];

  // Replace "img" string in JSON with imported image variable
  const imageMap = {
    img: img,
  };

  return (
    <div
      id="hero"
      className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between p-6"
      style={{ width: "344px", height: "640px" }}
    >
      {/* Profile image box */}
      <div className="bg-gradient-to-b from-orange-500 to-red-600 rounded-xl overflow-hidden mt-2">
        <img
          src={imageMap[heroData.imageURL] || heroData.imageURL}
          alt={heroData.name}
          className="w-[240px] h-[280px]"
        />
      </div>

      {/* Name */}
      <h2 className="text-[28px] font-bold text-black mt-4">{heroData.name}</h2>

      {/* Decoration (flame icon) */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white text-xl">🔥</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center text-[14px] px-2 mt-2">
        {heroData.description}
      </p>

      {/* Social Icons */}
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
