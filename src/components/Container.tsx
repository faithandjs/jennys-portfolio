import Image from 'next/image'
import banner from '../assets/samuel-arkwright-Z3tajiPtiUg-unsplash.jpg'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <header className="flex border-b border-[#ced2d9] z-10 sticky top-0 left-0 ">
        <div className="w-screen h-[60vh] relative ">
          <span className=" text-sm text-center px-2 my-3 grid gap-2 absolute top-[20%] left-1/2 translate-x-[-50%] z-10 w-full">
            <span className="font-extrabold text-4xl"> Jennifer Chinabu</span>
            <span className="font-medium text-2xl">Data Scientist</span>
          </span>
          <Image
            className="w-full h-full object-cover object-center brightness-90"
            src={banner}
            alt="a cluster of penguis in a marshy area"
          />
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">footer</footer>
    </div>
  )
}
