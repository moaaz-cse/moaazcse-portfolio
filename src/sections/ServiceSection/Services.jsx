import React from "react";

const Services = () => {
  return (
    <div className="lg:pt-9">
      <div className="bg-fgm-black px-6 mt-4 text-center">
        <h1 className="text-5xl font-bold text-white">Software</h1>
        <h1 className="text-4xl font-bold text-fgm-gray">Engineer</h1>
        <p className="text-fgm-darkGray md:w-9/12 lg:w-11/12 mx-auto py-3">
          Software Engineer with 2+ years of experience, currently training in
          AWS re/START with hands-on expertise in EC2, S3, IAM, networking, and
          Linux. Skilled in React.js, Node.js, RESTful APIs, and microservices
          with strong problem-solving skills. Seeking an entry-level role as a
          Cloud Support Associate/Cloud/Software Engineer.
        </p>
      </div>
      <div className="text-fgm-gray flex justify-around py-6 px-3 text-center">
        <div>
          <h1 className="text-5xl font-bold text-fgm-white">+2</h1>
          <h2>YEARS OF EXPERIENCE</h2>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-fgm-white">+10</h1>
          <h2>PROJECTS COMPLETED</h2>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-fgm-white">+4</h1>
          <h2>WORLDWIDE CLIENTS</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
