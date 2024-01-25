import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { getProjects } from '~/lib/sanity.queries'
export default function Projects() {
  const [data, setData] = useState([])

  const fetchingProjects = async () => {
    const data = await getProjects()
    if (data) setData(data)
  }

  useEffect(() => {
    if (Object.values(data).length === 0) {
      fetchingProjects()
    } // eslint-disable-next-line
  }, [data])

  // useEffect(() => {}, [])
  return (
    <div className="py-10 px-16 text-center mx-20 mt-10 font-light">
      <h2 className="pb-8 font-medium text-2xl">Projects</h2>
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="gap-8"> */}
      <div className="grid grid-cols-3 gap-10 justify-center project">
        {[...data, ...data, ...data, ...data, ...data].map((item, id) => {
          return (
            <div
              key={id}
              className="relative w-max project--card  rounded-md m-auto overflow-hidden"
            >
              {/* <a href={item.github} target="_blank"> */}
              {/* <img
                className="w-full h-full object-cover"
                // layout="fill"
                // objectFit="cover"
                src={item.image}
                alt={item.alt}
              /> */}
              <Image
                className="  h-full  "
                width={300}
                height={400}
                src={item.image}
                alt={item.alt}
              />

              <div className=" absolute top-[100%] left-0 h-full w-full bg-black bg-opacity-50 z-10 flex justify-center items-end transition-all duration-300 ease-in-out">
                <div className="pb-[20%] text-[#e1e1e1]">{item.name}</div>
              </div>
              {/* </a> */}
            </div>
          )
        })}
      </div>
      {/* </Masonry>
      </ResponsiveMasonry> */}
    </div>
  )
}
