"use client";
import React, { useRef, useState } from "react";

import { Spinner, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { addProducts } from "@/app/actions/addProducts";
import axios from "axios";
import { cookies } from "next/headers";

let url = process.env.NEXT_PUBLIC_DB

interface ProductItem {
  name: string;
  price: string;
  image: string;
  details: string;
}

interface TheImage {
  image?: File | null;
}
function AddProduct() {
  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const avatarImg = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<TheImage>({
    image: null,
  });

  const form = useForm<ProductItem>();
  const { register, handleSubmit, formState,reset } = form;
  const { errors } = formState;

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage((prevProduct) => ({
      ...prevProduct,
      image: file || null,
    }));
  };

  const addFunction = async (data: ProductItem) => {
    setIsSubmit(true);

    const { name, price, details } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("details", details);
    if (image.image != null) {
      formData.append("image", image?.image);
    }else {
      formData.append("image", '');
    }
    let token = cookies().get('admin-tk-fruit')?.value

    try {
      let rs = await axios.post(`${url}products`,formData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(rs.data,'data get ok');
      
    } catch (error) {
      console.log(error);
      
    }

    

    setIsSubmit(false);
    // let res = await addProducts("products", formData);
    // setIsSubmit(false);
    // // console.log(res);
    // if (res.status == 201) {
    //   msg({ title: res.msg, status: "success", duration: 3000 });
    // } else {
    //   msg({ title: res.msg, status: "error", duration: 3000 });
    // }
  };

  return (
    <form
      noValidate
      className="bg-slate-50 grid lg:grid-cols-1 md:grid-cols-1 rounded-2xl gap-5 p-3 mx-auto lg:w-4/5 w-full "
      onSubmit={handleSubmit(addFunction)}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: "name required" })}
          type="text"
          className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="details">Details</label>
        <input
          {...register("details", { required: "details required" })}
          type="text"
          className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
        />
        <p className="text-red-500">{errors.details?.message}</p>
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          {...register("price", {
            required: "price is required",
          })}
          type="number"
          className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
        />
        <p className="text-red-500">{errors.price?.message}</p>
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input
          ref={avatarImg}
          onChange={handleFile}
          type="file"
          className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
        />
      </div>

      {isSubmit ? (
        <Spinner size={"2xl"} height={50} width={1} color="blue" />
      ) : (
        <button
          className="p-2 bg-slate-500 text-white outline-none border-none block rounded-lg"
          type="submit"
        >
          Add New Product
        </button>
      )}
    </form>
  );
}

export default AddProduct;
