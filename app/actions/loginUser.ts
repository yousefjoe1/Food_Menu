'use server'
import axios from 'axios';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function loginUser(api:String,data:UserItem) {
  try {
    const response = await axios.post(`${url}${api}`,{...data}); // Replace with your actual endpoint
    return {data: response.data,status: 201,msg: 'Loged in'}; // Return the fetched data
  } catch (err:any) {
    console.error('Error login user data:', err.response?.status);
    return {status: err.response?.status,data: null,msg:`Error login user data - ${err.response?.status}`}
  }
}