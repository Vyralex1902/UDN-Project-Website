import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/champions.css";
import "../styles/global.css";

import backimg from "../assets/best-s1000rr-169.jpg";

export default function ChampionsPage_S1000RR() {

  useEffect(() => {
    console.log("Page loaded.");

    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");

    const headingIconElement2 = document.getElementById("headingIcon2");
    headingIconElement3!.classList.remove("heading-icon");
    headingIconElement3!.classList.add("heading-icon-selected");

    headingIconElement2!.classList.remove("heading-icon-selected");
    headingIconElement2!.classList.add("heading-icon");
    headingIconElement1!.classList.remove("heading-icon-selected");
    headingIconElement1!.classList.add("heading-icon");
    headingIconElement4!.classList.remove("heading-icon-selected");
    headingIconElement4!.classList.add("heading-icon");

    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"champions"} readOnly></input>
      <div style={{ width: "100vw", height: "100%" }} className="flex flex-col items-center align-top darkmode-bg z-10
       text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mt-20">
          <h1 id="title" className="bg-gradient-to-r from-[#0079ea] to-[#f40000] inline-block text-transparent bg-clip-text animate-slideInFromTop">BMW S1000RR</h1>
          <h2>Champions - 1000cc</h2>
        </div>
        <div id="container">
          <motion.div className="relative top-0 w-[50vw] mt-5 rounded-[20px] overflow-hidden" whileHover={{ scale: 1.02 }}>
            <img src={backimg} className="relative w-full h-full object-cover"></img>
          </motion.div>
          <div className="darkmode-bg mt-10">
            <h1 className="text-center text-[40px]">Specs</h1>
          </div>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
}