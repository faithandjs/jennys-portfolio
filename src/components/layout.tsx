import React, { useEffect } from 'react' 

import Nav from './nav'
import Footer from './footer'
import About from './about'

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // gsap.set('.app', {
    //   duration: 1.2,
    //   ease: 'power1.out',
    //   opacity: 100,
    // });
  }, [])
  {
    /* <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration }}
  className={className}>
  {children}
</motion.div>; */
  }
  return (
    <div className="app">
      <Nav />
      <main>
        <>
          {children} <About />
        </>
      </main>
      <Footer />
    </div>
  )
}
