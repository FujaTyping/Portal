import { Open_Sans } from "next/font/google";
import Banner from "@/app/assets/media/Banner.png"

const OS = Open_Sans({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center p-3">
        <div className="bg-gradient-to-r from-red-600 to-red-800 max-w-6xl w-full rounded-lg">
          <img
            className="w-full max-h-72 rounded-t-lg object-cover"
            src={Banner.src}
            alt="Banner"
          />
          <div className="flex flex-col md:flex-row gap-6 place-content-between px-6 py-12 text-white">
            <div>
              <h1 className="font-bold text-4xl md:text-5xl">FujaTyping</h1>
              <p className="max-w-md mt-3">A normal guy</p>
            </div>
            <div className={`${OS.className} flex flex-col w-full md:ml-6 md:flex-row items-center justify-center gap-5`}>
              <button className="w-full">Github</button>
              <button className="w-full">Twitter</button>
              <button className="w-full">Mail</button>
              <button className="w-full">Discord</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 flex gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full"></div>
          <p className="bg-red-600 text-white px-3 py-1 rounded-full text-xl">
            siraphop.me
          </p>
        </div>
      </div>
    </>
  );
}
