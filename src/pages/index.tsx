import Image from 'next/image'
import { useEffect, useState } from 'react'
import banner from '~/assets/samuel-arkwright-Z3tajiPtiUg-unsplash.jpg'
import Projects from '~/components/Projects'
import Summary from '~/components/Summary'
import { getOverview } from '~/lib/sanity.queries'

export default function IndexPage() {
  const [data, setData] = useState({} as Record<string, string | any>)

  const fetchingOverview = async () => {
    const data = await getOverview()
    if (data) setData(data[0])
  }

  useEffect(() => {
    if (Object.values(data).length === 0) fetchingOverview() // eslint-disable-next-line
  }, [data])

  return (
    <div>
      <header className=" border-b border-[#ced2d9] z-10  left-0 ">
        <div className=" text-sm px-6 pt-4  my-3 grid gap-1 absolute top-0 left-0 z-10 ">
          <span className="font-extrabold text-2xl">Jennifer Chinabu</span>
          <span className="font-medium text-lg">Data Scientist</span>
        </div>
        <span className="text-xl text-center px-2 my-3 grid gap-2 absolute top-[20%] left-1/2 translate-x-[-50%] z-10 w-full">
          {data.bannertext}
        </span>
        <div className="w-screen h-[60vh] relative ">
          <Image
            className="w-full h-full object-cover object-center brightness-90"
            src={banner}
            alt="a cluster of penguis in a marshy area"
          />
        </div>
      </header>
      <main>
        <Summary data={data} />
        <Projects />
      </main>
      <footer>foot</footer>
    </div>
  )
}
