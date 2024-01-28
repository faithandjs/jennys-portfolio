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
      const bannerText = document.querySelectorAll('.banner-text span')
      bannerText.forEach((element) => {
        const textContent = element.textContent || ''
        const replacedText = textContent.replace(
          /([^\x00-\x80]|\w)/g,
          "<span class='_text3'>$&</span>",
        )
        element.innerHTML = replacedText
      })

      const tl = gsap.timeline({ repeat: -1, delay: 1.8 })
      tl.staggerFrom(
        '.banner-text span',
        0.5,
        { alpha: 0, x: 40, ease: 'Power1.easeOut' },
        0.1,
      ).staggerTo(
        '.banner-text span',
        0.5,
        { alpha: 0, x: -40, ease: 'Power1.easeOut ', delay: 15 },
        0.1,
        '+=1.5',
      )
    }

    // eslint-disable-next-line
  }, [data])
  {
    /* {data.bannertext} */
  }

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.banner', {
      duration: 1,
      opacity: 1,
      ease: 'Power4.easeInOut',
    })
      .to('.name', {
        duration: 0.5,
        opacity: 1,
        ease: 'Power4.easeInOut',
      })
      .to('.main', {
        duration: 0.3,
        opacity: 1,
      })

    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <header className="  z-10  left-0  ">
        <div className=" text-sm sm:px-6 sm:pt-4 p-4 md:my-3 grid gap-1 absolute top-0 left-0 z-10  name opacity-0">
          <span className="font-extrabold sm:text-2xl">Jennifer Chinabu</span>
          <span className="font-medium sm:text-lg">Data Scientist</span>
        </div>
        <div className=" absolute top-[20%] left-1/2 translate-x-[-50%] z-10 w-full banner-text text-center">
          <span className="md:text-2xl text-base  px-2 my-3 grid gap-2  ">
            {data.bannertext}
          </span>
        </div>

        <div className="w-screen md:h-[60vh] h-[50vh] relative bg-white ">
          <Image
            className="w-full h-full object-cover sm:object-center object-top brightness-95 banner opacity-0 "
            src={banner}
            alt="a cluster of penguis in a marshy area"
          />
        </div>
      </header>
      <main className="bg-white pb-24 ">
        <div className="main opacity-0">
          <Summary data={data} />
          <Projects />
        </div>
      </main>
      <footer className="bg-main text-[#e1e1e1] h-24 flex justify-center items-center  ">
        <span>© Jennifer Chinabu. All rights reserved.</span>{' '}
      </footer>
    </div>
  )
}
