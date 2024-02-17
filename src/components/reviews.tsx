import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Carousel } from "@mantine/carousel";

import Heading from "./heading";

import g1 from "../assets/guest-1.webp";
import g2 from "../assets/guest-2.webp";
import g3 from "../assets/guest-3.webp";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      text: "Magical stay! Luxurious Forest Haven's blend of comfort and untamed nature provided an unforgettable escape. Our family felt rejuvenated, and our dog had a blast exploring the trails and pet-friendly amenities",
      name: "Jane Doe",
      title: "guest",
      img: g1,
    },
    {
      text: "Dream come true for pet owners. Luxurious Forest Haven's dedicated pet play area and proximity to pet-friendly trails created a true pet paradise. Our dogs were in their element.",
      name: "Jane Doe",
      title: "guest",
      img: g2,
    },
    {
      text: "Nature escape with nearby attractions. Luxurious Forest Haven's immersive forest setting and rejuvenating spa treatments made for an unforgettable experience.",
      name: "John Doe",
      title: "guest",
      img: g3,
    },
    {
      text: "Nature escape with nearby attractions. Luxurious Forest Haven's immersive forest setting and rejuvenating spa treatments made for an unforgettable experience.",
      name: "John Doyin",
      title: "guest",
      img: g1,
    },
  ];
  return (
    <section id="testimony">
      <div>
        <Heading
          head="What our guest said"
          text="Discover what our guests have to say about their Luxurious Forest Haven experience"
        />
        <div className="bg-[#f9f9f9] rounded-2xl">
          {/* <div className='h-[170px] w-full'></div> */}

          <div className="relative w-full  ">
            <Carousel
              height={500}
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
              nextControlIcon={<IoIosArrowForward size={30} />}
              previousControlIcon={<IoIosArrowBack size={30} />}
              className="pb-48 h-full"
              classNames={{
                control: "!w-[50px] !h-[50px] lg:text-ink transition-all duration-100 z-10 rounded-full flex justify-center items-center",
                controls: "sm:text-black  sm:cursor-pointer",
              }}
            >
              {reviews.map(({ img, name, text, title }, key) => {
                return (
                  <Carousel.Slide key={key}>
                    <div className="flex gap-3 justify-center items-end relative guest h-full w-full">
                      <div className="absolute bottom-20 left-16 w-[60%]">
                        <p className="review">{text}</p>
                      </div>
                      <div>
                        <Image
                          src={img}
                          alt={name}
                          className="w-20 h-20 rounded-full border border-gray-200"
                        />
                      </div>
                      <div>
                        <p>{name}</p>
                        <p>{title}</p>
                      </div>
                    </div>
                  </Carousel.Slide>
                );
              })}
            </Carousel>

            {/* <div className='flex justify-center items-center gap-3 carousel-btn-container py-10'>
              <button >
                <IoIosArrowBack  size={30} />
              </button>
              <button >
                <IoIosArrowForward  size={30} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
