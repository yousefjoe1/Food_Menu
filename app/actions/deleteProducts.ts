'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';

let url = process.env.NEXT_PUBLIC_DB

export async function deleteProduct(api:String) {
  try {
    const response = await axios.delete(`${url}${api}`); // Replace with your actual endpoint

    revalidatePath('/')
    // Handle successful response
    return {data: response.data,status: 201,msg: 'Deleted'}; // Return the fetched data

  } catch (err:any) {
    console.error('Error delete data:', err.response);
    return {status: err.response?.status,data: null,msg:`Error delete data - ${err.response?.status}`}
  }
}