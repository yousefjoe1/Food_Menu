'use client'
import Link from "next/link";
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Auth from "../Auth/Auth";

const NavBar = () => {
  const [navLinks, setNavLinks] = useState([
    {
      name: "Favorite Fruits",
      link: "favoriteFruits",
    },
    {
      name: "Fruit Shoop",
      link: "fruitShoop",
    },
    {
      name: "About Us",
      link: "aboutUs",
    },
  ]);
  return (
    <nav className="flex gap-y-3 items-center justify-between flex-wrap lg:px-24 px-4 py-5 navbg shadow-md shadow-slate-800">
      <div className="logo basis-1/2">
        <h2>Food</h2>
        <h3>Empire</h3>
      </div>

      <div className="links flex items-center flex-wrap w-full justify-center">
        <ul className="flex gap-4">
            {
                navLinks.map(l=>(
                    <li key={l.name}>
                        <Link href={`/${l.link}`} className="lg:text-2xl text-sm ">
                            {l.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
      </div>
        <div className="cart-auth flex gap-10 items-center">
            <Cart />

            <Auth />
        </div>
    </nav>
  );
};

export default NavBar;
