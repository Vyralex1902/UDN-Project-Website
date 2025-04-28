import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/contactme.css";
import "../styles/global.css";

export default function ContactMePage() {

  useEffect(() => {
    console.log("Page loaded.");
  });

  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"contactme"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Contact me</h1>
        </div>
        <div id="sectionContainer" className="flex flex-col items-start h-[100vh] mb-10">
          <iframe className="border-none w-[75vw] h-[75vh] rounded-lg" width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQWiKQhUN0ZKR1VNUThWSFhWN1QxWlQwVFRIOEhGVi4u&embed=true"> </iframe>
        </div>
      </div>
    </div>
  );
}