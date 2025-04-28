import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaCrown } from "react-icons/fa6";
import { PiNumberFour, PiNumberCircleThree, PiNumberCircleTwo, PiNumberFive, PiNumberSix } from "react-icons/pi";

import "../styles/hobbies.css";
import "../styles/global.css";

export default function HobbiesPage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"hobbies"} readOnly></input>
      <div style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Luca's Free Time Activities & Main Passions</h1>
        </div>

        <div id="sectionContainer" className="items-center text-center h-[100vh]">
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <FaCrown className="w-14 h-auto text-yellow-400" />
            <h2 className="bg-gradient-to-r from-indigo-600 to-cyan-400 inline-block text-transparent bg-clip-text text-3xl">Learning</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              sep2023-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <PiNumberCircleTwo className="w-14 h-auto text-gray-400" />
            <h2>Tech</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              jul2006-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <PiNumberCircleThree className="w-14 h-auto text-amber-700" />

            <h2>Motorcycles</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              july2024-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <PiNumberFour className="w-14 h-auto text-black dark:text-white" />

            <h2>Gym / Weight Lifting</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              dec2022-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center mb-10">
            <PiNumberFive className="w-14 h-auto text-black dark:text-white" />

            <h2>Hiking</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              jul2018-now
            </p>
          </div>
          <div id="sectionDiv" className="flex flex-col items-center">
            <PiNumberSix className="w-14 h-auto text-black dark:text-white" />
            <h2>Card Magic Tricks</h2>
            <p className="text-sm max-w-[500px] text-cyan-600 dark:text-cyan-400 text-center">
              feb2024-march2024
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}