'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';



let url = process.env.NEXT_PUBLIC_DB

export async function updateCart(itemId:String,count:Number) {
  let token = cookies().get('user-tk-fruit')?.value

  if(token == undefined){
    return {msg: 'Login first',status: 'error',code: 404}
  }

  try {
    const response = await axios.put(`${url}cart/${itemId}`,{count:count});
      revalidatePath('/')
      console.log(response.data);
      

    return {status: response.data.status,code: response.data.code,msg: 'Updated'};

  } catch (err:any) {
    console.error(err.response,'Error updating cart data');
    return {status: err.response?.status,data: null,msg:`Error updating data - ${err.response?.status}`}
  }
}