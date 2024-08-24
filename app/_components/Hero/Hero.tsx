import React from 'react'
import { FaTwitter,FaFacebookF } from "react-icons/fa";

import Link from "next/link";
import { ImInstagram } from 'react-icons/im';

const Hero = () => {
  return (
    <section style={{background: `url(/Pineapple.png) no-repeat`,backgroundPosition: 'center',backgroundAttachment: 'fixed'}} className="hero-section lg:h-screen md:h-screen h-[500px] relative overflow-hidden">
      <div className="lg:h-[210px] md:h-36 absolute z-20 lg:-right-3 right-0 top-4 rounded-l-3xl bg-yellow-300 flex lg:flex-col justify-between lg:pl-3 px-4 py-3 lg:w-14 w-32 ">
        <Link className="lg:text-2xl" href={`/`}>
        <ImInstagram className="text-slate-400" />
        </Link>
        <Link className="lg:text-2xl" href={`/`}>
            <FaFacebookF className="text-slate-400" />
        </Link>
        <Link className="lg:text-2xl" href={`/`}>
            <FaTwitter className="text-slate-400" />
        </Link>
      </div>

      <div className="flex gap-6 justify-between relative items-center h-full px-20">
        <div className='bg-slate-400 opacity-40 left-0 absolute w-full h-full z-10' />
        <div className="left-section text-2xl text-white relative z-40">
          <h3 className='text-4xl'>Fresh Fruits</h3>
          <p className='w-[70%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo quisquam perferendis molestias officia unde nesciunt quae molestiae, blanditiis assumenda.</p>
        </div>

        <div className="right-section rounded-2xl relative z-40 p-3">
          <h3 className='text-4xl text-white'>Fruit <br />
          Delivery</h3>
          <p className='text-white  font-semibold'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>

    </section>
  )
}

export default Hero