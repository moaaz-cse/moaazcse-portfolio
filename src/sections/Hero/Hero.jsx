import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import img from "../../assets/images/moaaz_img.JPG";
import gitHubSvg from "../../assets/icons/gitHub.svg";
import leetCodeSvg from "../../assets/icons/leetCode.svg";
import linkedInSvg from "../../assets/icons/linkedIn.svg";
import emailSvg from "../../assets/icons/email.svg";
import downloadSvg from "../../assets/icons/download.png";
import resumePDF from "../../assets/resume/moaaz_ahmed_resume.pdf";
import { removeBackgroundAPI } from "../../api/removeBg";
import copyEmailSvg from "../../assets/icons/copy.svg"; // 👈 your uploaded icon

const Hero = () => {
  const [processedImage, setProcessedImage] = useState(null);
  const [copied, setCopied] = useState(false); // ✅ state for copy status

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

  const defaultLinkedIn =
    "https://www.linkedin.com/in/mohd-niya-mul-haque-cse/?trk=public_profile_browsemap";

  const linkUrl = heroData?.linkedIn || defaultLinkedIn;
  // ✅ Copy to clipboard function
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(heroData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="hero"
      className="bg-white xxs:h-[457px] xxs:mt-20 md:xxs:mt-6 md:w-[344px] md:h-[640px] rounded-2xl shadow-lg flex flex-col items-center justify-between p-6 border xxs:mx-6"
    >
      {/* Profile image box */}
      <div className="bg-gradient-to-b from-[#9E2102] to-[#D24306] rounded-xl overflow-hidden mt-2">
        <img
          src={processedImage || img}
          alt={heroData.name}
          className="md:w-[240px] md:h-[280px] sm:w-[200px] sm:h-[200px]  xxxs:w-[200px] xxxs:h-[200px] xxs:w-[200px] xxs:h-[200px] xs:w-[200px] xs:h-[200px] "
        />
      </div>

      {/* Name */}
      <h2 className="md:text-[36px] xxs:text-[36px] font-bold text-black mt-2">
        {heroData.name}
      </h2>

      {/* ✅ Copy Email Button */}
      <button
        onClick={handleCopyEmail}
        className="flex items-center gap-2 mt-1 bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full transition-all duration-200"
      >
        {/* <img src={copyEmailSvg} alt="Copy email" className="w-4 h-4" /> */}
        {copied ? "Copied!" : "Copy Email"}
      </button>

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
          href={linkUrl}
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

        {/* <a
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
        </a> */}

        {/* ✅ Download Resume Button */}
        <a
          href={resumePDF}
          download="Moaaz_Ahmed_Resume.pdf"
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
