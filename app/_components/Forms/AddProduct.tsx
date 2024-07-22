"use client";
import React, { useState } from "react";

import { Spinner, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  price: string;
  image: string;
  details:string
}

function AddProduct() {
  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const loginFunc = async (data: FormValues) => {
    const { name, price, image,details } = data;
    setIsSubmit(true);

    const dataValues = {
      name: name,
      price: price,
      image: image,
    };

    // let res = await postData("register", dataValues);
    // if (res.state == "error") {
    //   setIsSubmit(false);
    //   msg({ title: res.message, status: "error", duration: 3000 });
    // } else {
    //   redirect.push("/profile");
    //   setIsSubmit(false);
    // }
  };

  return (
    <form
      noValidate
      className="bg-slate-50 grid lg:grid-cols-1 md:grid-cols-1 rounded-2xl gap-5 p-3 mx-auto lg:w-4/5 "
      onSubmit={handleSubmit(loginFunc)}
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
        <input
          {...register("image", { required: "image required" })}
          type="text"
          className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
        />
        <p className="text-red-500">{errors.image?.message}</p>
      </div>

      {isSubmit ? (
        <Spinner size={"2xl"} height={50} width={1} />
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
