import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/home.css";

import banner from "../assets/UDNP Large banner.png"
import logo from "../assets/UDNP Logo 512x512.png"

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

    if (window.innerWidth < 900) {
      Swal.fire('Hey!', "It looks like you're on mobile! I firmly advise you to use the destkop view or just use a PC. If you use mobile view you will miss out on many cool animations and effects. Furthermore, the website will look and feel bad.", 'info');
      document.getElementById("MobileAlert")?.classList.remove("hidden");
    }
    else {
      document.getElementById("MobileAlert")?.classList.add("hidden");
    }
  });

  return (
    <div id="fulldiv" style={{ width: "100vw", height: "100%" }} className="fjc flex-col items-center align-top bg-[rgba(14,16,17,1)]">
      <meta name="description" content="Unified Developer Network Project" />
      <input type="text" className="absolute hidden" id="pageName" value={"home"} readOnly></input>
      <div className="w-screen h-screen flex flex-col items-center mt-[20vh]">
        <img src={banner} className="w-[50vw]"></img>
        <div className="w-screen justify-center flex"><div id="ttldiv" className="z-10 flex flex-col items-center align-middle">
          <h2 className="ml-2 mb-5 bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text text-[20px] font-[Montserrat]">A Unified Ecosystem for Developers.</h2>
          <div className="z-10 flex justify-start gap-5 mt-5 ml-2">
            <div id='downloadbtncontainer'>
              <div className='flex justify-start pt-2'>
                <div className='w-fit'>
                  <Link to="hireme" className="cursor-context-menu">
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
      </div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="freelancingSectionDiv" className="z-10 mt-10 mb-10 flex flex-col justify-center items-center align-top w-[40vw] bg-[rgba(24,26,27,0.5)]
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top mb-6">
          <h1 className="text-4xl text-[#2dc590]">
            Freelancing Services
          </h1>
        </div>
        <div className="flex flex-col items-left align-top">
          <h2 className="text-xl">
            <span className="text-purple-400">~</span> front-end web development
            <br />
            <span className="text-purple-400">~</span> simple to advanced pc app development (macOS, Windows)
          </h2>
        </div>
        <div className='mt-4' id='downloadbtncontainer'>
          <div className='flex justify-center pt-2'>
            <div className='w-fit'>
              <Link to="buyservice" className="cursor-context-menu">
                <div className="downloadbtn_div">
                  <motion.button className="homepagebtnlarger" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p>Buy a service</p>
                    </div>
                  </motion.button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="freelancingSectionDiv" className="z-10 mb-10 flex flex-col justify-center items-center align-top w-[40vw] bg-[rgba(24,26,27,0.5)]
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
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
      <motion.div initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="freelancingSectionDiv" className="z-10 mb-10 flex flex-col justify-center items-center align-top w-[40vw] bg-[rgba(24,26,27,0.5)]
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top">
          <h1 className="text-4xl text-[#2dc590]">
            My Tech
          </h1>
          <p className="mt-5 mb-3 max-w-[30vw] font-[RanchinoLight] text-3xl">My everyday tech right now</p>
        </div>
        <div className="flex justify-center flex-col">
          <p>
            <span className="text-purple-400">~</span> iPhone 15 Pro Max
            <br /><span className="text-purple-400">~</span> AirPods Pro 1
            <br /><span className="text-purple-400">~</span> Apple Watch SE 2
            <br /><span className="text-purple-400">~</span> MacBook Air M3 15'
            <br /><span className="text-purple-400">~</span> Windows Desktop PC (<Link to="pcspecs" className="cursor-context-menu"><span className="text-purple-600 hover:text-purple-500">specs</span></Link>)
          </p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="freelancingSectionDiv" className="z-10 mb-10 flex flex-col justify-center items-center align-top w-[40vw] bg-[rgba(24,26,27,0.5)]
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top">
          <h1 className="text-4xl text-[#2dc590]">
            My Documentations
          </h1>
        </div>
        <div className='mt-4' id='downloadbtncontainer'>
          <div className='flex justify-center pt-2'>
            <div className='w-fit'>
              <Link to="docs" className="cursor-context-menu">
                <div className="downloadbtn_div">
                  <motion.button className="homepagebtnlarger" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                    <div className='flex flex-col justify-center items-center'>
                      <p>See the docs</p>
                    </div>
                  </motion.button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} id="freelancingSectionDiv" className="z-10 mb-20 flex flex-col justify-center items-center align-top w-[40vw] bg-[rgba(24,26,27,0.5)]
      backdrop-blur-md p-3 text-gray-300 rounded-lg">
        <div className="flex flex-col items-center align-top">
          <h1 className="text-4xl text-[#2dc590]">
            Coding Environment
          </h1>
          <p className="mt-5 mb-3 max-w-[30vw] font-[RanchinoLight] text-3xl">My coding environment and tools</p>
        </div>
        <div className="flex justify-center flex-col">
          <p>
            <span className="text-purple-400">IDE ~</span> VSCode (also used to make this website)
            <br /><span className="text-purple-400">Terminal ~</span> MacOS Terminal
            <br /><span className="text-purple-400">JS Framework ~</span> Remix | React
            <br /><span className="text-purple-400">PC Framework ~</span> .NET Framework and SwiftUI
          </p>
        </div>
      </motion.div>


      <div id="bottomLinks" className="z-10 fixed bottom-0 flex flex-row text-center text-white bg-gray-700 backdrop-blur-md bg-opacity-80 py-1 px-5">
        <div className="flex flex-row align-midde text-white">
          <div className="flex justify-start text-lg pt-[5px]"><a href="mailto:service@udn-project.com">
            <p className="text-gray-400 hover:text-green-500">service@udn-project.com</p>
          </a>
          </div>
          <RxDividerVertical className="w-8 h-8 mt-1" />
          <a href="https://is.gd/flpzrg" target="_blank" className="mt-[5px]">
            <FaInstagram className="w-8 h-8 hover:text-green-500" />
          </a>
        </div>
      </div>
    </div >
  );
}

// function glitchEffect() {
//       return (
//         <div className="glitchText">
//           <h1 data-value="TEST" id="glitchText">TEST</h1>
//         </div>
//       );
//     }
