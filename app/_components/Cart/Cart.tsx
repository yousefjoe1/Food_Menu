import { getCart } from '@/app/actions/getCart';
import React from 'react'

import { LiaCartArrowDownSolid } from "react-icons/lia";

const Cart = async () => {

  const cart = await getCart('cart')
  console.log(cart,'cart');

  return (
    <div>
        <LiaCartArrowDownSolid className='lg:text-2xl' />
    </div>
  )
}

export default Cart