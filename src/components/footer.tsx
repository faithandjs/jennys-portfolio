import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

import CustomMenu from "./menu";

import banner from "../assets/rental-poster.webp"; 
import { usePathname,  } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  const socials: Record<string, string> = {
    instagram: "",
    tiktok: "",
    facebook: "",
    youtube: "",
  };

  return (
    <footer className="h-[55vh]  min-h-[420px] md:flex grid child:w-full md:child:w-[50%] text-white">
      <div className="bg-main  pl-10 py-12 lg:pl-24 lg:pt-24 lg:pb-16 flex flex-col order-last md:order-first">
        <div className="grid lg:gap-24 gap-10 grid-cols-1 sm:grid-cols-2">
          {[
            ...(pathname === "/"
              ? [
                  {
                    title: "Navigation",
                    items: ["gallery", "locations", "testimony", "FAQ"],
                  },
                ]
              : []),
            {
              title: "Social",
              items: ["instagram", "tiktok", "facebook", "youtube"],
            },
          ].map(({ items, title }, key) => {
            return (
              <div key={key}>
                <h2 className="lg:text-4xl text-2xl sm:pb-8 pb-5 font-semibold">
                  {title}
                </h2>
                <ul className={`${pathname === "/"?'':'grid grid-cols-2 md:grid-cols-1'}`}>
                  {items.map((li, id) => (
                    <li
                      key={id}
                      className="capitalize lg:text-2xl text-lg font-medium  pb-2"
                    >
                      <a
                        href={title === "Navigation" ? `#${li}` : socials[li]}
                        className="hover:cursor-pointer hover:text-[#dededee6]  pb-2"
                      >
                        {li}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="md:mt-auto mt-12">
          <button
            className="flex items-center gap-1 bg-white bg-opacity-15 px-3 py-1 rounded-3xl font-semibold"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
              });
            }}
          >
            <IoMdArrowRoundUp />
            Back to Top
          </button>
        </div>
      </div>

      <div className="banner h-[420px] md:h-auto">
        <Image src={banner} alt="" className="w-full h-full object-cover  " />
        <div className="absolute bottom-9 left-8 child:text-white z-10 max-w-[700px] ">
          <div className="pb-3">
            <h4 className="text-xl">Ready to relax at</h4>
            <h1 className="lg:text-6xl text-4xl font-bold pb-2">
              Zico Apartments?
            </h1>
          </div>
          <CustomMenu position="right" />
        </div>
      </div>
    </footer>
  );
}
