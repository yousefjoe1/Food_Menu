import { revalidatePath } from "next/cache";

export async function revalidate(path:string){
    try {
        revalidatePath(path)
    } catch (error) {
        console.log(error);
        
    }
  }