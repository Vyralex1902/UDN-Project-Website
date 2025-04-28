import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/buyservice.css";
import "../styles/global.css";

export default function BuyAServicePage() {

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
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"buyservice"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bdarkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Buy a service</h1>
        </div>
        <div id="sectionContainer" className="flex flex-col items-start h-[100vh] mb-10">
          <iframe className="border-none w-[75vw] h-[75vh] rounded-lg" width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQWiKQhUNlVVSEUxR1VMMUIyMDQwV0U1QUpRQzIwSS4u&embed=true"> </iframe>
        </div>
      </div>
    </div>
  );
}