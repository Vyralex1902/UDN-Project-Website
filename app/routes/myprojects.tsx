import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import arrowsvg from "../assets/arrow.svg"
import csimg from "../assets/Coming Soon FHD.png"
import prjimg1 from "../assets/myAdskoHeroDesign.svg"

import "../styles/myprojects.css";
import "../styles/global.css";
import { Link } from "@remix-run/react";

export default function MyProjectsPage() {

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

    for (let i = 1; i <= 2; i++) {
      const cardsElement = document.getElementById("cards" + i);
      console.log("cards" + i);
      if (cardsElement) {
        cardsElement.onmousemove = e => {
          for (const card of document.getElementsByClassName("card" + i)) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
            card.setAttribute("style", "--mouse-x: " + x + "px; --mouse-y:" + y + "px;"
            );
          };
        }
      }
    }

    console.log("Page loaded.");
  });

  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col align-top bg-[rgba(14,16,17,1)] mb-10">
      <input type="text" className="absolute hidden" id="pageName" value={"myprojects"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="bg-[rgba(14,16,17,1)] fixed z-0"></div>
      <div style={{ width: "100%", height: "100%" }} className="flex flex-col items-center align-top bg-[rgba(14,16,17,1)] text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20 mb-[20vh]">
          <h1 id="title" className="text-white animate-slideInFromTop">Luca's Projects</h1>
          <h3 id="subtitle" className="text-sky-600">My projects and case studies</h3>
          <p>This only includes project from june 2024 to present</p>
        </div>
        <Link to="/projects/adskohero" className="cursor-context-menu">
          <div id="cards1" className="mb-[40vh]">
            <div className="card1">
              <div className="card1-content">
                <div className="card1-image">
                  <img src={prjimg1}></img>
                </div>
                <div className="card1-info-wrapper">
                  <div className="card1-info">
                    <div className="card1-info-title">
                      <h3>Enterprise sample landing page</h3>
                      <h5>July 2024 | ? Hours</h5>
                      <h4>A simple landing page made for an enterprise called Adsko.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/adskohero" className="cursor-context-menu">
          <div id="cards2" className="mb-[40vh]">
            <div className="card2">
              <div className="card2-content">
                <div className="card2-image">
                  <img src={csimg}></img>
                </div>
                <div className="card2-info-wrapper">
                  <div className="card2-info">
                    <div className="card2-info-title">
                      <h3>Searching algorithm</h3>
                      <h5>July 2024 | ? Hours</h5>
                      <h4>A merchandising page using my custom searching algorithm.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}