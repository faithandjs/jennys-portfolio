import React from 'react'
import banner from '../assets/rental-poster.webp'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className="md:h-[80vh] h-[85vh] min-h-[400px] banner">
      <Image src={banner} alt="" className="w-full h-full object-cover  " />
      <div className="absolute bottom-9 left-6 pr-6 lg:left-80 child:text-white z-10 lg:max-w-[700px] banner--text ">
        <h1 className="md:text-6xl text-4xl font-bold pb-2">
          Rejuvenate in Luxurious Zico Apartments
        </h1>
        <h4>
          Welcome to the Luxurious Zico Apartments, an opulent retreat where the
          allure of the wilderness meets lavish comfort. Immerse yourself in the
          embrace of nature while indulging in the finest amenities and elegant
          interiors, ensuring a getaway that redefines relaxation.
        </h4>
      </div>
    </div>
  )
}

//  max-h-[700px] md:max-h-none lg:max-h-[900px]
