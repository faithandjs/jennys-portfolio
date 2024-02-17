import React from 'react';

import forest from '../assets/forest.webp';
import pets from '../assets/pets.webp';
import view from '../assets/view.webp';
import Heading from './heading';
import Image from 'next/image';

export default function WhyUs() {
  return (
    <section id='why-us'>
      <div className='w-full'>
        <Heading
          head='Why book our stay?'
          text='The Luxurious Forest Haven stands as a peerless destination for a variety of reasons'
        />
        <div className='grid md:grid-cols-3 gap-4'>
          {[
            {
              title: 'Place to Relax',
              text: 'Immerse yourself in the unspoiled beauty of the forest without sacrificing the luxuries and conveniences of a high-end retreat.',
              image: forest,
              alt: '',
            },
            {
              title: 'Pet Friendly',
              text: 'Your are warmly welcomed, with amenities and spaces designed to cater to their comfort and enjoyment.',
              image: pets,
              alt: '',
            },
            {
              title: 'Sustainable Luxury',
              text: `Experience opulence with a conscience as the property's design seamlessly integrates eco-friendly features and practices.`,
              image: view,
              alt: '',
            },
          ].map(({ alt, image, text, title }, key) => {
            return (
              <div key={key}>
                <Image src={image} alt={alt} className='w-full h-[380px]' />
                <div className='pt-5'>
                  <h3 className='sm:text-4xl text-2xl pb-3 font-medium'>
                    {title}
                  </h3>
                  <p className='text-ink'>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

