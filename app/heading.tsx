import { FaHome } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbGymnastics } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { motion } from "framer-motion";

import { RxDividerHorizontal } from "react-icons/rx";


import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/heading.css";

import pill from "./assets/Pill.png"
import Swal from "sweetalert2";

var switchableTheme = true;
var currentPictureIndex = 0;

const Heading = () => {
  useEffect(() => {

    const headingIconElement1 = document.getElementById("headingIcon1");
    const headingIconElement2 = document.getElementById("headingIcon2");
    const headingIconElement3 = document.getElementById("headingIcon3");
    const headingIconElement4 = document.getElementById("headingIcon4");
    const headingIconElement5 = document.getElementById("headingIcon5");

    headingIconElement1!.onclick = (e) => {
      headingIconElement1!.classList.remove("heading-icon");
      headingIconElement1!.classList.add("heading-icon-selected");

      headingIconElement3!.classList.remove("heading-icon-selected");
      headingIconElement3!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
      headingIconElement5!.classList.remove("heading-icon-selected");
      headingIconElement5!.classList.add("heading-icon");
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
      headingIconElement2!.classList.remove("heading-icon-selected");
      headingIconElement2!.classList.add("heading-icon");
      headingIconElement4!.classList.remove("heading-icon-selected");
      headingIconElement4!.classList.add("heading-icon");
      headingIconElement5!.classList.remove("heading-icon-selected");
      headingIconElement5!.classList.add("heading-icon");
    } //TODO: complete with other pages

    console.log("Navbar loaded.");
  });

  return (
    <div className="fixed top-0 flex flex-row pt-[6px] pb-1 z-50 justify-center w-screen h-[75px] cursor-pointer">
      <div id="headingThing" className="min-w-[670px] max-w-[550px] backdrop-blur-lg border-gray-700 border-opacity-100 border-[1.5px] flex w-fit justify-center rounded-full items-center bg-transparent">
        <div className="flex w-fit justify-center absolute justify-self-center gap-2" style={{ width: "100%" }}>
          <HeadingIcon id="headingIcon1" text="Home" link="/" ></HeadingIcon>
          <DestinationsHeadingIcon />
          <BikesHeadingIcon />
          <TipsHeadingIcon />
          <VideosHeadingIcon />
        </div>
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

const DestinationsHeadingIcon = () => (
  <div>
    <div id="headingIcon2" className="heading-icon group z-50 text-[15px] cursor-pointer">
      Destinations
      <div className="absolute" id="dropdown-content">
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di1" className="text-white bg-gray-900 hover:bg-gray-800">Car</p>
        </Link>
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di2" className="text-white bg-gray-900 hover:bg-gray-800">Motorcycle</p>
        </Link>
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di3" className="text-white bg-gray-900 hover:bg-gray-800">Mixed</p>
        </Link>
      </div>
    </div>
  </div>
);
const BikesHeadingIcon = () => (
  <div>
    <div id="headingIcon3" className="heading-icon group z-50 text-[15px] cursor-pointer">
      Bikes
      <div className="absolute" id="dropdown-content">
        <Link to="bestbikes" className="cursor-pointer">
          <p id="di4" className="text-white bg-gray-900 hover:bg-gray-800">Champions</p>
        </Link>
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di5" className="text-white bg-gray-900 hover:bg-gray-800">Best VFM</p>
        </Link>
      </div>
    </div>
  </div>
);
const TipsHeadingIcon = () => (
  <div>
    <div id="headingIcon4" className="heading-icon group z-50 text-[15px] cursor-pointer">
      Tips
      <div className="absolute" id="dropdown-content">
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di6" className="text-white bg-gray-900 hover:bg-gray-800">Tutorials</p>
        </Link>
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di7" className="text-white bg-gray-900 hover:bg-gray-800">Tips list</p>
        </Link>
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di8" className="text-white bg-gray-900 hover:bg-gray-800">??</p>
        </Link>
        <Link to="comingsoon" className="cursor-pointer">
          <p id="di9" className="text-white bg-gray-900 hover:bg-gray-800">??</p>
        </Link>
      </div>
    </div>
  </div>
); const VideosHeadingIcon = () => (
  <div>
    <div id="headingIcon5" className="heading-icon group z-50 text-[15px] cursor-pointer">
      Videos
      <div className="absolute" id="dropdown-content">
        <a href="https://www.youtube.com/channel/UCobVHzwUeSZnTgXk4OrHmOg/" target="_blank" className="cursor-pointer">
          <p id="di10" className="text-white bg-gray-900 hover:bg-gray-800">YouTube</p>
        </a>
        <a href="https://instagram.com/blipnrevs" target="_blank" className="cursor-pointer">
          <p id="di11" className="text-white bg-gray-900 hover:bg-gray-800">Instagram</p>
        </a>
      </div>
    </div>
  </div>
);

export default Heading;