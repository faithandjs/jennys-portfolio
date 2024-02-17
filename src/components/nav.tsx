import React, { useEffect } from 'react'; 
import { usePathname,  } from "next/navigation";

import CustomMenu from './menu';

export default function Nav() {
  const { gsap } = require('gsap/dist/gsap')
  const { ScrollTrigger } = require('gsap/dist/ScrollTrigger')
  const  pathname  = usePathname();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // if (pathname === '/gallery') {
    //   gsap.set('nav', {
    //     backgroundColor: '#fff',
    //     color: '#555555',
    //     borderBottom: '1px solid #e9e9e99c',
    //     position: 'relative',
    //   });
    // } else {
    gsap.to('nav', {
      backgroundColor: '#fff',
      color: '#555555',
      borderBottom: '1px solid #e9e9e99c',
      delay: 0.6,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.banner--text',
        start: 'top',
        // end: 0.5,
        scrub: true,
      },
    });
    // }
  }, []);

  return (
    <nav className='fixed top-0 w-full text-white flex justify-between items-center py-3  md:py-4 md:px-10 px-5 z-50 '>
      <div className='flex lg:gap-10 gap-4 items-baseline font-bold '>
        <h2 className='text-lg'>
          <a href='/' className='logo'>
            Zico Apartments
          </a>
        </h2>

        {[
          'listings',
          // ...(pathname == '/' ? [ ] : []),
          'gallery',
          'locations',
          'testimony',
          'FAQ',
        ].map((item, id) => (
          <a
            href={id === 0 ? item : `#${item}`}
            className={`capitalize    ${
              pathname === '/listings'
                ? 'hidden'
                : item === 'listings'
                ? ''
                : 'hidden md:block '
            } `}
            key={id}>
            {item}
          </a>
        ))}
      </div>
      <div></div>
      <CustomMenu />
    </nav>
  );
}

