'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

let url = process.env.NEXT_PUBLIC_DB

export async function addProducts(api:String,data:FormData) {
  let token = cookies().get('admin-tk-fruit')?.value

  if(!token){
    return {status: 404,data: null,msg:`You are not admin`}
  }

  try {
    const response = await axios.post(`${url}${api}`,data,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }); // Replace with your actual endpoint

    revalidatePath('/admin-dash')
    // Handle successful response
    console.log(response.data,'data save product');
    
    return {data: response.data,code: response.data.code,msg: response.data.msg}; // Return the fetched data

  } catch (err:any) {
    console.log('Error adding product:', err.response);
    return {status: err.response?.status,code:err.response.code,data: null,msg:`Error adding product - ${err.response?.status} ${err.response.data}`,msg2:err.msg2}
  }
}