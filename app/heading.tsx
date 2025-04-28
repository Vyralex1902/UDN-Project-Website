import { FaHome } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { motion } from "framer-motion";


import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/heading.css";

import mypic1 from "./assets/mypic1.jpeg"
import mypic2 from "./assets/mypic2.jpeg"
import mypic3 from "./assets/mypic3.png"
import pill from "./assets/Pill.png"
import Swal from "sweetalert2";

var switchableTheme = true;
var currentPictureIndex = 0;

const Heading = () => {
  useEffect(() => {
    const ppic = document.getElementById("profilepic");
    if (ppic) {
      const rnd = Math.floor(Math.random() * 3);
      currentPictureIndex = rnd;
      switch (rnd) {
        case 0: ppic.setAttribute('src', mypic2); break;
        case 1: ppic.setAttribute('src', mypic3); break;
        case 2: ppic.setAttribute('src', mypic1); break;
      }
    }

    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement2 = document.getElementById("headingIcon2");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");

    headingIconElement1!.onclick = (e) => {
      headingIconElement1!.classList.remove("heading-icon");
      headingIconElement1!.classList.add("heading-icon-selected");

      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
    }
    headingIconElement3!.onclick = (e) => {
      headingIconElement3!.classList.remove("heading-icon");
      headingIconElement3!.classList.add("heading-icon-selected");

      headingIconElement1!.classList.remove("heading-icon-selected");
      headingIconElement1!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
    }
    headingIconElement4!.onclick = (e) => {
      headingIconElement4!.classList.remove("heading-icon");
      headingIconElement4!.classList.add("heading-icon-selected");

      headingIconElement1!.classList.remove("heading-icon-selected");
      headingIconElement1!.classList.add("heading-icon");
      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
    }

    if (
      document.getElementById("pageName")?.getAttribute('value') == "home"
    ) {
      headingIconElement1!.classList.remove("heading-icon");
      headingIconElement1!.classList.add("heading-icon-selected");

      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
    }

    if (
      document.getElementById("pageName")?.getAttribute('value') == "buyservice"
      || document.getElementById("pageName")?.getAttribute('value') == "home"
      || document.getElementById("pageName")?.getAttribute('value') == "mystory"
      || document.getElementById("pageName")?.getAttribute('value') == "hireme"
    ) {
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('light')) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    }
    else if (document.getElementById("pageName")?.getAttribute('value') == "meridian") {
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'dark') {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }
      }
    }

    console.log("Heading loaded.");
  });

  return (
    <div className="fixed top-0 flex flex-row pt-1 pb-1 z-50 justify-center w-screen h-[75px] cursor-pointer">
      <motion.button id="picbtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={togglePicture} className="animate-reveal backdrop-blur-lg w-14 h-14 border-white border-opacity-20 align-middle flex justify-center rounded-full mr-3 mt-[5px]">
        <img id="profilepic" className=" w-14 h-14 align-middle rounded-full "></img>
      </motion.button>
      <div id="headingThing" className="min-w-[550px] max-w-[550px] backdrop-blur-lg border-gray-500 dark:border-gray-700 border-opacity-20 dark:border-opacity-100 border-[1.5px] flex w-fit justify-center rounded-full items-center bg-transparent">
        <div className="flex w-fit justify-center absolute justify-self-center gap-2" style={{ width: "100%" }}>
          <HeadingIcon id="headingIcon1" text="Home" link="/" ></HeadingIcon>
          <DevelopmentHeadingIcon />
          <HeadingIcon id="headingIcon3" text="Passions" link="/hobbies" ></HeadingIcon>
          <HeadingIcon id="headingIcon4" text="My Story" link="/mystory" ></HeadingIcon>
        </div>
      </div>
      <div id="themeToggle" className="border-2 border-white border-opacity-20 w-14 h-14 rounded-full bg-black bg-opacity-35 hover:bg-opacity-50
          dark:bg-white dark:bg-opacity-20 justify-center align-middle flex items-center ml-3 mt-[5px] backdrop-blur-lg">
        <button className="flex align-middle justify-center"><IoMoonSharp style={{ color: "white", width: "22px", height: "22px" }} onClick={toggleTheme} /></button>
      </div>
    </div>
  );
};

const HeadingIcon = ({ id, text = 'Text', link }: { id: string, text: string, link: any }) => (
  <Link to={link} className="cursor-pointer">
    <div id={id} className="heading-icon group z-50 text-[15px]">
      {text}
    </div>
  </Link>
);

const DevelopmentHeadingIcon = () => (
  <div>
    <div id="headingIcon2" className="heading-icon group z-50 text-[15px] cursor-pointer">
      Development
      <div className="absolute" id="dropdown-content">
        <Link to="programming" className="cursor-pointer">
          <p id="di1" className="text-black dark:text-white bg-white dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">My Knowledge</p>
        </Link>
        <Link to="docs" className="cursor-pointer">
          <p id="di2" className="text-black dark:text-white bg-white dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">My Docs</p>
        </Link>
        <Link to="myprojects" className="cursor-pointer">
          <p id="di3" className="text-black dark:text-white bg-white dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">My Projects</p>
        </Link>
        <Link to="meridian" className="cursor-pointer">
          <p id="di4" className="text-black dark:text-white bg-white dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800">Project Meridian</p>
        </Link>
      </div>
    </div>
  </div>
);

const togglePicture = () => {
  const ppic = document.getElementById("profilepic");
  if (ppic) {
    if (currentPictureIndex < 2) {
      currentPictureIndex++;
    }
    else {
      currentPictureIndex = 0;
    }
    switch (currentPictureIndex) {
      case 0: ppic.setAttribute('src', mypic2); break;
      case 1: ppic.setAttribute('src', mypic3); break;
      case 2: ppic.setAttribute('src', mypic1); break;
    }
  }
}

const toggleTheme = () => {
  if (
    document.getElementById("pageName")?.getAttribute('value') == "buyservice"
    || document.getElementById("pageName")?.getAttribute('value') == "home"
    || document.getElementById("pageName")?.getAttribute('value') == "mystory"
    || document.getElementById("pageName")?.getAttribute('value') == "hireme"
    || document.getElementById("pageName")?.getAttribute('value') == "meridian"
  ) {
    switchableTheme = false;
  }
  else {
    switchableTheme = true;
  }

  if (switchableTheme) {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
    console.log("Theme toggled.");
  }
  else {

    Swal.fire("Can't do that", "Sorry, you can't switch to dark theme on this page. I locked it either because it only looks good in light mode or because these is no need to switch it.", "warning");
  }
}
export default Heading;