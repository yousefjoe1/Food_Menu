'use server'
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function logout() {
    cookies().delete('user-tk-fruit')
    revalidatePath('/')
//   try {
//     const response = await axios.post(`${url}logout-user`,{...data}); // Replace with your actual endpoint
//     // Handle successful response
//     console.log(response.data,'logout user');
//     return {data: response.data,code: 200,msg: response.data.msg,status:response.data.status}; // Return the fetched data
//   } catch (err:any) {
//     console.error('Error logout user data:', err.response.data);
//     return {code: err.response.data?.status,data: null,msg:`Error in logout - ${err.response?.data.msg}`,status: err.response.data.status}
//   }
}