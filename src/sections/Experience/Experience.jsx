import React from "react";

const Experience = () => {
  const experienceData = {
    exp: "2 YEARS OF",
    items: [
      {
        title: "Software Developer | Publicis Sapient",
        date: "Oct 2021 - Dec 2022",
        responsibilities: [
          "Managed troubleshooting and resolving post-deployment issues and debugging (L3 support) across multiple markets, reducing bug turnaround time by 30%.",
          "Developed and maintained full-stack features for Nestlé brand portals, handling frontend interfaces and backend integrations.",
          "Designed and consumed RESTful APIs in collaboration with backend teams, handled JSON data mapping, error handling, and security (JWT).",
          "Built responsive UI components using HTML, Twig, SCSS, JavaScript, and jQuery, ensuring cross-browser compatibility and WCAG AAA accessibility compliance.",
        ],
      },
      {
        title: "MERN | Embifi Pvt. Ltd.",
        date: "Feb 2021 - Sep 2021",
        responsibilities: [
          "Developed and deployed company’s website using MERN stack, optimized for mobile, tablet, and desktop.",
          "Worked with backend team to ensure API efficiency and integrated server side data into frontend views, improving user engagement.",
        ],
      },
    ],
  };

  return (
    <div id="experience" className="text-white px-2 mx-6">
      <div className="text-center text-4xl font-bold p-4">
        <h2>{experienceData.exp}</h2>
        <h2 className="text-fgm-gray">EXPERIENCE</h2>
      </div>
      <div className="space-y-6">
        {experienceData.items.map((exp, idx) => (
          <div key={idx}>
            <h2 className="font-bold text-lg">{exp.title}</h2>
            <ul className="list-disc list-inside text-sm text-fgm-gray">
              {exp.responsibilities.map((res, i) => (
                <li key={i} className="py-2">
                  {res}
                </li>
              ))}
            </ul>
            <p className="font-thin">{exp.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
