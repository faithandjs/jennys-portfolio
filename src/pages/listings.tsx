import React, { useState } from 'react';

import CustomMenu from '../components/menu';

import banner from '../assets/rental-poster.webp';
import amb2 from '../assets/ambience-2.jpeg';
import amb1 from '../assets/ambience-1.jpeg';
import { Carousel } from '@mantine/carousel';
import { Paper } from '@mantine/core';

import Booking from '../components/booking';
import Image from 'next/image';
import Layout from '~/components/layout';

export default function Listings() {
  const [unit, setUnit] = useState(0);
  const [modal, setModal] = useState(false);
  return (
    <div id='listings'>
      <div className=' h-[60vh]  min-h-[400px] relative banner'>
        <Image src={banner} alt='' className='w-full h-full object-cover  ' />
        <div className='absolute bottom-9 !left-0  w-full  pr-6 lg:left-80 child:text-white z-10 banner--text flex flex-col items-center  '>
          <h1 className='md:text-6xl text-4xl font-bold pb-2'>Listings</h1>
          <h4 className='md:text-md'>PRIVATE ISLAND RESORT IN EASTERN FIJI</h4>
        </div>
      </div>
      <section className='md:py-32 py-12 px-5 md:px-10 xl:px-20 max-w-[1500px] flex flex-col mx-auto  '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16'>
          {[
            {
              location:
                '11B Akeem Adetoro Street, Brains and Hammers City Estate, Lifecamp Abuja',
              imgs: [amb2, amb1],
              google:
                'https://www.google.com/maps/search/11B+Akeem+Adetoro+Street,+Brains+and+Hammers+City+Estate,+Lifecamp+Abuja/@9.0728605,7.375784,14z/data=!3m1!4b1?entry=ttu',
            },
            {
              location:
                '11B Akeem Adetoro Street, Brains and Hammers City Estate, Lifecamp Abuja',
              imgs: [amb2, amb1],
            },
            {
              location:
                '11B Akeem Adetoro Street, Brains and Hammers City Estate, Lifecamp Abuja',
              imgs: [amb2, amb1],
            },
            {
              location:
                '11B Akeem Adetoro Street, Brains and Hammers City Estate, Lifecamp Abuja',
              imgs: [amb2, amb1, amb2],
            },
            {
              location: '21 Daniel Gemana Close 7th Avenue Gwarinpa',
              imgs: [amb2, amb2],
            },
            {
              location: '21 Daniel Gemana Close 7th Avenue Gwarinpa',
              imgs: [amb2, amb2],
            },
            {
              location: '21 Daniel Gemana Close 7th Avenue Gwarinpa',
              imgs: [amb2, amb2],
            },
            {
              location: '21 Daniel Gemana Close 7th Avenue Gwarinpa',
              imgs: [amb2, amb2],
            },
            {
              location: '21 Daniel Gemana Close 7th Avenue Gwarinpa',
              imgs: [amb2, amb2],
            },
          ].map(({ imgs, location }, key) => (
            <div className='grid ' key={key}>
              <Carousel
                height={400}
                slideSize={{ base: '100%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align='start'
                classNames={{
                  control:
                    '  !opacity-25 hover:!opacity-85 !transition-all !duration-200 !ease-in-out',
                }}>
                {imgs.map((img, id) => (
                  <Image src={img} alt='' key={id} />
                ))}
              </Carousel>
              <Paper shadow='xs' p='xl'>
                <div className='flex justify-between items-center pb-4'>
                  <h4 className='sm:text-2xl text-xl  font-medium'>
                    Unit {key + 1}
                  </h4>
                  <button
                    className='btn'
                    onClick={() => {
                      setUnit(key + 1);
                      setModal(true);
                    }}>
                    Book Unit
                    {/* <span className='hidden opacity-0 '>{key + 1}</span> */}
                  </button>
                </div>
                <p className='text-ink text-sm'>{location}</p>
              </Paper>
            </div>
          ))}
        </div>
      </section>
      <div className=' flex flex-col items-center m-auto  bg-[#e7e3cf]  '>
        <div className='flex w-full  justify-center lg:justify-between items-center max-w-[1500px] md:py-32 py-12 px-5 md:px-10 xl:px-20 relative'>
          <div className='lg:pb-56  absolute lg:static top-0 left-0 hidden sm:block  '>
            <Image src={amb2} alt='' className='md:w-48 md:h-56 w-32 ' />
          </div>
          <div className='flex flex-col gap-4 items-center z-10 px-8'>
            <p className='md:text-md'>EXPERIENCE WHAT YOU'VE ALWAYS WANTED</p>
            <p className='md:text-5xl text-3xl font-semibold pb-2 max-w-[700px]'>
              LET’S HAVE YOU HERE AND ENJOY THE FUN
            </p>
            <CustomMenu   />
          </div>
          <div className='lg:pt-56 absolute lg:static bottom-0 right-0  hidden sm:block  '>
            <Image src={amb2} alt='' className='md:w-48 md:h-56 w-32 ' />
          </div>
        </div>
      </div>

      <Booking
        close={() => {
          setModal(false);
        }}
        open={modal}
        unit={unit}
      />
    </div>
  );
}

Listings.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};