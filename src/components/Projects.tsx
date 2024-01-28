import React, { useEffect, useRef, useState } from 'react'

import { getProjects } from '~/lib/sanity.queries'

export default function Projects() {
  const [data, setData] = useState([])
  const project = useRef<HTMLDivElement>(null)

  const fetchingProjects = async () => {
    const data = await getProjects()
    if (data) setData(data)
  }

  useEffect(() => {
    if (Object.values(data).length === 0) {
      fetchingProjects()
    } else {
      // if (data.length >= 4) return
      // if (window.matchMedia('(min-width: 768px)').matches) {
      //   project.current.style.gridTemplateColumns = `repeat(${
      //     data.length < 4 ? data.length : 4
      //   }, 1fr)`
      // } else if (window.matchMedia('(min-width: 640px)').matches) {
      //   project.current.style.gridTemplateColumns = `repeat(${
      //     data.length < 3 ? data.length : 3
      //   }, 1fr)`
      // } else if (window.matchMedia('(min-width: 425px)').matches) {
      //   project.current.style.gridTemplateColumns = `repeat(${
      //     data.length < 2 ? data.length : 2
      //   }, 1fr)`
      // } else {
      //   project.current.style.gridTemplateColumns = `repeat(${
      //     data.length < 1 ? data.length : 1
      //   }, 1fr)`
      // }
    } // eslint-disable-next-line
  }, [data])
  // sm:grid-cols-3 md:grid-cols-4
  return (
    <div className=" text-center mx-10 sm:mx-20   mt-10 font-light">
      <h2 className="pb-10 text-2xl tracking-tight font-bold">PROJECTS</h2>
      <div
        className={`project--container  md:max-w-[900px] w-max mx-auto grid gap-6 lg:gap-10 grid-col-1 xs:grid-col-2  justify-center  `}
        ref={project}
      >
        {[...data].map((item, id) => {
          return (
            <div
              key={id}
              className="relative w-full h-full project--card  rounded-md m-auto overflow-hidden sm:max-w-[200px] max-w-[150px]"
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
