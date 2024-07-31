import React from "react";
import Cart from "../Cart/Cart";
import Auth from "../Auth/Auth";
import NavLinks from "../NavLinks/NavLinks";
import Link from "next/link";

const NavBar = () => {

  return (
    <nav className="flex gap-y-3 text-white items-center justify-between flex-wrap lg:px-24 px-4 py-5 navbg shadow-md shadow-slate-800">
      <Link href={'/'} className="logo basis-1/2">
        <h2>Food</h2>
        <h3>Empire</h3>
      </Link>

        <NavLinks />
        <div className="cart-auth flex gap-10 items-center">
            <Auth />

            <Cart />
        </div>
    </nav>
  );
};

export default NavBar;
