import Image from 'next/image'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import { getOverview } from '~/lib/sanity.queries'

import banner from '~/assets/samuel-arkwright-Z3tajiPtiUg-unsplash.jpg'
import Projects from '~/components/Projects'
import Summary from '~/components/Summary'

export default function IndexPage() {
  const { gsap } = require('gsap/dist/gsap')
  const { TextPlugin } = require('gsap/dist/TextPlugin')
  gsap.registerPlugin(TextPlugin)

  const [data, setData] = useState({} as Record<string, string | any>)

  const fetchingOverview = async () => {
    const data = await getOverview()
    if (data) setData(data[0])
  }

  useEffect(() => {
    if (Object.values(data).length === 0) {
      fetchingOverview()
    } else {
      var textWrapper = document.querySelector('.banner-text')
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>",
      )

      const tl = gsap.timeline()
      tl.staggerFrom(
        '.banner-text .letter',
        1.5,
        {
          opacity: 0,
          ease: 'Power4.easeInOut',
        },
        0.15,
        0.2,
      )
      // gsap.to('.banner-text', {
      //   duration: 5,
      //   repeat: -1,
      //   text: { value: data.bannertext, delimiter: '' },
      //   repeatDelay: 10,
      // })
    }

    // eslint-disable-next-line
  }, [data])
  {
    /* {data.bannertext} */
  }
  return (
    <div>
      <header className=" border-b border-[#ced2d9] z-10  left-0  ">
        <div className=" text-sm sm:px-6 sm:pt-4 p-4 md:my-3 grid gap-1 absolute top-0 left-0 z-10  name">
          <span className="font-extrabold sm:text-2xl">Jennifer Chinabu</span>
          <span className="font-medium sm:text-lg">Data Scientist</span>
        </div>
        <span className="md:text-2xl lowercase text-base text-center px-2 my-3 grid gap-2 absolute top-[20%] left-1/2 translate-x-[-50%] z-10 w-full banner-text "></span>
        <div className="w-screen md:h-[60vh] h-[50vh] relative ">
          <Image
            className="w-full h-full object-cover object-center brightness-95"
            src={banner}
            alt="a cluster of penguis in a marshy area"
          />
        </div>
      </header>
      <main className="bg-white pb-24">
        <Summary data={data} />
        <Projects />
      </main>
      <footer className="bg-main text-[#e1e1e1] h-24 flex justify-center items-center  ">
        <span>© Jennifer Chinabu. All rights reserved.</span>{' '}
      </footer>
    </div>
  )
}
