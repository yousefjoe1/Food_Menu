'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

interface ProductItem {
    _id:string;
    name: string;
    price: string;
    image: string | File;
    details: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function updateProduct(api:String,data:FormData) {
  let token = cookies().get('admin-tk-fruit')?.value
  
  try {
    const response = await axios.patch(`${url}${api}`,data,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }); // Replace with your actual endpoint

    revalidatePath('/admin-dash')
    // Handle successful response
    return {code: response.data.code,msg: response.data.msg}; // Return the fetched data

  } catch (err:any) {
    console.error('Error updateProduct data:', err.response?.status);
    return {status: err.response?.status,data: null,msg:`Error fetching data - ${err.response?.status}`,code: err.response}
  }
}