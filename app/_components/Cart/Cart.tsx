import React from "react";
import Link from "next/link";

import { getCart } from "@/app/actions/getCart";

import { LiaCartArrowDownSolid } from "react-icons/lia";

const Cart = async () => {
  const cart = await getCart("cart");

  return (
    <Link href={`/cart`} className="relative">
      <LiaCartArrowDownSolid className="lg:text-2xl" />
      {cart.data != null && (
        <span className="absolute -top-4 left-0 text-sm text-yellow-400 bg-slate-800 rounded-2xl px-2">
          {cart.data.length ? cart.data.length : 0}
        </span>
      )}
    </Link>
  );
};

export default Cart;