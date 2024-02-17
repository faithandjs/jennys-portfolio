import React, { useState } from 'react';
import { Menu } from '@mantine/core';
import { IoIosArrowDown } from 'react-icons/io';

import airbnb from '../assets/airbnb.png';
import stripe from '../assets/stripe.png';
import whatsapp from '../assets/whatsapp.png';
import Booking from './booking';
import Image from 'next/image';

export default function CustomMenu({
  position = 'bottom',
}: {
  position?: 'bottom' | 'right' ;
}) {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className='relative'>
      <Menu
        shadow='md'
        opened={menu}
        onChange={setMenu}
        position={position !== 'right' ? position: 'right-end'}
        
        >
        <Menu.Target>
          <button className=' w-max flex items-center gap-3 md:px-4 md:py-3 py-2 px-3 sm:text-lg font-medium bg-[#000] menu-button rounded-xl overflow-hidden border shadow transition-all duration-200 after:transition-all after:duration-200 after:-z-10 lg:z-50 '>
            Book Now
            <IoIosArrowDown
              className={`hidden sm:inline-block transition-all duration-200 ${
                position === 'bottom'
                  ? ` ${menu ? 'rotate-180' : 'rotate-0'}`
                  : ` ${menu ? 'rotate-90' : '-rotate-90'}`
              }`}
            />
          </button>
        </Menu.Target>

        <Menu.Dropdown className='!px-2 !py-2 !rounded-xl'>
          {[
            {
              via: 'WhatsApp',
              action: () => {},
              icon: whatsapp,
            },
            // {
            //   via: 'Airbnb',
            //   action: () => {},
            //   icon: airbnb,
            // },
            // {
            //   via: 'Paystack',
            //   action: () => {},
            //   icon: whatsapp,
            // },
            // {
            //   via: 'Stripe',
            //   action: () => {},
            //   icon: stripe,
            // },
          ].map(({ action, icon, via }, key) => (
            <Menu.Item
              className='child:border-b child:last:border-b-0 child:border-b-gray-200 child:flex child:items-center child:gap-2 child:p-2 !p-0 sm:!text-lg !text-[#555555] font-medium'
              key={key}
              onClick={() => {
                setModal(true);
              }}>
              <Image src={icon} className='md:w-6 md:h-6 w-5 h-5 ' alt={via } />
              Via {via}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>{' '}
      <Booking
        close={() => {
          setModal(false);
        }}
        open={modal}
      />
    </div>
  );
}

