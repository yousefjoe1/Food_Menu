'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

let url = process.env.NEXT_PUBLIC_DB

export async function deleteItem(id:string) {
  let token = cookies().get('user-tk-fruit')?.value

  try {
    const response = await axios.delete(`${url}cart/${id}`,
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
    ); // Replace with your actual endpoint

    revalidatePath('/cart')
    // Handle successful response
    return {data: response.data,status: 201,msg: 'Deleted'}; // Return the fetched data

  } catch (err:any) {
    console.log('Error delete cart item:', err.response,'Error delete cart item:');
    return {status: err.response?.status,data: null,msg:`Error delete cart item - ${err.response?.status}`}
  }
}