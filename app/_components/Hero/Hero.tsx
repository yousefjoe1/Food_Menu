import React from 'react'
import { FaTwitter,FaLinkedinIn,FaFacebookF } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="hero-section lg:h-screen md:h-1/2 h-[500px] relative overflow-hidden">
      <div className="lg:h-[210px] md:h-36 absolute z-20 lg:-right-3 right-0 top-4 rounded-l-3xl bg-yellow-300 flex lg:flex-col justify-between lg:pl-3 px-4 py-3 lg:w-14 w-32 ">
        <a target="_blank" className="lg:text-2xl" href={`https://www.linkedin.com/in/youssefmahmoud1/`}>
            <FaLinkedinIn className="text-slate-400" />
        </a>
        <Link className="lg:text-2xl" href={`/`}>
            <FaFacebookF className="text-slate-400" />
        </Link>
        <Link className="lg:text-2xl" href={`/`}>
            <FaTwitter className="text-slate-400" />
        </Link>
      </div>
      <Image src={`/Pineapple.png`} alt="background-image" width={1000} height={500} className="w-full lg:h-full lg:object-contain" />

      {/* <div className="section-footer bg-slate-400/55 h-[400px] rounded-3xl px-7 flex lg:flex-row flex-col justify-between items-center flex-wrap absolute bottom-0 left-0 ">
        <h2 className="basis-1/2 lg:text-3xl text-sm font-bold text-white">
          Fresh Fruit & <br /> Amazing Taist
        </h2>
        <div className="basis-1/2 text-white">
        <h4 className="lg:text-3xl text-sm font-bold text-white">
          Fruit <br />
          Delivery
        </h4>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>      
        </div>
      </div> */}
    </section>
  )
}

export default Hero