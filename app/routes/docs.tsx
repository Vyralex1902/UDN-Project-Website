import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/docs.css";
import "../styles/global.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Luca Docs" },
    { name: "Luca Docs", content: "My documentations about topics I've found interesting and hard to find answers about." },
  ];
};

export default function DocsPage() {

  useEffect(() => {
    const cardsElement = document.getElementById("cards");
    if (cardsElement) {
      cardsElement.onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.setAttribute("style", "--mouse-x: " + x + "px; --mouse-y:" + y + "px;");
        };
      }
    }

    const searchBox = document.getElementById("searchBox");
    searchBox!.addEventListener('input', function (event) {
      const target = event.target as HTMLInputElement;
      const currentValue: string = target.value.toLowerCase();

      // Get all <h3> elements within cards
      const h3Elements = document.querySelectorAll('#cards .card .card-content .card-info-wrapper .card-info .card-info-title h3');

      h3Elements.forEach(h3 => {
        const h3Text = h3.textContent!.toLowerCase();
        const cardElement = h3.closest('.card') as HTMLElement;

        if (h3Text.includes(currentValue)) {
          // Show the card if it contains the search value
          cardElement.classList.remove('invisible');
        } else {
          // Hide the card if it does not contain the search value
          cardElement.classList.add('invisible');
        }
      });
    });

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
      <input type="text" className="absolute hidden" id="pageName" value={"docs"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="darkmode-bg fixed z-0"></div>
      <div style={{ width: "100%", height: "100%" }} className="flex flex-col items-center align-top darkmode-bg
       text-black dark:text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20 text-black dark:text-white">
          <h1 id="title" className="text-black dark:text-white animate-slideInFromTop">Luca's Docs</h1>
          <h2 className="text-black dark:text-white">My documentations about topics I've found interesting and hard to find answers about.</h2>
          <h4 className="text-gray-700 dark:text-gray-500">This is my way to share some of the thousands things I learn every month.</h4>
        </div>
        <div className="flex flex-row justify-center z-10">
          <input id="searchBox" type="text" placeholder="Search for a topic..." className="placeholder-gray-400 bg-gray-900 w-[30vw] rounded-md"></input>
        </div>
        <GlowCards></GlowCards>
      </div>
    </div>
  );
}

function GlowCards({ }) {
  return (
    <div id='card-body' className="bg-[#1E1E1E] dark:bg-white/[.025]">
      <div id="cards">
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Serverless hosting vs traditional</h3>
                  <h4>June 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Javascript vs Typescript</h3>
                  <h4>June 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Quick search algorithm</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>JS Arrow Functions</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>React vs vanilla HTML/JS</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Quicksorting algorithm</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://lucasnode.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Progressive element targeting with JS/TS</h3>
                  <h4>July 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}