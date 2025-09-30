import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-fgm-black px-6 mt-4 text-center">
        <h1 className="text-5xl font-bold text-white">Software</h1>
        <h1 className="text-4xl font-bold text-fgm-gray">Engineer</h1>
        <p className="text-fgm-darkGray w-9/12 mx-auto py-3">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="text-fgm-gray flex justify-around py-6 px-3">
        <div>
          <h1 className="text-5xl font-bold text-fgm-white">+12</h1>
          <h2>YEARS OF EXPERIENCE</h2>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-fgm-white">+46</h1>
          <h2>PROJECTS COMPLETED</h2>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-fgm-white">+20</h1>
          <h2>WORLDWIDE CLIENTS</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
