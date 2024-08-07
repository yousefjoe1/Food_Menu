'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

interface ProductItem {
  product:object,
  count: string | number
}


let url = process.env.NEXT_PUBLIC_DB

export async function addToCart(item:ProductItem) {
  let token = cookies().get('user-tk-fruit')?.value

  if(token == undefined){
    return {msg: 'Login first',status: 'error',code: 404}
  }

  try {
    const response = await axios.post(`${url}api/cart/add-to-cart`,{...item},{headers: {Authorization: `Bearer ${token}`}});
      revalidatePath('/')

    return response.data;

  } catch (err:any) {
    console.error(err.response,'Error adding to cart data');
    return {status: err.response?.status,data: null,msg:`Error adding to cart data - ${err.response?.status}`}
  }
}