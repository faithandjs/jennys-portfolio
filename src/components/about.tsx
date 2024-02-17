import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Modal } from '@mantine/core';

import owner from '../assets/owner.webp';
import Image from 'next/image';

export default function About() {
  const [modal, setModal] = useState(false);

  return (
    <div className='z-20 relative'>
      <button
        className='fixed bottom-8 right-7 about md:w-32 md:h-36  w-24 h-24 z-50 transition duration-200 '
        onClick={() => {
          setModal((p) => !p);
        }}>
        <div className='top  flex justify-center items-center pl-3 overflow-hidden  rounded-r-md rounded-l-sm transition duration-200 z-10'>
          <div className='side absolute left-0 top-0 w-4 h-full bg-[#bdb293] z-30'></div>
          {/* <div className='side1 absolute left-0 top-0 w-1 h-full bg-[#bdb293] z-30'></div>
          <div className='side2 absolute left-1 top-0 w-3 h-full bg-[#bdb293] z-30'></div> */}
          <div className='rounded-full md:w-16 md:h-16 w-12 h-12 border-2 border-[#bdb293] overflow-hidden flex justify-center items-center  '>
            <Image src={owner} alt='' className='object-center' />
          </div>
        </div>
        <div className='mid  -translate-y-1/2 shadow-sm'></div>
        <div className='bottom  rounded-sm -translate-y-1/2'></div>
      </button>
      <Modal
        opened={modal}
        onClose={() => {
          setModal(false);
        }}
        title='Host Detail'
        closeOnClickOutside
        closeOnEscape
        closeButtonProps={{
          icon: <IoClose size={20} />,
        }}
        centered
        classNames={{
          content: 'sm:p-6 !pt-0 px-5 ',
          inner: '!px-1 md:!px-4',
        }}
        styles={{
          content: {
            borderRadius: '1.5rem',
            minHeight: 'unset',
            height: 'max-content',
          },
          body: {
            padding: '3rem 0 .5rem',
          },
          header: {
            borderBottom: '1px solid #e6e6e6',
            padding: '1rem 0 ',
          },
          title: { fontSize: '1.6rem', fontWeight: '500' },
          close: {
            border: '2px solid black',
            borderRadius: '50%',
            color: 'black',
            fontWeight: 'bold',
            outline: 0,
          },
        }}>
        <div></div>
        <div className='grid gap-4'>
          <div className='flex gap-5 items-center'>
            <div className='rounded-full w-24 h-24 overflow-hidden   '>
              <Image src={owner} alt='' className='object-bottom' />
            </div>
            <div>
              <p className='font-medium text-3xl'>Jane Doe</p>
              <p className='text-ink'>5+ years hosting</p>
            </div>
          </div>
          <div className='grid gap-4'>
            {[
              "Hey there, I'm Jane!",
              'A nature-loving adventurer and your host here at the Forest Haven.',
              "With a background in hospitality, I've turned my passion for travel into creating delightful experiences for you. ",
              "I'm here to make your journey extraordinary. Looking forward to being your host and friend in this captivating journey!",
            ].map((item, key) => (
              <p key={key}>{item}</p>
            ))}
          </div>
          <div className='font-medium pt-2'>
            <h4 className='text-2xl pb-2 pt-4'>Contact</h4>
            <div>
              {[
                { name: 'Phone', link: '' },
                { name: 'Email', link: '' },
                { name: 'Instagram', link: '' },
                { name: 'Youtube', link: '' },
              ].map((item, key) => (
                <a href={item.link} className='block text-lg' key={key}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

