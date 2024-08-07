'use server'
import axios from 'axios';
import { cookies } from 'next/headers';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function verifyUser() {
  let token = cookies().get('user-tk-fruit')?.value
  
  // let admin = cookies().get('admin-access')
  if(token ==  undefined){
    return {data: false,code: 400,msg: false,status:false}; // Return the fetched data
  }

  try {
    const response = await axios.get(`${url}users/verify-user`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }); // Replace with your actual endpoint
    // Handle successful response
    // console.log(response.data,'response user');
    
    return {data: true,code: 200,msg: response.data.msg,status:response.data.status,user:response.data.userDetails}; // Return the fetched data
  } catch (err:any) {
    // console.log('Error login user data:', err.response);
    return {code: err.response?.data?.status,data: null,msg:`Error in login - ${err.response?.data.msg}`,status: err.response?.data.status,user:null}
  }
}