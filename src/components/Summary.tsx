import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'

import medium from '~/assets/medium.png' //32
import github from '~/assets/github.png'
import linkedin from '~/assets/linkedin.png'
import mail from '~/assets/email.png'
// interface summaryData{
//    _id:string
//     bannertext,
//     summarytitle,
//     summary,
//     newsletter,
//     medium,
//     linkedin,
//     github,
//     novypro,
//     email,
// }

export default function Summary({
  data,
}: {
  data: Record<string, string | any>
}) {
  return (
    <div className="py-10">
      <ul className="flex gap-8 items-end justify-center w-full list-none py-5">
        {[
          {
            name: 'medium',
            icon: medium,
            data: data.medium,
            style: '-bottom-0.5',
          },

          {
            name: 'linkedin',
            icon: linkedin,
            data: data.linkedin,
            style: ' ',
          },
          // {
          //   name: 'novypro',
          //   icon: <>😭</>,
          //   data: data.novypro,
          // },
          {
            name: 'email',
            icon: mail,
            data: data.email,
            style: '-bottom-0.5 w-[32px]',
          },
          {
            name: 'github',
            icon: github,
            data: data.github,
            style: ' ]',
          },
        ].map((item, id) => {
          return (
            <li className="" key={id}>
              <a
                href={
                  item.name === 'email' ? `mailto:${item.data}` : `${item.data}`
                }
                target="_blank"
              >
                <>
                  <Image
                    className={`sm:w-8 w-7 h-auto ${item.style} relative hover:scale-105  transition-all duration-300`}
                    src={item.icon}
                    alt={item.name}
                  />
                </>
              </a>
            </li>
          )
        })}
      </ul>

      {/* <div className="flex mx-auto"> */}
      <div className="sm:pb-24 sm:pt-16 py-12 border-y border-gray-300 max-w-[900px] text-center mx-auto mt-10 font-light">
        <h2 className="sm:pb-16 pb-6  text-lg tracking-tighter font-medium">
          {data.summarytitle}
        </h2>
        <div className="px-4 md:px-6 lg:px-0">
          <PortableText value={data.summary} />
        </div>
        <button className="mt-9 uppercase text-sm px-7 py-3  relative btn bg-main text-white hover:text-main hover:tracking-widest hover:bg-transparent transition-all duration-300 border-2 border-main  ">
          Join the newsletter
        </button>
      </div>
      {/* </div> */}
    </div>
  )
}
//
