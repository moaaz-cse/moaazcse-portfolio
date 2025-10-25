import React from "react";
import useTeamData from "../../hooks/useTeamData"; // Adjust path as needed
import img from "../../assets/images/moaaz_img.JPG";

const Team = () => {
  // For production: use actual API endpoint
  // const { team, loading, error, refetch } = useTeamData('https://api.example.com/team');

  // For development: use fallback data
  const fallbackTeam = [
    {
      image: img,
      name: "Michael Scout",
      role: "Co-founder, Chief Architect",
      portfolio: "https://michaelscout.com",
    },
    {
      image: "https://picsum.photos/id/1025/600/300",
      name: "Pam Beesly",
      role: "Creative Director",
      portfolio: "https://pambeesly.com",
    },
    {
      image: "https://picsum.photos/id/1035/600/300",
      name: "Jim Halpert",
      role: "Product Manager",
      portfolio: "https://jimhalpert.com",
    },
    {
      image: "https://picsum.photos/id/1041/600/300",
      name: "Dwight Schrute",
      role: "Operations Head",
      portfolio: "https://dwightschrute.com",
    },
    {
      image: "https://picsum.photos/id/1050/600/300",
      name: "Kelly Kapoor",
      role: "Marketing Lead",
      portfolio: "https://kellykapoor.com",
    },
  ];

  // Uncomment this to use API data
  // const { team, loading, error } = useTeamData('https://api.example.com/team');

  // For now, using fallback data
  const team = fallbackTeam;
  const loading = false;
  const error = null;

  if (loading) {
    return (
      <div className="bg-fgm-black text-white px-4 sm:px-6 lg:px-16 py-12 sm:py-16 flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading team members...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-fgm-black text-white px-4 sm:px-6 lg:px-16 py-12 sm:py-16 flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-fgm-black text-white px-4 sm:px-6  py-12 sm:py-16">
      {/* Heading */}
      <h1 className="text-[100px] font-bold text-white -mt-8 transform scale-x-95 origin-left uppercase">
        Work
      </h1>
      <h1 className="text-[100px] font-bold text-[#B6B4BD] -mt-12 uppercase">
        Expertise
      </h1>
      <p className="text-gray-300 mb-6 sm:mb-8 w-full sm:w-3/4 lg:w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Scrollable container */}
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6 lg:space-x-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -ms-overflow-style-none scrollbar-none">
          {team.map((member, i) => (
            <a
              key={i}
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-40 sm:w-56 lg:w-60 snap-start"
            >
              <div className="w-40 sm:w-56 lg:w-60 h-56 sm:h-72 lg:h-72 bg-gradient-to-b from-orange-500 to-red-600 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-left mt-2">
                <h2 className="text-base sm:text-lg lg:text-lg font-semibold">
                  {member.name}
                </h2>
                <p className="text-[#4b4b4b] text-xs sm:text-sm lg:text-sm">
                  {member.role}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            document
              .querySelector(".snap-x")
              .scrollBy({ left: -300, behavior: "smooth" })
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full hover:bg-black/60 hidden sm:flex"
        >
          ‹
        </button>
        <button
          onClick={() =>
            document
              .querySelector(".snap-x")
              .scrollBy({ left: 300, behavior: "smooth" })
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full hover:bg-black/60 hidden sm:flex"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Team;
