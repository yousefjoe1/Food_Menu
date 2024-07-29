'use server'
import axios from 'axios';
import { cookies } from 'next/headers';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function loginUser(api:String,data:UserItem) {
  try {
    const response = await axios.post(`${url}${api}`,{...data}); // Replace with your actual endpoint
    // Handle successful response
    console.log(response.data,'login user');
    cookies().set('user-tk-fruit',response.data.token)
    return {data: response.data,code: 200,msg: response.data.msg,status:response.data.status}; // Return the fetched data
  } catch (err:any) {
    console.error('Error login user data:', err.response?.data);
    return {code: err.response?.data?.status,data: null,msg:`Error in login - ${err.response?.data.msg}`,status: err.response?.data.status}
  }
}