"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Spinner, useToast } from "@chakra-ui/react";

import { addProducts } from "@/app/actions/addProducts";
// import { cookies } from "next/headers";
import axios from "axios";

interface FormValues {
  name: string;
  price: string;
  image: string;
  details: string;
}

let url = process.env.NEXT_PUBLIC_DB


interface TheImage {
  image?: File | null;
}
const ProductForm = () => {
  const msg = useToast();
  const form = useForm<FormValues>();

  const { register,handleSubmit, formState ,reset} = form;

  const [isSubmit, setIsSubmit] = useState(false);

  const avatarImg = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<TheImage>({
    image: null,
  });
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage((prevProduct) => ({
      ...prevProduct,
      image: file || null,
    }));
  };

  const addFunction = async (data: FormValues) => {
    setIsSubmit(true);

    const { name, price, details } = data;
    // console.log(data,'data product');
    // return
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("details", details);
    if (image.image != null) {
      formData.append("image", image?.image);
    }else {
      formData.append("image", '');
    }

    setIsSubmit(true);
    let res = await addProducts("products", formData);
    // console.log(res,'res');
    // let token = localStorage.getItem('tk')
    // console.log(token,'token');
    

    // try {
    //   let rs = await axios.post(`${url}products`,formData,{
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   console.log(rs.data,'data get ok');
    //   msg({ title: rs.data.msg, status: "success", duration: 3000 });
    // } catch (error) {
    //   console.log(error);
    // }
    
    setIsSubmit(false);
    if (res.code == 201) {
      msg({ title: res.msg, status: "success", duration: 3000 });
    } else {
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
  };
  return (
    <div className="font-[sans-serif] relative">
      {/* <div className="h-[240px] font-[sans-serif]">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div onSubmit={handleSubmit(addFunction)} className="relative m-4">
        <form className={`bg-white max-w-xl mx-auto w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl transition-all ease-linear duration-200 overflow-hidden ${isSubmit ? 'h-[20px]' : 'h-[600px]'} `}>
        {
          isSubmit && <Spinner size={"2xl"} height={50} width={1} color="blue" />
        }
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-bold text-center">
              Add Product
            </h3>
          </div>

          <div>
            <label className="text-gray-800 text-xs block mb-2">
              Product Name
            </label>
            <div className="relative flex items-center">
              <input
            {...register("name", { required: "name required" })}
                name="name"
                type="text"
                required
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter Product name"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Details</label>
            <div className="relative flex items-center">
              <input
            {...register("details", { required: "details required" })}

                name="details"
                type="text"
                required
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter details"
              />
            </div>
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-xs block mb-2">Price</label>
            <div className="relative flex items-center">
              <input
            {...register("price", { required: "price required" })}
                name="price"
                type="text"
                required
                className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter price"
              />
            </div>
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              ref={avatarImg}
              onChange={handleFile}
              type="file"
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
            />
          </div>
          <div className="mt-8 flex-1">
            {isSubmit ? (
              ''
            ) : (
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
              >
                Add Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
