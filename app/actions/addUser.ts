'use server'
import axios from 'axios';
import { cookies } from 'next/headers';

let url = process.env.NEXT_PUBLIC_DB

export async function addUser(api:String,data:FormData) {

  try {
    const response = await axios.post(`${url}${api}`,data); // Replace with your actual endpoint
    // Handle successful response
    cookies().set('user-tk-fruit',response.data.token)

    let user = JSON.stringify(response.data.token)
    cookies().set('user-details',user)
    // console.log(response.data.data ,'response data');
    
    return {data: response.data,code: response.data.code,msg: response.data.msg,status:response.data.status}; // Return the fetched data
  } catch (err:any) {
    console.error('Error add user data:', err.response);
    return {code: err.response.data?.code,data: null,msg:`Error in register - ${err.response?.data.msg}`,status: err.response.data.status}
  }
}