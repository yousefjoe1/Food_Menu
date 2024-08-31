import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="min-h-[300px] ">
      <div className="flex justify-between flex-wrap items-center gap-5 lg:px-24 px-6">
        <h3 className="text-white text-2xl">
          Subscribe <br />
          to newsletter
        </h3>

        <div className="form flex border-2 lg:w-[40%] border-white">
          <input
            type="email"
            name="user-email"
            className="w-full outline-none bg-black"
            id="user-email"
          />
          <button className="bg-white  p-4">subscribe</button>
        </div>

        <div className="social-squar flex gap-5 lg:w-[25%] w-full h-[150px] bg-slate-500 p-8">
          <Link className="lg:text-2xl" href={`#`}>
            <ImInstagram className="text-yellow-50" />
          </Link>
          <Link className="lg:text-2xl" href={`#`}>
            <FaFacebookF className="text-yellow-50" />
          </Link>
          <Link className="lg:text-2xl" href={`#`}>
            <FaTwitter className="text-yellow-50" />
          </Link>
        </div>
      </div>

      <div className="flex justify-between flex-wrap items-center lg:px-24 px-6 text-white mt-7">
        <h3 className="lg:basis-1/4 lg:text-2xl ">Food <br />
        Empire</h3>

        <div className="footer-links flex justify-between gap-5 lg:mt-0 mt-6 items-end lg:basis-9/12 flex-wrap ">
          <Link href={'/'}>Best Fruits</Link>
          <Link href={'/'}>Social Media</Link>
          <Link href={'/'}>More for You</Link>
          <Link href={'/'}>Your Shope</Link>
          <p>The Copyright 2022 guide covers 14 jurisdictions.</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
