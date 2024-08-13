'use server'
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

interface UserItem {
  email: string;
  password: string;
}

let url = process.env.NEXT_PUBLIC_DB

export async function getUserDetails() {
    let u = cookies().get('user-details')?.value
    // console.log(u);
    
    
    if(u!=undefined){
        let user = JSON.parse(u)
        return {data:user,code: 200}
    }else{
        return {data:false,code: 404}
    }
}