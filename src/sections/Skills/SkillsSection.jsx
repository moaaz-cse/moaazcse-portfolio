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
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
  },
  { name: "Python", icon: <SiPython className="text-blue-400 text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-5xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="text-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Work Expertise</h2>
        <p className="text-gray-400 mt-2">Some of the areas I am skilled at</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-8 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
