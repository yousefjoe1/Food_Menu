'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

let url = process.env.NEXT_PUBLIC_DB

export async function deleteProduct(api:String) {
  let token = cookies().get('admin-tk-fruit')?.value

  try {
    const response = await axios.delete(`${url}${api}`,
      {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }); // Replace with your actual endpoint
        // console.log(response.data);
        

    revalidatePath('/')
    // Handle successful response
    return {status: response.data.status,msg: response.data.msg,code: response.data.code}; // Return the fetched data

  } catch (err:any) {
    console.error('Error delete data:', err.response);
    return {status: err.response?.status,data: null,msg:`Error delete data - ${err.response?.status}`}
  }
}