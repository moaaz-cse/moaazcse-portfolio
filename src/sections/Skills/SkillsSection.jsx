import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPython,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: "Python", icon: <SiPython className="text-blue-400 text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-fgm-black text-white px-6 py-16">
      {/* Heading (styled similar to Services & Experience) */}
      <div className="flex flex-col justify-start mb-10">
        <h1 className="text-[100px] font-bold text-white -mt-8 transform scale-x-95 origin-left uppercase">
          Work
        </h1>
        <h1 className="text-[100px] font-bold text-[#B6B4BD] -mt-12 uppercase">
          Expertise
        </h1>
      </div>

      {/* Skill Grid */}
      <div className="md:w-9/12 lg:w-11/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a1a1a] group-hover:bg-[#222] p-6 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center shadow-md w-full">
              {skill.icon}
              <p className="mt-3 text-[#B6B4BD] font-medium text-sm uppercase tracking-wide">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
