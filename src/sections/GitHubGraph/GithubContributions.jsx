import { useState, useEffect } from "react";
import gitData from "../../../data.json";

const GithubContributions = () => {
  const gitHubData = gitData.GitHub?.[0];
  const [username] = useState(gitHubData.userName);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const gitHubUrl = "https://github-contributions-api.jogruber.de/v4/";

  // Fetch GitHub data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${gitHubUrl}${username}?y=${year}`);
        if (!res.ok) throw new Error("Failed to fetch GitHub data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username, year]);

  // Group by weeks
  const groupByWeeks = (contributions = []) => {
    const weeks = [];
    let week = [];
    contributions.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    });
    if (week.length > 0) weeks.push(week);
    return weeks;
  };

  const contributions = data?.contributions || [];
  const weeks = groupByWeeks(contributions);
  const totalContributions = contributions.reduce((sum, d) => sum + d.count, 0);

  // Month labels
  const monthLabels = (() => {
    const labels = [];
    let prevMonth = null;
    weeks.forEach((week) => {
      const firstDay = new Date(week[0].date);
      const month = firstDay.toLocaleString("default", { month: "short" });
      labels.push(month !== prevMonth ? month : "");
      prevMonth = month;
    });
    return labels;
  })();

  const yearButtons = [2025, 2024, 2023, 2022];

  return (
    <section
      id="experience"
      className="bg-fgm-black text-white px-6 py-10 mt-10 xxxs:-mt-8"
    >
      <div className="text-center md:text-left  md:w-11/12 ">
        <h1 className="text-[40px] sm:text-[45px] xs:text-left md:text-[90px] font-bold xxxs:text-center xxxs:text-[38px] text-white uppercase leading-tight">
          GitHub
        </h1>
        <h1 className="text-[40px] xs:text-left sm:text-[45px] md:text-[90px] xxxs:text-center xxxs:text-[38px] font-bold text-[#B6B4BD] uppercase -mt-2 md:-mt-6">
          Contribution
        </h1>
      </div>

      <div className="min-h-[340px]  sm:min-h-[350px] max-w-5xl md:w-11/12 ml-0">
        {/* Graph and Year Buttons Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Left: Graph */}
          <div className="flex-1 w-full overflow-x-auto pb-4 custom-scrollbar">
            {loading ? (
              <p className="flex my-[95px] sm:my-[80px] justify-center text-center text-[48px] font-bold text-white transform scale-x-96 origin-left uppercase">
                Loading...
              </p>
            ) : error ? (
              <p className="text-red-400 text-center">{error}</p>
            ) : weeks.length > 0 ? (
              <div className="min-w-[600px] ml-2 py-3 sm:min-w-0">
                {/* Month labels */}
                <div className="flex justify-evenly mb-2 text-[24px] text-gray-400">
                  {monthLabels.map((m, i) => {
                    if (m.length > 0) {
                      return (
                        <div key={i} className="w-9 text-center px-12">
                          {m}
                        </div>
                      );
                    }
                  })}
                </div>
                {/* Weekday + grid */}
                <div className="flex">
                  {/* Weekdays */}
                  <div className="flex flex-col justify-between text-[18px] text-gray-400 mr-2 h-[90px]">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Grid */}
                  <div className="flex gap-[6px]">
                    {weeks.map((week, i) => (
                      <div key={i} className="flex flex-col gap-[3px]">
                        {week.map((day, j) => (
                          <div
                            key={j}
                            title={`${day.date}: ${day.count} contributions`}
                            className={`w-4 h-4 rounded-sm ${
                              day.count === 0
                                ? "bg-[#161b22]"
                                : day.count < 2
                                ? "bg-green-900"
                                : day.count < 5
                                ? "bg-green-700"
                                : day.count < 10
                                ? "bg-green-500"
                                : "bg-green-300"
                            }`}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Summary & legend */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-400 mt-3 px-1 gap-2">
                  <p className="text-lg text-left">
                    <span className="text-green-400 font-semibold text-lg">
                      {totalContributions}
                    </span>{" "}
                    contributions in {year}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span>Less</span>
                    <div className="flex gap-[2px]">
                      <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-center">
                No data available for {year}.
              </p>
            )}
          </div>
          {/* Right: Year Buttons */}
          <div className="flex md:flex-col flex-row flex-wrap justify-center md:justify-start gap-2 pt-5">
            {yearButtons.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-4 py-1 text-sm sm:text-base rounded-md border transition font-medium ${
                  year === y
                    ? "bg-green-800 border-green-500 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
