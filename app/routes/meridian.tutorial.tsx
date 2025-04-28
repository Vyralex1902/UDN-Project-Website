import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import "../styles/meridian_tutorial.css";
import "../styles/global.css";


export default function Programming() {

  useEffect(() => {
    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");

    const headingIconElement2 = document.getElementById("headingIcon2");
    headingIconElement2!.classList.remove("heading-icon");
    headingIconElement2!.classList.add("heading-icon-selected");

    headingIconElement3!.classList.remove("heading-icon-selected");
    headingIconElement3!.classList.add("heading-icon");
    headingIconElement1!.classList.remove("heading-icon-selected");
    headingIconElement1!.classList.add("heading-icon");
    headingIconElement4!.classList.remove("heading-icon-selected");
    headingIconElement4!.classList.add("heading-icon");

    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"meridian-tut"} readOnly></input>
      <div style={{ width: "100%", height: "100%" }} className="flex flex-col items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-5 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Project Meridian (MKI)</h1>
        </div>
        <div id="sectionContainer" className="flex flex-col items-center h-[100vh]">
          <div id="sectionDiv">
            <h2 className="text-center text-3xl">Getting started</h2>
            <p>
              <span className="text-purple-400">&gt; </span>
              <a href=".intro" className="cursor-pointer">
                <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                  Introduction
                </p>
              </a>
              <br />
              <span className="text-purple-400">&gt; </span>
              <a href=".installation" className="cursor-pointer">
                <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                  Installation
                </p>
              </a>
              <br />
              <span className="text-purple-400">&gt; </span>
              <a href=".commands" className="cursor-pointer">
                <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                  Commands
                </p>
              </a>
              <br />
              <span className="text-purple-400">&gt; </span>
              <a href=".troubleshoot" className="cursor-pointer">
                <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                  Troubleshoot
                </p>
              </a>
              <br />
            </p>
          </div>
          <div id="sectionDiv" className="intro">
            <h2 className="text-center">Introduction</h2>
            <p className="max-w-[50vw]">
              This is <span id="futuraf">Meridian MKI</span>'s tutorial page. You will find pretty much every info you need to get started
              with the <span id="futuraf">Meridian MKI</span> app.
            </p>
          </div>
          <div id="sectionDiv" className="installation">
            <h2 className="text-center">Installation</h2>
            <p className="max-w-[50vw]">
              <span className="text-purple-400">1] &gt; </span>
              <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                Download <span id="futuraf">Meridian MKI</span>
                <span className="text-sm">You can do so <Link to="notfound" className="cursor-pointer"><p>here</p></Link></span> {/*TODO: Add download link*/}
              </p>
              <br />
              <span className="text-purple-400">2] &gt; </span>
              <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                Install python
                <span className="text-sm">Install the latest version from <a href="https://www.python.org/downloads/">here</a></span>
              </p>
              <br />
              <span className="text-purple-400">3] &gt; </span>
              <p className="text-cyan-700 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">
                Install <span id="futuraf">Meridian</span>'s requirements and extract files
                <span className="text-sm">Run the setup app located inside of the Meridian's folder</span>
              </p>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}