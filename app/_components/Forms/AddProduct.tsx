"use client";
import React, { useState } from "react";

import { Spinner, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { addProducts } from "@/app/actions/addProducts";

interface ProductItem {
  name: string;
  price: string;
  image: string;
  details:string
}

function AddProduct() {
  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const form = useForm<ProductItem>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const addFunction = async (data: ProductItem) => {
    const { name, price, image,details } = data;
    setIsSubmit(true);

    const dataValues = {
      name: name,
      price: price,
      image: image,
      details: details
    };
    
    setIsSubmit(true);
    let res = await addProducts("products", dataValues);
    setIsSubmit(false);
    console.log(res);
    if(res.status == 201){
        msg({ title: res.msg, status: "success", duration: 3000 });
      }else{
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
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
          className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="details">Details</label>
        <input
          {...register("details", { required: "details required" })}
          type="text"
          className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
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
          className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
        />
        <p className="text-red-500">{errors.price?.message}</p>
      </div>

      <div>
        <label htmlFor="image">image Url</label>
        <textarea
          {...register("image", { required: "image required" })}
          className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
        />
        <p className="text-red-500">{errors.image?.message}</p>
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
