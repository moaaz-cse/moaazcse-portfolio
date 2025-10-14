import React, { useState } from "react";

const Project = () => {
  const projects = [
    {
      title: "DevTinder (Personal Project)",
      description:
        "Architected and implemented a React.js web application for developer matchmaking based on skills and interests. Designed a RESTful API with Node.js and Express.js, integrated MongoDB for storing user profiles. Implemented authentication and authorization using JWT, built a messaging feature for real-time user interaction.",
      image: "https://www.nestlegoodnes.com/fr/sites/default/files/styles/medium/public/logos/logo-garden-gourmet.png?itok=cOhd16Zb",
      projectURL: "https://github.com/moaaz-cse/devTinder",
    },
    {
      title: "Nestle GardenGourmet-FRLaunch-2022:",
      description:
        "Independently implemented themes in the French market. Ensured responsive layout and optimized asset loading, achieving a 20% improvement in page load times. Using Twig, SCSS, JavaScript, and jQuery.",
      image:
        "https://www.nestlegoodnes.com/fr/sites/default/files/styles/medium/public/logos/logo-garden-gourmet.png?itok=cOhd16Zb",
      projectURL: "https://www.gardengourmet.fr/",
    },
    {
      title: "Maggi Arabia accessibility enhancement",
      description:
        "Enhanced website accessibility to meet AAA standards, including semantic markup, ARIA roles, and keyboard navigation. Coordinated with UX designers and QA engineers to validate improvements and document testing procedures.",
      image:
        "https://www.maggiarabia.com/sites/default/files/maggi_logo1_0.png",
      projectURL: "https://www.maggiarabia.com/en/",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      id="projects"
      className="max-w-6xl mx-auto p-6 my-6"
      style={{ border: "2px solid red" }}
    >
      <h1
        className="flex flex-col items-start font-bold mb-8"
        style={{ border: "2px solid red" }}
      >
        <span className="text-fgm-white text-5xl lg:text-6xl">RECENT</span>
        <span className="text-fgm-gray text-5xl lg:text-6xl">PROJECTS</span>
      </h1>
      <div className="space-y-4">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="flex items-start bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-20 h-12 object-cover rounded-md mr-4 md:w-[20%] md:h-18 lg:w-[17%]"
              />
              <div className="flex-1">
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.title}
                </a>
                <div
                  className={`text-gray-400 text-sm mt-1 overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-96" : "max-h-12"
                  }`}
                >
                  {project.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
