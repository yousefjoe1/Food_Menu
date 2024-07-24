'use server'
import axios from 'axios';

interface UserItem {
  username: string;
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function addUser(api:String,data:UserItem) {
  try {
    const response = await axios.post(`${url}${api}`,{...data}); // Replace with your actual endpoint
    // Handle successful response
    console.log(response,'add user');
    
    return {data: response.data,status: 201,msg: 'Created'}; // Return the fetched data
  } catch (err:any) {
    console.error('Error add user data:', err.response?.status);
    return {status: err.response?.status,data: null,msg:`Error add user data - ${err.response?.status}`}
  }
}