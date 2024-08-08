'use server'
import axios from 'axios';
import { cookies } from 'next/headers';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function adminLogin(api:String,data:UserItem) {
  try {
    const response = await axios.post(`${url}${api}`,{...data}); // Replace with your actual endpoint
    // Handle successful response
    // console.log(response.data.data,'login admin');
    cookies().set('admin-tk-fruit',response.data.data.token)
    cookies().set('admin-access','true')
    return {data: response.data.data,code: response.data.data.code,msg: response.data.data.msg,status:response.data.data.status}; // Return the fetched data
  } catch (err:any) {
    console.log(err.response.data,'Error login admin data:', err.data);
    return {code: err.response.data?.status,data: null,msg:`Error in login admin - ${err.response?.data.msg}`,status: 'err.response.data.status'}
  }
}