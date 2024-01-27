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

  return (
    <div className=" text-center mx-10 sm:mx-20   mt-10 font-light">
      <h2 className="pb-10 text-2xl tracking-tight font-bold">PROJECTS</h2>
      <div className="md:max-w-[900px] mx-auto grid gap-6 lg:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center project">
        {[...data].map((item, id) => {
          return (
            <div
              key={id}
              className="relative w-full h-full project--card  rounded-md m-auto overflow-hidden "
            >
              <a href={item.github} target="_blank">
                <img
                  className=" w-full h-full object-cover"
                  src={item.image}
                  alt={item.alt}
                />
                <div className=" absolute top-[100%] left-0 h-full w-full bg-black bg-opacity-0 hover:bg-opacity-35 z-10 flex justify-center items-end transition-all duration-300 delay-75 ease-in-out">
                  <div className="pb-[20%] text-[#e1e1e1] font-light italic ">
                    {item.name}
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
