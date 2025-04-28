import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import "../styles/global.css";

export default function PCSpecsPage() {

  useEffect(() => {
    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement2 = document.getElementById("headingIcon2");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");

    headingIconElement3!.classList.remove("heading-icon-selected");
    headingIconElement3!.classList.add("heading-icon");
    headingIconElement2!.classList.remove("heading-icon-selected");
    headingIconElement2!.classList.add("heading-icon");
    headingIconElement1!.classList.remove("heading-icon-selected");
    headingIconElement1!.classList.add("heading-icon");
    headingIconElement4!.classList.remove("heading-icon-selected");
    headingIconElement4!.classList.add("heading-icon");

    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top bg-white dark:bg-[#1E1E1E]">
      <input type="text" className="absolute hidden" id="pageName" value={"pcspecs"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top darkmode-bg text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20">
          <h1 id="title" className="text-black dark:text-white animate-slideInFromTop">My Desktop PC's Specs</h1>
        </div>
        <div className="z-10 flex flex-col align-top items-center max-w-[70vw] mt-10 mb-10 backdrop-blur-md bg-black bg-opacity-5 rounded-lg p-4" id="text-container">
          <p className="text-black dark:text-white text-3xl">
            <span className="text-purple-600 dark:text-purple-400">WIN. VERSION ~</span> Windows 11 Pro
            <br /><span className="text-purple-600 dark:text-purple-400">CPU ~</span> Intel i7-11700 2.5GHz
            <br /><span className="text-purple-600 dark:text-purple-400">eGPU ~</span> NVIDIA RTX 3060
            <br /><span className="text-purple-600 dark:text-purple-400">RAM ~</span> 16GB
            <br /><span className="text-purple-600 dark:text-purple-400">STORAGE ~</span> 1TB SAMSUNG SSD
            <br /><span className="text-purple-600 dark:text-purple-400">Main monitor ~</span> Samsung Odyssey G5 (2K 144Hz)
            <br /><span className="text-purple-600 dark:text-purple-400">Secondary monitor ~</span> Samsung [I don't remember] (FHD 60Hz)
          </p>
        </div>
      </div>
    </div>
  );
}