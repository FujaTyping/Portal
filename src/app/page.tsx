import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Banner from "@/app/assets/media/Banner.webp";
import { Github, Twitter, Mail, Linkedin, Sparkle } from 'lucide-react';
import Marquee from "react-fast-marquee";
import TimeFlex from "./components/Time";

const OS = Open_Sans({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <div className="absolute top-20 -mt-16 md:-mt-0 -ml-40 w-full rotate-[-0.4rad] text-red-500 font-bold text-5xl md:text-7xl">
        <Marquee direction="right" className="slide-in-left overflow-hidden">
          <p>FUJATYPING</p><Sparkle size={50} className="mx-10" /><p>FJT</p><Sparkle size={50} className="mx-10" /><p>SIRAPHOP</p><Sparkle size={50} className="mx-10" /><p>フジャタイピング</p><Sparkle size={50} className="mx-10" /><p>후자타이핑</p><Sparkle size={50} className="mx-10" />
        </Marquee>
      </div>
      <div className="w-full mt-10 md:mt-16 flex flex-col items-center justify-center p-6 mb-8 swing-in-top-fwd">
        <div className="bg-gradient-to-r from-red-600 to-red-800 max-w-5xl w-full rounded-lg">
          <img
            className="w-full max-h-72 rounded-t-lg object-cover"
            src={Banner.src}
            alt="Banner"
          />
          <div className="flex flex-col md:flex-row gap-6 place-content-between px-6 py-12 text-white border-t-4 border-red-900">
            <div>
              <h1 className="font-bold text-4xl md:text-5xl">FujaTyping</h1>
              <p className="max-w-md mt-3">3D modeler, Web developer, and Roblox scripter, Anime lover and music vibe hunter</p>
            </div>
            <div className={`${OS.className} flex flex-col w-full md:ml-6 md:flex-row items-center justify-center gap-5`}>
              <Link href={"https://github.com/FujaTyping"} className="w-full flex items-center justify-center gap-2"><Github size={18} /> Github</Link>
              <Link href={"https://x.com/FujaTyping"} className="w-full flex items-center justify-center gap-2"><Twitter size={18} /> Twitter</Link>
              <Link href={"mailto:contact@siraphop.me"} className="w-full flex items-center justify-center gap-2"><Mail size={18} /> Mail</Link>
              <Link href={"https://www.linkedin.com/in/siraphop-sukchu/"} className="w-full flex items-center justify-center gap-2"><Linkedin size={18} /> Linkedin</Link>
            </div>
          </div>
        </div>
        <TimeFlex />
        <div className="mt-10 flex gap-2">
          <div className="w-9 h-9 bg-red-600 rounded-full"></div>
          <p className="bg-red-600 text-white px-3 py-1 rounded-full text-xl">
            siraphop.me
          </p>
        </div>
      </div>
    </>
  );
}
