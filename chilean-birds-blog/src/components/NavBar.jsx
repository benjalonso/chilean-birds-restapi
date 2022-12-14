import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { MdWbSunny } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

export const NavBar = () => {

  const handleDarkMode = () => {
    let html = document.getElementById("htmltag");
    if (!html.classList.contains("dark")) {
      html.classList.add("dark");
    }else if(html.classList.contains("dark")){
      html.classList.remove("dark");
    }
  };
  return (
    <>
      <div className="sticky top-0 z-10">
        <nav className="bg-green-800 dark:bg-slate-800 grid grid-flow-col justify-between">
          <h1 className="text-green-50 py-2 ml-10 text-3xl ">Chilean Birds</h1>
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {
                handleDarkMode();
              }}
            />
            <span className="slider "></span>
          </label>
        </nav>
        <div className="py-2 items-center md:max-2xl:flex md:max-2xl:flex-col md:max-2xl:w-[10vh] md:max-2xl:h-[80vh] md:max-2xl:absolute md:max-2xl:top-20 md:max-2xl:justify-between md:max-2xl: md:max-2xl:left-[35px] md:max-2xl:rounded   bg-green-600 dark:bg-slate-700 grid grid-cols-6  ">
          <div className="col-span-5 grid grid-cols-5 md:max-2xl:grid-cols-2 md:max-2xl:gap-2  md:max-2xl:mt-2 md:max-2xl:place-items-center">
            <GiHummingbird
              id="sol"
              className="col-span-1 place-content-center ml-10 text-teal-900 dark:text-indigo-500 text-3xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  dark:hover:text-slate-300 hover:text-green-200 duration-30"
            />
            <div className="col-span-4 place-content-center gap-4 grid grid-flow-col md:max-2xl:flex md:max-2xl:flex-col md:max-2xl:mx-auto md:max-2xl:justify-around md:max-2xl:gap-3 ">
              <MdWbSunny className=" text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30" />
              <BsFillCloudSunFill className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30" />
              <BsFillCloudRainHeavyFill className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30" />
              <BsFillBookmarkFill className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30" />
            </div>
          </div>
          <FaUserAlt className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl mx-auto  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
        </div>
      </div>
      <div className="group my-2 grid grid-cols-8 md:max-2xl:my-4 md:max-2xl:ml-8 relative">
        <SlMagnifier className="col-start-1 col-end-2 ml-auto mt-1 mx-1 text-teal-900  dark:text-slate-50 transition ease-in-out delay-150   focus:scale-110  duration-300 absolute md:max-2xl:left-[123px] left-[75px] z-10 group-hover:-translate-x-3" />
        <input
          type="text"
          placeholder="Search for Chilean birds"
          className="col-start-2 col-end-5 mr-10 dark:bg-slate-900 dark:border-0 dark:text-slate-50 bg-green-50 rounded-md border transition ease-in-out delay-150   group-hover:scale-110  duration-300 pl-10 "
        />
      </div>
    </>
  );
};

export default NavBar;
