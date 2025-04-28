import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import "../styles/home.css";

// import mypic1 from "../assets/mypic1.jpeg"
// import mypic2 from "../assets/mypic2.jpeg"
// import mypic3 from "../assets/mypic3.png"
import mypic3noback from "../assets/mypic3noback.png"
import MyMainPic from "../assets/mypic2noback.png"
import arrowsvg from "../assets/arrow.svg"
// import backgroundImg2 from "../assets/mainPageBackground2.jpg"
// import mainGradientBackground from "../assets/mainGradientBackground.jpg"
// import mainPageTextClip from "../assets/mainPageTextClip.jpg"
import tertitimg from "../assets/terminaltitle.png"

import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { TbBrandFiverr } from "react-icons/tb";

export const meta: MetaFunction = () => {
  return [
    { title: "Luca Montanari's Portfolio" },
    { name: "Luca Montanari's Portfolio", content: "Welcome to Luca's Portfolio! I'm a free time web and app developer. Sometimes a designer." },
  ];
};

//Home Page

export default function Index() {

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }

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
    <div id="fulldiv" style={{ width: "100vw", height: "100%" }} className="fjc flex-col items-center align-top pt-24 bg-[rgba(14,16,17,1)]">
      <meta name="description" content="Luca Montanari's portfolio: an aspiring developer (currently still a student). Ready for part-time hiring and freelancing." />
      <input type="text" className="absolute hidden" id="pageName" value={"home"} readOnly></input>
      <div id="MobileAlert" className="absolute top-[75px] max-w-[90vw] text-yellow-400"><p>It looks like you're on mobile! I firmly advise you to use the destkop view or just use a PC.</p></div>
      <div className="w-screen h-screen flex flex-col items-center mt-[20vh]">
        <div className="w-screen justify-center flex"><div id="ttldiv" className="z-10 flex flex-col items-left align-middle">
          <h1 id="ttl" className="text-white animate-slideInFromTop text-[90px] font-[Montserrat]">Hey, I'm Luca!</h1>
          <h2 id="subttl" className="ml-1 bg-gradient-to-r from-blue-600 to-cyan-400 inline-block text-transparent bg-clip-text text-[50px] 
          font-[Montserrat]" data-type='[ "Web and App Developer.", "Front-end developer.", "Tech enthusiast." ]'></h2>
          <h2 className="ml-2 mb-5 bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text text-[20px] font-[Montserrat]">Building websites and apps  for startups and individuals with creativity in mind.</h2>
          <div className="flex gap-2">
            <p className="text-white font-[Montserrat] ml-2">"Make your worst days your most productive ones" - Me...</p>
            <Link to="mystory" className="cursor-context-menu">
              <p className="underline text-purple-600 hover:text-purple-500">read my story</p>
            </Link></div>
          <div className="z-10 flex justify-start gap-5 mt-5 ml-2">
            <div id='downloadbtncontainer'>
              <div className='flex justify-start pt-2'>
                <div className='w-fit'>
                  <Link to="hireme" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="homepagebtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-center items-center'>
                          <p>Hire Me</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div id='downloadbtncontainer'>
              <div className='flex justify-center pt-2'>
                <div className='w-fit'>
                  <Link to="contactme" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="homepagebtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-center items-center'>
                          <p>Contact Me</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-5 ml-3 text-lg text-left"><a href="mailto:luca@lucasnode.com">
            <p className="text-gray-400 underline hover:text-purple-600">luca@lucasnode.com</p></a></div>
        </div>
          <img id="profilepic1" className="w-[400px] h-[400px] animate-revealmainimg opacity-[0.2] hover:opacity-[0.5] transition-all" src={MyMainPic}></img>
        </div>
      </div>

      <div className="flex justify-center -mt-[50vh] mb-[20vh]">
        <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
      </div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }}>
        <img id="terminalimg" className="z-10 w-[40vw]" src={tertitimg}></img>
        <div id="myinfodiv" className="z-10 -mt-2 flex flex-col justify-center items-center align-top w-[39.8vw] bg-[rgba(24,26,27,0.5)] p-3
       text-gray-300 shadow-xl">
          <div className="flex flex-col items-left align-top">
            <h2 className="text-4xl">
              <span className="text-green-400">.age</span>&nbsp; <span className="text-purple-400">$&gt;</span> 18 years old
              <br />
              <span className="text-green-400">.loc</span> &nbsp;&nbsp;<span className="text-purple-400">$&gt;</span> Living in <span className="text-green-500">It</span><span className="text-white">a</span><span className="text-red-500">ly</span>
              <br />
              <span className="text-green-400">.lang</span> <span className="text-purple-400">$&gt;</span> Speaking en & it
            </h2>
            <h2 className="text-3xl mt-5">
              <span className="text-purple-400">Current Profession &gt;</span> Student
            </h2>
          </div>
        </div>
      </motion.div>
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

      <div id="bottomText" className="z-10 fixed text-left bottom-3 left-3 opacity-70 text-white">
        <p>Make sure to disable any darkmode extension like Noir.</p>
      </div>
      <div id="bottomText" className="z-10 fixed text-left bottom-3 right-3 opacity-70 text-white">
        <p>All copyright® rights reserved to Luca Montanari.</p>
      </div>

      <div id="bottomLinks" className="z-10 fixed bottom-0 flex flex-row text-center text-white bg-gray-700 backdrop-blur-md bg-opacity-80 py-2 px-5">
        <div className="flex flex-row gap-2 align-midde text-white">
          <a href="https://is.gd/VuJcew" target="_blank" className="mt-[5px]">
            <FaYoutube className="h-8 w-8 hover:text-green-500" />
          </a>
          <RxDividerVertical className="w-8 h-8 mt-1" />
          <a href="https://is.gd/flpzrg" target="_blank" className="mt-[5px]">
            <FaInstagram className="w-8 h-8 hover:text-green-500" />
          </a>
          <RxDividerVertical className="w-8 h-8 mt-1" />
          <a href="http://www.fiverr.com/s/Ld4NB40" target="_blank" className="mt-[5px]">
            <TbBrandFiverr className="w-8 h-8 hover:text-green-500" />
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
