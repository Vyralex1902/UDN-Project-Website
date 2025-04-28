import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import hero from "../assets/myAdskoHeroDesign.svg"
import desc from "../assets/myAdskoDesciptionDesign.svg"
import whyus from "../assets/myAdskoWhyUsDesign.svg"
import hero_overlay from "../assets/Prj1_Hero_Overlay.png"

import "../styles/myproject_adskohero.css";
import "../styles/global.css";

export default function AdskoProjectPage() {

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
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col align-top bg-[rgba(14,16,17,1)] mb-10">
      <input type="text" className="absolute hidden" id="pageName" value={"myproject_1"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="bg-[rgba(14,16,17,1)] fixed z-0"></div>
      <div style={{ width: "100%", height: "100%" }} className="flex flex-col items-center align-top bg-[rgba(14,16,17,1)] text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20 mb-10">
          <h1 id="title" className="text-white animate-slideInFromTop">Luca's Projects - #1</h1>
          <h3 id="subtitle" className="text-sky-600">ADSKO Landing Page</h3>
          <p>Hero section, Description, Differenciating points</p>
        </div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] mb-10">
          <h3 className="text-[#00FFC2] font-[Montserrat] text-3xl">Hero Section</h3>
          <p id="imgoverlaystate">Click on the image | Overlay OFF</p>
          <div className="flex justify-center">
            <img id="heroimg" src={hero} className="rounded-[16px] w-[70vw] h-auto"
              onClick={() => {
                document.getElementById("hero_overlay_img")?.classList.remove("hidden");
                document.getElementById("imgoverlaystate")!.innerText = "Click on the image | Overlay ON";
              }}></img>
            <img id="hero_overlay_img" src={hero_overlay} className="rounded-[16px] z-10 hidden absolute w-[70vw] h-auto"
              onClick={() => {
                document.getElementById("hero_overlay_img")?.classList.add("hidden");
                document.getElementById("imgoverlaystate")!.innerText = "Click on the image | Overlay OFF";
              }}></img>
          </div>
        </div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] mb-10">
          <h3 className="text-[#00FFC2] font-[Montserrat] text-3xl">Description Section</h3>
          <img id="descimg" src={desc} className="rounded-[16px] w-[70vw] h-auto"></img>
        </div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] mb-10">
          <h3 className="text-[#00FFC2] font-[Montserrat] text-3xl">Why us section</h3>
          <img id="whyusimg" src={whyus} className="rounded-[16px] w-[70vw] h-auto"></img>
        </div>
      </div>
    </div>
  );
}