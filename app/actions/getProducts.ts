'use server'
import axios from 'axios'; // Import axios


let url = process.env.NEXT_PUBLIC_DB

export async function getData(api:String) {
  try {
    const response = await axios.get(`${url}${api}`); // Replace with your actual endpoint
    return response.data; // Return the fetched data

  } catch (err:any) {
    console.error('Error fetching data:', err.response?.status);
    return {status: err.response?.status ||'error',code:400, data: null,msg:`Error fetching data - ${err.response?.status}`}
  }
}