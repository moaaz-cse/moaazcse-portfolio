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
      className={`fixed top-0 left-0 w-full bg-fgm-black text-white flex justify-center items-center py-3 px-6 md:px-12 shadow-md transition-transform duration-300 z-50
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      // style={{ border: "2px solid red" }}
    >
      <div
        style={{
          // border: "2px solid blue",
          padding: "10px",
          background: "rgba(255, 255, 255, 0.08)", // Correct way to use rgba for background
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // For Safari support
        }}
        className="w-[292px] flex justify-between"
      >
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
        >
          <FaUser className="text-xl" />
        </Link>
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
        >
          <FaHome className="text-xl" />
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
        >
          <FaFolderOpen className="text-xl" />
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
        >
          <FaTools className="text-xl" />
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
        >
          <FaBriefcase className="text-xl" />
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="flex flex-col items-center md:flex-row md:space-x-2 cursor-pointer"
        >
          <FaEnvelope className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
