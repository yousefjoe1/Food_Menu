'use server'
import axios from 'axios'; // Import axios
import { ProductItem } from '../Interfaces/Interface';


let url = process.env.NEXT_PUBLIC_DB

export async function addProducts(api:String,data:ProductItem) {
  try {
    const response = await axios.get(`${url}/products`,{data}); // Replace with your actual endpoint

    // Handle successful response
    return {data: null,status: 201}; // Return the fetched data

  } catch (err:any) {
    console.error('Error fetching data:', err.response?.status);
    return {status: err.response?.status,data: null,msg:`Error fetching data - ${err.response?.status}`}
  }
}