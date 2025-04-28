import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import {
  motion, useMotionValueEvent,
  useScroll,
  useTransform, stagger, useAnimate
} from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import arrowsvg from "../assets/arrow.svg"

import "../styles/mystory.css";
import "../styles/global.css";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default function HobbiesPage() {

  useEffect(() => {


    console.log("Page loaded.");
  });

  const words = `Here's the story about how I started programming. It has been a beautiful journey. Full of pain, bugs and gratification.
My greatest passion is almost ready to become a job. Anyways, enjoy the story now.`;

  return (
    <div style={{ width: "100%", height: "100%" }} className="flex flex-col align-top bg-[rgba(14,16,17,1)] mb-10">
      <TextGenerateEffect words={words} className="z-20 absolute top-56 left-20 right-20 text-white" />
      <input type="text" className="absolute hidden" id="pageName" value={"mystory"} readOnly></input>
      <div style={{ width: "100%", height: "100vh" }} className="bg-[rgba(14,16,17,1)] fixed z-0"></div>
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center align-top bg-[rgba(14,16,17,1)] text-white">
        <div id="topdiv" className="z-10 flex flex-col align-top items-center mt-20 mb-[20vh]">
          <h1 id="title" className="text-white animate-slideInFromTop">Luca's Story & Advices</h1>
          <h3 id="subtitle" className="text-sky-600">How I started programming</h3>
        </div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw]  p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter one - The beginning</h3>
          <p id="typedtext" className="text-white text-xl">
            It all started in <span className="text-blue-500">January 2016</span> when I was 9 years old. I began to develop an interest in coding. Initially, I watched YouTube videos about programming and coding. Since my English skills were quite poor, I primarily watched Italian videos. These videos provided me with a general overview of what coding was and the challenges involved in learning it. At first, I thought, <span className="text-green-500">"Okay, this seems difficult. I'll just start another day.”</span><br /><br />
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="flex justify-center mb-[45vh]">
          <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
        </motion.div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter two - Starting to code</h3>
          <p id="typedtext" className="text-white text-xl">
            At the <span className="text-blue-500">age of 13</span>, I began learning my first programming language: <span className="text-yellow-400">VB.NET</span>. After grasping the basics of this language, I decided to enhance my skills by learning <span className="text-yellow-400">C#</span>, a more advanced high-level programming language primarily used for creating applications with the Microsoft .NET Framework. I dedicated about four years to learning and practicing <span className="text-yellow-400">C#</span> before expanding my skill set with additional programming languages. I knew from the start that programming would be my future career.<br /><br />
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="flex justify-center mb-[45vh]">
          <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
        </motion.div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter three - The Passion</h3>
          <p id="typedtext" className="text-white text-xl">
            I have always been passionate about technology, especially software. For me, programming is the next level of loving tech because it involves creating it. While it's not hardware, software is crucial for any smart technology. Being a programmer opens up countless opportunities, from full-stack web development to PLC programming. The limitless possibilities are one of the things I love most about programming.<br /><br />
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="flex justify-center mb-[45vh]">
          <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
        </motion.div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter four - The sad part</h3>
          <p id="typedtext" className="text-white text-xl">
            Unfortunately, I've lost every project that I've made before <span className="text-blue-500">2024</span>... which were a lot. Since I lost every backup of them, now I have no memory left of them, no screenshots, no files, nothing. This is very bad news for me, since I have no proof of my work with <span className="text-yellow-400">C#</span> of the <span className="text-blue-500">past 5 years</span>.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="flex justify-center mb-[45vh]">
          <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
        </motion.div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter five - Web Development</h3>
          <p id="typedtext" className="text-white text-xl">
            <br /><br />After deciding to learn new languages, I immediately jumped into <span className="text-yellow-400">JavaScript</span> and web development. I always admired the amazing websites I encountered and wanted to create them myself. Later, I also learned <span className="text-yellow-400">TypeScript</span>, <span className="text-yellow-400">HTML</span> and <span className="text-yellow-400">CSS</span>, and decided that front-end web development would be my primary focus when searching for a job. I will hopefully graduate from high school in <span className="text-blue-500">2025</span>. I’ll also attended university and get a degree in IT. I’ll then also get a Master's degree and begin searching for a job.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="flex justify-center mb-[45vh]">
          <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
        </motion.div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter six - Trying to be productive</h3>
          <p id="typedtext" className="text-white text-xl mb-[35vh]">
            <br /><br />Recently, I've become fascinated by the idea that focusing on one thing at a time allows you to accomplish almost anything. Initially, I didn’t think much of it, but when I tried to apply it, I noticed it wasn’t really working. Only later did I realize I had been approaching it from the wrong perspective. I would start working, but after a few minutes, I’d get overwhelmed. However, I came to see that at least I was starting, which was a huge improvement over my earlier habit of not starting at all.
            I also love the saying that to be more productive, you need to break your tasks down into smaller, manageable pieces. Although I haven't successfully applied these techniques yet, I believe that doing so could almost double my productivity. The main challenge has been that I often struggle to come up with ideas, which is part of why I'm interested in freelancing as a side hustle. If I had specific tasks to work on with some direction, I’d be much more motivated and ready to complete them. So, if you're a company or individual looking to hire a frontend or app developer, I’d love to help.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }} className="flex justify-center mb-[45vh]">
          <img id="arrowimg" src={arrowsvg} className="text-white w-20 h-20"></img>
        </motion.div>
        <div className="z-10 bg-[rgba(14,16,17,1)] flex flex-col align-top items-center max-w-[70vw] p-5">
          <h3 id="subtitle" className="text-sky-600">Chapter seven - My learning advices</h3>
          <p id="typedtext" className="text-white text-xl mb-[35vh]">
            <br /><br />
            My whole learning process was 90% based on practice.
            I wouldn't necessarily recommend it, because I feel like it's a very personal decision to go for a practice- or theory-based learning process. So, if you would like to start coding just do what you feel, or even try both. Most of the time, the best is found in the middle.
            The most important advice tho, in my opinion, is to not code for too long in one go. Try to distribute the work time, otherwise you will get overwhelmed and learning will become much more difficult.
          </p>
        </div>
      </div>
    </div>
  );
}