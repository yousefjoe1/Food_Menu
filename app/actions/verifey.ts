'use server'
import axios from 'axios';
import { cookies, headers } from 'next/headers';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function verify() {
  let token = cookies().get('admin-tk-fruit')?.value
  let admin = cookies().get('admin-access')
  if(token?.length == 0 && admin){
    return {data: false,code: 400,msg: false,status:false}; // Return the fetched data
  }
  try {
    const response = await axios.get(`${url}admin/verify`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }); // Replace with your actual endpoint
    // Handle successful response
    return {data: true,code: 200,msg: response.data.msg,status:response.data.status}; // Return the fetched data
  } catch (err:any) {
    console.log('Error verify admin data:', err.response);
    return {code: err.response?.data?.status,data: null,msg:`Error in admin verify - ${err.response?.data.msg}`,status: err.response?.data.status}
  }
}