import React, { useEffect } from 'react';

import amb1 from '../assets/ambience-1.jpeg';
import amb2 from '../assets/ambience-2.jpeg';
import bed1 from '../assets/bedroom-1.jpeg';
import bed2 from '../assets/bedroom-2.jpeg';
import kit1 from '../assets/kitchen-1.webp';
import kit2 from '../assets/kitchen-2.webp';
import kit3 from '../assets/kitchen-3.webp';
import { animateSections } from '../utils';
import Image from 'next/image';

export default function Gallery() {

  useEffect(() => {
    animateSections(".photo-section");
  }, []);

  return (
    <section id='gallery'>
      <div>
        <h3 className='text-4xl font-medium pb-4'>
          <a href='/gallery'>Gallery</a>
        </h3>
        <div className='grid md:gap-40 gap-20'>
          <div className='photo-section'>
            <p className='text-end text-ink font-medium text-xl pb-4'>
              Ambience
            </p>
            <div className='sm:flex grid gap-4'>
              <Image src={amb1} alt='' className='big-image' />
              <Image src={amb2} alt='' className='small-image' />
            </div>
          </div >
          <div  className='photo-section'>
            <p className='text-end text-ink font-medium text-xl pb-4'>
              Bedroom
            </p>
            <div className='sm:flex grid gap-4'>
              <Image src={bed2} alt='' className='small-image' />
              <Image src={bed1} alt='' className='big-image' />
            </div>
          </div>
          <div  className='photo-section'>
            <p className='text-end text-ink font-medium text-xl pb-4'>
              Kitchen
            </p>
            <div className='sm:flex grid gap-4 child:flex-1'>
              <div>
                <Image src={kit1} alt='' className='w-full h-[380px]' />
              </div>
              <div>
                <Image src={kit2} alt='' className='w-full h-[380px]' />
              </div>
              <div className='sm:hidden md:block'>
                <Image src={kit3} alt='' className='w-full h-[380px] ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

