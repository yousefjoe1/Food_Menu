'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';

interface ProductItem {
  name: string;
  price: string;
  image: string;
  details:string
}

let url = process.env.NEXT_PUBLIC_DB

export async function addProducts(api:String,data:ProductItem) {
  try {
    const response = await axios.post(`${url}${api}`,{...data}); // Replace with your actual endpoint

    revalidatePath('/admin-dash')
    // Handle successful response
    return {data: response.data,status: 201,msg: 'Created'}; // Return the fetched data

  } catch (err:any) {
    console.error('Error fetching data:', err.response?.status);
    return {status: err.response?.status,data: null,msg:`Error fetching data - ${err.response?.status}`}
  }
}