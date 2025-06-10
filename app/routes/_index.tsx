import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/home.css";

import banner from "../assets/UDNP Large banner.png"
import backimg from "../assets/backimg.jpg"
import thirdBIMG from "../assets/coolest-s1000rr.jpg"
import secondBIMG from "../assets/secondBImg.jpg"
import logo from "../assets/UDNP Logo 512x512.png"
import route from "../assets/route.png"
import star from "../assets/star.png"
import increase from "../assets/increase.png"
import video from "../assets/video.png"
import savemoney from "../assets/save-money.png"
import two from "../assets/two.png"

import { FaInstagram } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";

export const meta: MetaFunction = () => {
  return [
    { title: "UDN Project" },
    { name: "UDN Project", content: "Welcome to UDN Project." }
  ];
};

//Home Page

export default function Index() {

  useEffect(() => {
    console.log("Page loaded.");

    const cardsElement = document.getElementById("cards");
    // const cardsContainer = document.getElementById("cardsContainer");
    // const sBimg = document.getElementById("sbimg");

    // if (cardsContainer) {
    //   cardsContainer.onmouseenter = () => {
    //     if (sBimg) {
    //       sBimg.classList.add("blur-[2px]");
    //     }
    //   }
    //   cardsContainer.onmouseleave = () => {
    //     if (sBimg) {
    //       sBimg.classList.remove("blur-[2px]");
    //     }
    //   }
    // }
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

    // if (window.innerWidth < 900) {
    //   Swal.fire('Hey!', "It looks like you're on mobile! I firmly advise you to use the destkop view or just use a PC. If you use mobile view you will miss out on many cool animations and effects. Furthermore, the website will look and feel bad.", 'info');
    //   document.getElementById("MobileAlert")?.classList.remove("hidden");
    // }
    // else {
    //   document.getElementById("MobileAlert")?.classList.add("hidden");
    // }
  });

  return (
    <div id="fulldiv" style={{
      width: "100vw", height: "100vh",
      overflowY: "scroll",
      scrollSnapType: "y mandatory"
    }} className="bg-[rgba(14,16,17,1)]">
      <meta name="description" content="Unified Driving Network Project" />
      <input type="text" className="absolute hidden" id="pageName" value={"home"} readOnly></input>

      {/* First Section - Hero */}
      <div className="w-screen h-screen flex flex-col items-center align-middle pt-[20vh] z-10 relative" style={{ scrollSnapAlign: "start" }}>
        <div className="absolute top-0 w-screen h-screen overflow-hidden">
          <img src={backimg} className="relative opacity-40 blur-[1px] w-full h-full object-cover"></img>
        </div>
        <img src={banner} className="w-[50vw] z-10"></img>
        <div className="w-screen justify-center flex">
          <div id="ttldiv" className="z-10 mt-5 flex flex-col items-center align-middle">
            <h2 className="ml-2 mb-5 bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text text-[20px] font-[Montserrat]">A Unified ecosystem for Drivers & Riders.</h2>
            <div className="z-10 flex justify-start gap-5 mt-5 ml-2">
              <div id='downloadbtncontainer'>
                <div className='flex justify-start pt-2'>
                  <div className='w-fit'>
                    <Link to="comingsoon" className="cursor-context-menu">
                      <div className="downloadbtn_div">
                        <motion.button className="homepagebtn" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
                          <div className='flex flex-col justify-center items-center'>
                            <p>Learn more</p>
                          </div>
                        </motion.button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 w-screen text-right pr-5 z-10">
          <p className="text-gray-400">Picture by 25snn</p>
        </div>
      </div>

      {/* Second Section */}
      <div id="second-section" className="w-screen h-screen flex flex-col items-center align-top pt-[15vh] relative z-10" style={{ scrollSnapAlign: "start" }}>
        <div className="absolute top-0 w-screen h-screen overflow-hidden">
          <img id="sbimg" src={secondBIMG} className="relative opacity-30 w-full h-full object-cover"></img>
        </div>

        <div id="second-topTitle" className="z-10">
          <h1 className="text-white text-[30px] tracking-wide font-[title]">Are you a passionate rider?</h1>
        </div>

        <div id="second-subTitle" className="z-10">
          <h1 className="bg-gradient-to-r from-blue-400 to-pink-500 inline-block text-transparent bg-clip-text text-[20px]">You might be in the right place...</h1>
        </div>

        <div id="second-content">
          <div id="cardsContainer">
            <GlowCards></GlowCards>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div id="third-section" className="w-screen h-screen flex flex-col items-center align-top pt-[10vh] relative z-10" style={{ scrollSnapAlign: "start" }}>
        <div className="absolute top-0 w-screen h-screen overflow-hidden">
          <img id="sbimg" src={thirdBIMG} className="relative opacity-30 w-full h-full object-cover"></img>
        </div>

        <div className="absolute bottom-3 w-screen text-right pr-5 z-10">
          <p className="text-gray-400">Picture by Pairach Boriboonmee</p>
        </div>

        <div id="third-topTitle" className="z-10">
          <h1 className="text-white text-[40px]">Test?</h1>
        </div>

        <div id="third-subTitle" className="z-10">
          <h1 className="bg-gradient-to-r from-blue-400 to-pink-500 inline-block text-transparent bg-clip-text text-[20px]">You might be in the right place...</h1>
        </div>

        <div id="second-content" className="">
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="wideCardDiv" className="z-10 mt-10 mb-10 flex flex-col justify-center items-center align-top w-[50vw] bg-[rgba(24,26,27,0.5)]
        backdrop-blur-md p-3 text-gray-300 rounded-lg">
            <div className="flex flex-col items-center align-top mb-6">
              <h1 className="text-4xl text-[#2dc590]">
                Find your next destination
              </h1>
            </div>
            <div className="flex flex-col items-left align-top">
              <h2 className="text-xl">
                <span className="text-purple-400">~</span> The website is currently still in development
                <br />
                <span className="text-purple-400">~</span> Keep checking back for updates
              </h2>
            </div>
            <div className='mt-4 ' id='downloadbtncontainer'>
              <div className='flex justify-center pt-2'>
                <div className='w-fit'>
                  <Link to="buyservice" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="homepagebtnlarger" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-center items-center'>
                          <p>Back to google</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0.25 }}
            whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="wideCardDiv" className="z-10 mb-10 flex flex-col justify-center items-center align-top w-[20vw] bg-[rgba(24,26,27,0.5)]
        backdrop-blur-md p-3 text-gray-300 rounded-lg ">
            <div className="flex flex-col items-center align-top">
              <h1 className="text-4xl text-[#2dc590]">
                Support my projects
              </h1>
              <p className="mt-5 max-w-[30vw]">I've never earned anything with my projects and hours of 'work'. Any monetary donation would be insanely helpful.</p>
            </div>
            <div className='mt-4' id='downloadbtncontainer'>
              <div className='flex justify-center pt-2'>
                <div className='w-fit'>
                  <Link to="donate" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="homepagebtnlarger" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-center items-center'>
                          <p>Donate</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div id="bottomLinks" className="z-10 fixed bottom-0 flex self-center flex-row text-center text-white backdrop-blur-md bg-opacity-80 mb-3 ml-5">
        <a href="mailto:service@udn-project.com">
          <p className="text-gray-400 hover:text-green-500">service@udn-project.com</p>
        </a>
      </div>
    </div >
  );
}

function GlowCards({ }) {
  return (
    <div id='card-body' className="bg-transparent">
      <div id="cards">
        <div className="card" onClick={() => { window.location.href = 'https://udn-project.com/routes' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Find your next destination</h3>
                  <h4>with everything taken into account</h4>
                </div>
              </div>
              <img src={route} className="h-[70px] absolute right-5" />
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://udn-project.com/bestbikes' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Find your new favorite bike</h3>
                  <h4>from our editor's lists</h4>
                </div>
              </div>
              <img src={star} className="h-[70px] absolute right-5" />
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://udn-project.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Get better</h3>
                  <h4>by following our tips</h4>
                </div>
              </div>
              <img src={increase} className="h-[70px] absolute right-5" />
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://udn-project.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Find the best tutorials available</h3>
                  <h4>from the premium selection</h4>
                </div>
              </div>
              <img src={video} className="h-[70px] absolute right-5" />
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://udn-project.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Stop wasting money</h3>
                  <h4>look at our best VFM bikes list</h4>
                </div>
              </div>
              <img src={savemoney} className="h-[70px] absolute right-5" />
            </div>
          </div>
        </div>
        <div className="card" onClick={() => { window.location.href = 'https://udn-project.com/docs' }}>
          <div className="card-content">
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Find a rider partner</h3>
                  <h4>in our community</h4>
                </div>
              </div>
              <img src={two} className="h-[70px] absolute right-5" />
            </div>
          </div>
        </div>
      </div>
    </div>);
}