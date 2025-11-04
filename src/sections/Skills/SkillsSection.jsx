import { motion } from "framer-motion";

// Import all icon packs you want to support
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb"; // optional, if you plan to use Tabler icons later
import data from "../../../data.json";

// Combine all icons dynamically into one object
const iconMap = {
  ...FaIcons,
  ...SiIcons,
  ...TbIcons,
};

const SkillsSection = () => {
  const skills = data.Skills || [];

  return (
    <section id="skills" className="bg-fgm-black text-white px-6 py-16">
      {/* Heading */}
      <div className="flex flex-col justify-start mb-10 md:text-start xxs:text-center md:my-3 xxs:my-6">
        <h1 className="md:text-[100px] xs:text-left xxs:text-[50px] xxxs:text-center xxxs:text-[50px] font-bold text-white -mt-8 transform scale-x-96 origin-left uppercase">
          Work
        </h1>
        <h1 className="md:text-[100px] xs:text-left  xxs:text-[50px] xxxs:-mt-3 xxxs:text-center xxxs:text-[50px] xxs:-mt-6 font-bold text-[#B6B4BD] md:-mt-12 uppercase">
          Expertise
        </h1>
      </div>

      {/* Skill Grid */}
      <div className="md:w-9/12 lg:w-11/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon]; // Automatically resolves
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1a1a1a] group-hover:bg-[#222] p-6 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center shadow-md w-full">
                {IconComponent ? (
                  <IconComponent className={`text-5xl ${skill.color}`} />
                ) : (
                  <div className="text-gray-500 text-sm">Icon Not Found</div>
                )}
                <p className="mt-3 text-[#B6B4BD] font-medium text-sm uppercase tracking-wide">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
