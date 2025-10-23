import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import img from "../../assets/images/moaaz_img.JPG";
import gitHubSvg from "../../assets/icons/gitHub.svg";
import leetCodeSvg from "../../assets/icons/leetCode.svg";
import linkedInSvg from "../../assets/icons/linkedIn.svg";
import emailSvg from "../../assets/icons/email.svg";
import downloadSvg from "../../assets/icons/download.png";
import resumePDF from "../../assets/resume/mohd_niya_mul_haque.pdf";
import { removeBackgroundAPI } from "../../api/removeBg";

const Hero = () => {

  const [processedImage, setProcessedImage] = useState(null);

  // Access the first Hero object from JSON
  const heroData = data.Hero?.[0];

 useEffect(() => {
    const processImage = async () => {
      try {
        const imageURL = await removeBackgroundAPI(
          heroData.imageURL || 
          "https://avatars.githubusercontent.com/u/43151778?s=400&u=58f4d236971551d8f9a9d137e5ba3b13c1c0200b&v=4"
        );
        setProcessedImage(imageURL);
      } catch (error) {
        console.error("Error removing background:", error);
      }
    };

    processImage();
  }, []);

  return (
    <div
      id="hero"
      className="bg-white xxs:h-[457px] xxs:mt-20 md:xxs:mt-6 md:w-[344px] md:h-[640px] rounded-2xl shadow-lg flex flex-col items-center justify-between p-6 borderxxs:mx-6"
    >
      {/* Profile image box */}
      <div className="bg-gradient-to-b from-[#9E2102] to-[#D24306] rounded-xl overflow-hidden mt-2  ">
        <img
          src={processedImage}
          alt={heroData.name}
          className="md:w-[240px] md:h-[280px] xxs:w-[260px] xxs:h-[210px] object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="md:text-[36px] xxs:text-[36px] xxs:leading-[-0.04em] xxs:line-clamp-[110%] font-bold text-black mt-2">{heroData.name}</h2>

      {/* Decoration (flame icon) */}
      {/* <div className="flex flex-col items-center space-y-2">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white text-xl">🔥</span>
        </div>
      </div> */}

      {/* Description */}
      <p className="text-gray-600 text-center text-[14px] px-2 mt-2">
        {heroData.description}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a href={heroData.leetCode} target="_blank" rel="noopener noreferrer">
          <img src={leetCodeSvg} alt="LeetCode" className="w-6 h-6" />
        </a>
        <a
          href={heroData.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          title="View my GitHub profile (login may be required)"
        >
          <img src={gitHubSvg} alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohd-niya-mul-haque-cse/?trk=public_profile_browsemap"
          target="_blank"
          rel="noopener noreferrer"
          title="View my LinkedIn profile (login may be required)"
        >
          <img
            src={linkedInSvg}
            alt="LinkedIn"
            className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
          />
        </a>

        <a
          href={`mailto:${heroData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Send me an email"
        >
          <img
            src={emailSvg}
            alt="Email"
            className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
          />
        </a>

    {/* ✅ Download Resume Button */}
     {/* Resume Icon */}
        <a
          href={resumePDF}
          download="Mohd_Niyamul_Resume.pdf"
          title="Download Resume"
        >
          <img
            src={downloadSvg}
            alt="Resume"
            className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
          />
        </a>

      </div>
    </div>
  );
};

export default Hero;
