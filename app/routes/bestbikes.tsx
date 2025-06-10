import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/buyservice.css";
import "../styles/global.css";

export default function BestBikesPage() {

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
      <div style={{ width: "100vw", height: "100%" }} className="flex flex-col items-center align-top darkmode-bg
       text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mb-10 mt-20">
          <h1 id="title" className="darkmode-text-h2 animate-slideInFromTop">Buy a service</h1>
        </div>
        <div id="container">
          <CardGrid />
        </div>
      </div>
    </div>
  );
}

import img_1 from "../assets/best-s1000rr-169.jpg"
import img_2 from "../assets/m1000xr.jpg"
import img_3 from "../assets/H2R.jpg"
import img_4 from "../assets/best-s1000rr-169.jpg"
import img_5 from "../assets/best-s1000rr-169.jpg"
import img_6 from "../assets/best-s1000rr-169.jpg"
import img_7 from "../assets/best-s1000rr-169.jpg"
import img_8 from "../assets/best-s1000rr-169.jpg"

const CardGrid = () => {
  const data = [
    { name: 'BMW S1000RR', img: img_1 },
    { name: 'BMW M1000XR', img: img_2 },
    { name: 'Kawasaki Ninja H2R', img: img_3 },
    { name: 'Ducati Panigale V4', img: img_3 },
    { name: 'Honda CBR1000RR', img: img_5 },
    { name: 'Yamaha R1', img: img_5 },
    { name: 'Aprilia RSV4 Factory', img: img_5 },
  ];

  const cards = Array.from({ length: 50 }, (_, i) => {
    // Use the modulo operator (%) to cycle through your carData array
    const dataIndex = i % data.length;
    const item = data[dataIndex];

    return {
      id: i + 1,
      title: item.name,
      img: item.img
    };
  });

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Top of the line super-bikes
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[400px] h-[225px] border-2 rounded-lg duration-200 cursor-pointer flex flex-col items-center align-middle justify-center`}
            >

              <div className="w-full h-full overflow-hidden">
                <img
                  src={card.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute flex-1 flex flex-col justify-center z-10">
                <h3 className="backdrop-blur-[2px] text-lg font-semibold text-white mb-2 text-center">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
