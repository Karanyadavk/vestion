"use client"

import { dmSans, interSans } from "@/fonts/fonts";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export const FAQ = [
    {
        title: "What is VES Token?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
    {
        title: "What  are VES  Token's Token Economics?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
    {
        title: "Why was a presale launched?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
    {
        title: "Why should you purchase VES Token rapidly during the presale?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
    {
        title: "How, where, and when can you claim tokens after the presale?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
    {
        title: "What exactly is VES staking, and when can you use it?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
    {
        title: "What is the combustion model and why do we Burn VES Token?",
        description: "Vestion is, an innovative Ethereum-based token bridging the worlds of cryptocurrency and traditional investments. At Vestion, we believe in the power of blockchain technology to revolutionize the way investments are made and managed, creating opportunities for individuals and institutions alike to access a diverse range of assets and opportunities.",
    },
]

export const Faqs = () => {
  const [openIndexes, setOpenIndexes] = useState(Array(FAQ.length).fill(false));

  const toggleAccordion = (index:number) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index];
    setOpenIndexes(newOpenIndexes);
  };

  return (
    <div className="px-8 md:px-28 md:py-20 w-full min-h-screen bg-[#1D1D1D] text-white">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className={`${interSans.className} font-medium text-base text-[#E4B325]`}>FAQ</h1>
        <h2 className={`${dmSans.className} font-normal text-3xl w-[50%] leading-8`}>Frequently Asked Questions</h2>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mt-12">
        {FAQ.length > 0 &&
          FAQ.map((item, index) => (
            <div key={index} className="border-gray-800 bg-[#232323] rounded-lg flex items-center flex-col">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 md:px-10 md:py-5 text-white"
              >
                <div className="flex justify-center items-center gap-2 md:gap-8">
                  <span className={`text-base md:text-[1.5vw] ${interSans.className} font-normal ${openIndexes[index] ? "text-[#E4B325]" : "text-white"}`}>{item.title}</span>
                </div>
                <span
                  className={`text-[#E4B325] transition-transform duration-300 ${
                    openIndexes[index] ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight />
                </span>
              </button>
              <div className={`pb-8 px-10 flex flex-col ${interSans.className} rounded-lg text-base font-normal bg-[#232323] gap-4 text-white ${openIndexes[index] ? "block" : "hidden"}`}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
