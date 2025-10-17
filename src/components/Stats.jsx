import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col items-center font-mono tracking-tight justify-center h-full mt-10">
      <h2 className="text-xl md:text-3xl font-light font-mono mb-4 tracking-tight text-gray-900 self-center">
        :~$ ls My_Stats
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=bvvivek6&hide_border=false&background=ffffff&theme=default_duo"
          alt="GitHub Streak"
          className=" w-[80%] md:w-[90%] max-w-[90%] mx-auto"
        />

        <img
          src="https://leetcard.jacoblin.cool/vivek2406"
          alt="LeetCode Stats"
          className="rounded-lg w-[80%] md:w-[90%] max-w-[90%] mx-auto"
        />
      </div>
    </div>
  );
};

export default Stats;
