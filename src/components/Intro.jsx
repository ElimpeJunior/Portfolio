import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img
        src="/assets/me.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4"
      />
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Junior Elimpe
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm an independent software engineer and web developer, dedicated to
        crafting my vision of the digital world one step at a time. Each project
        I undertake is built from the ground up, encompassing everything from
        initial planning and design to leveraging code to solve real-life
        challenges.
      </p>
    </div>
  );
}

export default Intro;
