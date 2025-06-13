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
      <input type="text" className="absolute hidden" id="pageName" value={"champions"} readOnly></input>
      <div style={{ width: "100vw", height: "100%" }} className="flex flex-col items-center align-top darkmode-bg
       text-white">
        <div id="topdiv" className="z-10 flex flex-col justify-center items-center mt-20">
          <h1 id="title" className="bg-gradient-to-r from-yellow-400 to-orange-400 inline-block text-transparent bg-clip-text animate-slideInFromTop">Champions</h1>
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
import img_4 from "../assets/DucatiPanigaleV4.jpg"
import img_5 from "../assets/honda-cbr1000rr-r-fireblade-sp.jpg"
import img_6 from "../assets/yamaha-r1.jpg"
import img_7 from "../assets/aprilia-rsv4.jpg"
import img_8 from "../assets/zx10r.jpg"
import img_9 from "../assets/MVAgustaSuperveloce1000SerieOro.jpg"
import img_10 from "../assets/ducatiStreetfighter.jpg"
import img_11 from "../assets/suzuki-hayabusa.jpg"
import img_12 from "../assets/DucatiDiavelV4.jpg"
import img_13 from "../assets/aprilia-rs-660.jpg"
import img_14 from "../assets/HondaCBR600RR.jpg"
import img_15 from "../assets/YamahaR6.jpg"
import img_16 from "../assets/kawasaki-ninja-zx6r.jpg"

const CardGrid = () => {
  const data1000 = [
    { name: 'BMW S1000RR', img: img_1, link: 's1000rr' },
    { name: 'BMW M1000XR', img: img_2, link: 'bmw-m1000xr' },
    { name: 'Kawasaki Ninja H2R', img: img_3, link: 'k-ninja-h2r' },
    { name: 'Ducati Panigale V4', img: img_4, link: 'ducati-panigale-v4' },
    { name: 'Honda CBR1000RR', img: img_5, link: 'honda-cbr1000rr' },
    { name: 'Yamaha R1', img: img_6, link: 'yamaha-r1' },
    { name: 'Aprilia RSV4 Factory', img: img_7, link: 'aprilia-rsv4' },
    { name: 'Kawasaki Ninja ZX-10R', img: img_8, link: 'k-ninja-zx10r' },
    { name: 'MV Agusta Superveloce 1000 Serie Oro', img: img_9, link: 'mv-superveloce-1000so' },
    { name: 'Ducati Streetfighter V4', img: img_10, link: 'ducati-streetfighter-v4' },
    { name: 'Suzuki Hayabusa', img: img_11, link: 'suzuki-hayabusa' },
    { name: 'Ducati Diavel V4', img: img_12, link: 'ducati-diavel-v4' },
  ];
  const data600 = [
    { name: 'Aprilia RS 660', img: img_13, link: 'aprilia-rs660' },
    { name: 'Honda CBR 600 RR', img: img_14, link: 'honda-cbr600rr' },
    { name: 'Yamaha R6', img: img_15, link: 'yamaha-r6' },
    { name: 'Kawasaki Ninja ZX-6R', img: img_16, link: 'k-ninja-zx6r' },
  ];

  const cards1000 = Array.from({ length: 12 }, (_, i) => {
    // Use the modulo operator (%) to cycle through your carData array
    const dataIndex = i % data1000.length;
    const item = data1000[dataIndex];

    return {
      id: i + 1,
      title: item.name,
      img: item.img,
      link: item.link
    };
  });

  const cards600 = Array.from({ length: 3 }, (_, i) => {
    // Use the modulo operator (%) to cycle through your carData array
    const dataIndex = i % data600.length;
    const item = data600[dataIndex];

    return {
      id: i + 1,
      title: item.name,
      img: item.img,
      link: item.link
    };
  });

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Top of the line super-bikes
        </h1>

        <div id="divider" className="mt-1 mb-1"></div>
        <h2 className="text-center mb-1">1000+cc</h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {cards1000.map((card) => (
            <motion.div whileHover={{ scale: 1.03, borderColor: "transparent" }} onClick={() => { window.location.href = 'https://udn-project.com/champions/' + card.link }}
              key={card.id}
              className={`w-[400px] h-[225px] border-2 border-gray-600 rounded-lg duration-200 cursor-pointer flex flex-col items-center align-middle justify-center`}
            >

              <div className="w-full h-full overflow-hidden">
                <img
                  src={card.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute flex-1 flex flex-col justify-center z-10 bg-black bg-opacity-50">
                <h3 className="backdrop-blur-[2px] text-lg text-white mb-2 text-center">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="divider" className="mt-8 mb-1"></div>
        <h2 className="text-center mb-1 ">600cc</h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {cards600.map((card) => (
            <motion.div whileHover={{ scale: 1.03, borderColor: "transparent" }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
