'use client'
import Link from "next/link";
import React, { useState } from "react";

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
    <nav className="flex px-24 py-4 navbg flex-wrap shadow-md shadow-slate-800 items-center">
      <div className="logo basis-1/2">
        <h2>Food</h2>
        <h3>Empire</h3>
      </div>

      <div className="links flex items-center  flex-wrap w-full justify-between">
        <ul className="flex gap-4">
            {
                navLinks.map(l=>(
                    <li key={l.name}>
                        <Link href={`/${l.link}`}>
                            {l.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <div className="cart-auth flex gap-10 items-center">
            {/* cart */}
            <h3>cart</h3>

            <h3>Auth</h3>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
