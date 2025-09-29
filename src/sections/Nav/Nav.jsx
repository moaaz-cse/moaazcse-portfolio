import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function MobileNavbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-fgm-black text-white flex justify-around items-center py-3 px-6 md:px-12 shadow-md transition-transform duration-300 z-50
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Link
        to="hero"
        smooth={true}
        duration={800} // 800ms scroll duration
        className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
      >
        <FaUser className="text-xl" />
        <span className="text-xs md:text-sm">Hero</span>
      </Link>

      <Link
        to="home"
        smooth={true}
        duration={800}
        className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
      >
        <FaHome className="text-xl" />
        <span className="text-xs md:text-sm">Home</span>
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={800}
        className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
      >
        <FaFolderOpen className="text-xl" />
        <span className="text-xs md:text-sm">Projects</span>
      </Link>

      <Link
        to="skills"
        smooth={true}
        duration={800}
        className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
      >
        <FaTools className="text-xl" />
        <span className="text-xs md:text-sm">Skills</span>
      </Link>

      <Link
        to="experience"
        smooth={true}
        duration={800}
        className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
      >
        <FaBriefcase className="text-xl" />
        <span className="text-xs md:text-sm">Experience</span>
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={800}
        className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
      >
        <FaEnvelope className="text-xl" />
        <span className="text-xs md:text-sm">Contact</span>
      </Link>
    </div>
  );
}
