import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react'



import "../styles/meridian.css";
import "../styles/global.css";
import milogo from "../assets/milogo.png"
import mlogo from "../assets/Meridian.png"
import testImg from "../assets/mainPageTextClip.jpg"
import coffee from "../assets/coffee.jpg"
import friend from "../assets/friend.jpg"
import webscout from "../assets/webscout.png"
import mai from "../assets/MeridianAI.png"
import matrix from "../assets/matrix.png"


export default function Meridian() {

  useEffect(() => {
    async () => {
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
    }

    console.log("Page loaded.");
  });

  const features = [
    "Meridian-AI",
    "Instant web accurate results",
    "Task scheduling and automation",
    "Process Management",
    "Built-in anti-malware scan",
    "Personal devices Interconnection",
    "Files and strings encryption",
    "Translator and string manipulation",
    "Language detection",
    "Triggered actions",
    "Network management",
    "Customizable settings",
    "O.C.R.",
    "Resources monitoring",
    "Context awareness",
    "Behavioral adaptation",
    "Conversational optimization",
    "Notification to devices",
    "File manipulation",
    "Advanced CLI tools",
    "String correction",
    "Device settings management",
    "Describe documents",
    "Describe images",
    "Tell facts and jokes",
    "Play minigames",
    "Advanced IRL calculations (BMI,BAC)",
    "Machine optimization",
    "Encryption of files and strings",
    "Password manipulation",
    "AI text manipulation",
    "Multiple LLM selection",
    "Hidden eastereggs",
  ]

  const cardsHF = [
    {
      id: 1,
      title: 'Meridian-AI',
      subtitle: 'Meet the core of MeridianNEXT.',
      image: mai,
      content: 'Meridian-AI is the core of MeridianNEXT. It is fully optimized (prompts, tools) and support web queries. You can\'t go wrong with him.'
    },
    {
      id: 2,
      title: 'Web scouting',
      subtitle: 'Accurate & super-fast answers, anonymously.',
      image: webscout,
      content: 'Ever dreamt of a custom search engine that can give you very accurate answers (and only that) in literally (on average) less than 2s and with anonymous searching?\nNo ads, nothing you don\'t need. No need to scroll and look many website to find the right answer. An average google search with an average internet connection requires 40s. Here in 2s (average), you will have your way more accurate answer.'
    },
    {
      id: 3,
      title: 'Super Tools',
      subtitle: 'Super powerful CLI tools.',
      image: matrix,
      content: 'All the super powerful tools wrapped in one terminal app. In MKII, a GUI will also be added.'
    },
  ]

  type Card = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
  };

  const cards = [
    {
      id: 1,
      title: 'Productivity',
      subtitle: 'Enhance your productivity',
      image: coffee,
      content: 'The Meridian product line is designed to enhance your productivity with very dristraction-free tools.'
    },
    {
      id: 2,
      title: 'Powerful',
      subtitle: 'Have more control with our powerful tools.',
      image: testImg,
      content: 'Our powerful tools can help you perform operation on your machine that you probably would have struggled with..'
    },
    {
      id: 3,
      title: 'Friendly friend',
      subtitle: 'Make Meridian your friend.',
      image: friend,
      content: 'Be friendly to him and you will build a good and loyal friend that will always help you and know about you.'
    },
    {
      id: 4,
      title: 'Launch soon',
      subtitle: 'We are launching Meridian soon.',
      image: mlogo,
      content: 'Get ready for the Meridian product line launch very soon.'
    },
  ]


  const [selectedCard, setSelectedCard] = useState<Card | null>(null);


  return (
    <div className="flex flex-col align-top">
      <input type="text" className="absolute hidden" id="pageName" value={"meridian"} readOnly></input>
      <div id="heroSection" style={{ width: "100vw", height: "100vh" }} className="flex flex-col items-center align-middle text-white">
        <div className="flex w-[100vw] h-[auto] justify-center mt-[15vh]">
          <h1 id="title1" className="text-8xl font-[Futura]">Meridian</h1>
          <h1 className="text-8xl font-[K2D] bg-gradient-to-r from-[#006EFF] via-[#00A8E2] to-[#00FFB7] inline-block text-transparent bg-clip-text">NEXT</h1>
        </div>
        <div className="flex">
          <div className="absolute ml-10 inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute ml-10 inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <div className="flex items-center">
          <img src={milogo} className="w-[50vw] h-auto bg-transparent -ml-5"></img>
          <h1 id="mki" className="text-4xl -ml-5">MKI</h1>
        </div>
        <div className="flex flex-col items-center mt-10 z-20">
          <h1 id="catchPhrase" className="text-5xl font-[Poppins]">More than your average virtual assistant</h1>
          <div className="flex w-[100vw] justify-center items-center mt-10">
            <img src={mlogo} className="w-[20vw] h-[20vw] bg-transparent"></img>
            <img src={mai} className="w-[21vw] h-auto bg-transparent"></img>
          </div>
        </div>
      </div>


      <div style={{ width: "100vw", height: "auto" }} className="flex flex-col items-center text-white bg-gradient-to-b from-[#0C338C] to-[#00AF92]">
        <div className="mb-10">
          <h1 className="text-5xl font-[Poppins]">
            <span className="text-[#006EFF] font-[K2D] text-6xl">N</span>
            atural&nbsp;
            <span className="text-[#00A8E2] font-[K2D] text-6xl">E</span>
            ngagement&nbsp;
            <span className="text-[#00FFB7] font-[K2D] text-6xl">X</span>
            ecution&nbsp;
            <span className="text-[#00FFB7] font-[K2D] text-6xl">T</span>
            ecnologies
          </h1>
        </div>
        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} viewport={{ amount: 0.8 }}>
          <div id="sectionDivFirst" className="backdrop-blur-md rounded-xl bg-white/5">
            <div className="text-center flex flex-col">
              <h2 className="text-3xl">Welcome to Project <span id="futuraf">Meridian MKI</span></h2>
              <p className="text-md text-gray-400 mb-2 w-[100%]">where "virtual assistant" takes on a completely different meaning.
              </p>
            </div>
            <p className="pl-[120px]">
              <span className="text-purple-400">&gt;</span> Release date: <span className="text-orange-400 ">TBD</span><br />
              <span className="text-purple-400">&gt;</span> Estimated release date: <span className="text-orange-400 ">13/07/2025</span><br />
              <span className="text-purple-400">&gt;</span> Devopment time: <span className="text-orange-400 ">25th July 2024 -&gt; TBD</span><br />
              <span className="text-purple-400">&gt;</span> Languages used: <span className="text-orange-400 ">Python</span>
              <span className="text-white">,</span>
              <span className="text-orange-400"> C</span>
              <span className="text-white">,</span>
              <span className="text-orange-400"> C++</span>
              <br />
              <span className="text-purple-400">&gt;</span> Open-Source: <span className="text-orange-400 ">Not yet</span><br />
              <span className="text-purple-400">&gt;</span> "Pro" price: <span className="text-orange-400 ">TBD</span><br />
            </p>
          </div>
        </motion.div>
        <div id="sectionContainer" className="flex flex-col items-center h-[auto] mb-20">
          <div className="flex gap-5 mb-10">
            <div id='downloadbtncontainer'>
              <div className='flex justify-start pt-2'>
                <div className='w-fit'>
                  <Link to="tutorial" className="cursor-context-menu" >
                    <div className="downloadbtn_div">
                      <motion.button id="btnlink" className="w-[250px] h-[52px] bg-transparent border-2 border-gray-300/50 rounded-[10px] text-white
                         font-bold hover:bg-orange-500 hover:text-[#081b29] text-lg font-[Montserrat] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex justify-center items-center'>
                          <p className="-ml-5">Get Started</p>
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
                  <Link to="docs" className="cursor-context-menu">
                    <div className="downloadbtn_div">
                      <motion.button className="w-[250px] h-[52px] bg-transparent border-2 border-gray-300/50 rounded-[10px] text-white
                         font-bold hover:bg-orange-500 hover:text-[#081b29] text-lg font-[Montserrat] transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <div className='flex flex-col justify-left -ml-5'>
                          <p>Docs</p>
                        </div>
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="sectionDiv">
            <h2 className="text-center text-3xl">What is it?</h2>
            <p className="max-w-[50vw]">
              <span id="futuraf">Meridian MKI</span> is a project designed to be the Final-Level virtual assistant for macOS, Windows and maybe even iOS.<br />
              It fuses every useful feature that a virtual assistant could have and also bundles even rarer features usually only available with third party software.<br />
              It basically is a mix of useful tools. It can be useful for everybody, from developers to designers to software enthusiast.<br />
              I also made up a company name: "<span id="futuraf">Meridian Industries</span>" that might actually become reality one day.<br />
              I designed <span id="futuraf">Meridian</span>'s and <span id="futuraf">Meridian Industries</span>' logos myself.
            </p>
          </div>
          <div id="sectionDiv">
            <h2 className="text-center text-3xl">Why?</h2>
            <p className="max-w-[50vw]">
              This project has been created mainly for myself (Luca Montanari), to make my life easier and learn Python in the meantime.<br />
              But making this public sounds good to me, maybe other people can find this useful too.<br />
              I took inspiration from Iron-Man's Jarvis and other real virtual assistants.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#00AF92] to-emerald-800 text-white p-8 w-[100vw] h-[auto]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            We can't list every feature, they are <span className="underline">too many</span>.
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12">But here are some...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 border-[0.5px] border-white/30 rounded-full py-3 px-6 text-center flex items-center justify-center h-full"
              >
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="">
        <div className="relative min-h-screen bg-gradient-to-b from-emerald-800 to-cyan-400 text-white p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Highligh features</h1>
          <div className="flex justify-center overflow-x-auto space-x-4 pb-8 pt-8 snap-x snap-mandatory">
            {cardsHF.map((card) => (
              <motion.div
                key={card.id}
                className="flex-shrink-0 w-72 snap-center"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCard({ ...card, src: card.image, category: 'default' })}
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border-[1px] border-white/30">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-2xl font-bold mt-2">{card.subtitle}</p>
                  </div>
                  <div className="absolute top-0 left-0 p-6">
                    <h3 className="text-lg font-semibold">#{card.id}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-20">Benefits & Extras</h1>
          <div className="flex justify-center overflow-x-auto space-x-4 pb-8 pt-8 snap-x snap-mandatory">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="flex-shrink-0 w-72 snap-center"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCard({ ...card, src: card.image, category: 'default' })}
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-2xl font-bold mt-2">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedCard && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900 rounded-3xl p-8 max-w-2xl w-full relative"
                >
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                  >
                    <X size={24} />
                  </button>
                  <h2 className="text-3xl font-bold mb-4">{selectedCard.title}</h2>
                  <p className="text-gray-300">{selectedCard.content}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div >
  );
}