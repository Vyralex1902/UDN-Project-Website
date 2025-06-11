import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/champions.css";
import "../styles/global.css";

export default function ChampionsPage_S1000RR() {

  useEffect(() => {
    console.log("Page loaded.");

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
      <input type="text" className="absolute hidden" id="pageName" value={"champions"} readOnly></input>

    </div>
  );
}