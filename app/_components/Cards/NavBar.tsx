import React from "react";
import Cart from "../Cart/Cart";
import Auth from "../Auth/Auth";
import Link from "next/link";

import Profile from "../User/Profile";

const NavBar = () => {
  

  return (
    <nav className="flex gap-y-5 text-white items-center justify-between flex-wrap lg:px-24 px-4 py-5 navbg shadow-md shadow-slate-800">
      <Link href={'/'} className="logo">
        <h2>Food</h2>
        <h3>Empire</h3>
      </Link>

        {/* <NavLinks /> */}
        <div className="cart-auth flex gap-10 items-center">
            <Auth />

            <Cart />

            <Profile />
        </div>
    </nav>
  );
};

export default NavBar;
