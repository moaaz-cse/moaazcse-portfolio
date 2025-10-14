import React, { useEffect, useState } from "react";
import data from "../../../data.json";

const Services = () => {
const [detail, setDetails] = useState([]);

useEffect(() => {
  // Simulate fetching data from a local JSON file
  const userdata = data;
  setDetails(userdata);
}, []);

console.log(detail);


  return (
    <div className="">
      <div className="bg-fgm-black px-6 text-start my-3">
        <div className="flex flex-col justify-start">
          <h1 className="lg:text-[100px] sm:text-[70px] max-sm:text-[50px] font-bold text-white  transform scale-x-105 origin-left uppercase" style={{border : "2px solid red"}}>
            Software
          </h1>
          <h1 className="text-[100px] font-bold text-[#B6B4BD] -mt-12 transform scale-x-120 origin-left uppercase">
            {detail[0]?.owner}
          </h1>
        </div>

        <p
          className="md:w-9/12 lg:w-11/12 py-3 text-[#998f8f]"
          style={{ border: "2px solid red" }}
        >
          Software Engineer with 2+ years of experience, currently training in
          AWS re/START with hands-on expertise in EC2, S3, IAM, networking, and
          Linux. Skilled in React.js, Node.js, RESTful APIs, and microservices
          with strong problem-solving skills. Seeking an entry-level role as a
          Cloud Support Associate/Cloud/Software Engineer.
        </p>
      </div>

      <div
        className="lg:w-11/12 h-[155.5px] px-6"
        style={{ border: "2px solid blue" }}
      >
        <div className="flex w-full h-[155.5px] justify-between border border-red-500">
          <div
            style={{ border: "2px solid yellow" }}
            className="w-[200px] flex flex-col justify-between"
          >
            <h1 className="text-[68px] font-bold text-fgm-white transform scale-x-190 origin-left tracking-[-3px]">
              +12
            </h1>
            <h2 className="text-[#998F8F]">
              YEARS OF <br />
              EXPERIENCE
            </h2>
          </div>
          <div
            style={{ border: "2px solid green" }}
            className="w-[200px] mx-10"
          >
            <h1 className="text-[68px] font-bold text-fgm-white transform scale-x-190 origin-left tracking-[-3px]">
              +40
            </h1>
            <h2 className="text-[#998F8F]">
              PROJECTS <br />
              COMPLETED
            </h2>
          </div>
          <div style={{ border: "2px solid purple" }} className="w-[200px]">
            <h1 className="text-[68px] line-clamp-[120] font-bold text-fgm-white transform scale-x-190 origin-left tracking-[-3px]">
              +4
            </h1>
            <h2 className="text-[#998F8F]">
              WORLDWIDE <br />
              CLIENTS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
