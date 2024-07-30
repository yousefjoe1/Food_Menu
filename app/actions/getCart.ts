'use server'
import axios from 'axios'; // Import axios
import { cookies } from 'next/headers';


let url = process.env.NEXT_PUBLIC_DB

export async function getCart(api:String) {
  let token = cookies().get('user-tk-fruit')?.value

  try {
    const response = await axios.get(`${url}${api}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); // Replace with your actual endpoint

    // Handle successful response
    return response.data; // Return the fetched data

  } catch (err:any) {
    console.error('Error fetching data:', err.response?.status);
    return {status: err.response?.status,data: null,msg:`Error fetching data - ${err.response?.status}`}
  }
}