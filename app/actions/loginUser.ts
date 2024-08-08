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
    console.log(response.data.data,'login user');
    cookies().set('user-tk-fruit',response.data.data.token)
    let user = JSON.stringify(response.data.data.data)
    
    cookies().set('user-details',user)
    return {code: response.data.data.code,msg: response.data.data.msg}; // Return the fetched data
  } catch (err:any) {
    console.error('Error login user data:', err.response?.data);
    return {code: err.response?.data?.code,data: null,msg:`Error in login - ${err.response?.data.msg}`}
  }
}