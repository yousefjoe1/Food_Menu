'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

interface ProductItem {
  name: string;
  price: string;
  image: string;
  details:string
}

let url = process.env.NEXT_PUBLIC_DB

export async function addProducts(api:String,data:ProductItem) {
  let token = cookies().get('admin-tk-fruit')?.value

  if(!token){
    return {status: 404,data: null,msg:`You are not admin`}
  }

  try {
    const response = await axios.post(`${url}${api}`,{...data},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }); // Replace with your actual endpoint

    revalidatePath('/admin-dash')
    // Handle successful response
    return {data: response.data,status: 201,msg: 'Created'}; // Return the fetched data

  } catch (err:any) {
    console.error('Error adding product:', err.response.data);
    return {status: err.response?.status,data: null,msg:`Error adding product - ${err.response?.status} ${err.response.data} `}
  }
}