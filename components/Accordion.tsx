import React, { useState } from "react";
import Image from "next/image";

type AccordionProps = {
    title: string,
    answer: string
}

const Accordion = ({ title, answer }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" px-4 py-6 rounded-xl bg-white m-1">
      <button className="flex justify-between w-full"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className=" font-semibold">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className=" fill-black shrink-0 ml-8 "
          width="16" height="16" xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect y="7" width="16" height="2" rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 mt-2 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-black flex flex-col gap-4">
            {answer}
            <button className=" w-40 p-4 border border-black 
                rounded-xl hover:bg-black hover:text-white hover:duration-300"
            >
                Discover more
            </button>

            <Image src='/Images/homep.png' width={ 400} height={400} alt="logo"
                className=" w-full h-full object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default Accordion;