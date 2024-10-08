"use client";

import React, { FC, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Spinner, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { addUser } from "@/app/actions/addUser";

interface FormValues {
  username: string;
  email: string;
  password: string;
  // avatar?: File | null;
}

const Register: FC = () => {
  const form = useForm<FormValues>();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const redirect = useRouter();

  const loginFunc = async (data: FormValues) => {
    setIsSubmit(true);

    try {
      let res = await addUser("users/register", data);
      console.log(res);
      
      // setIsSubmit(false);
      if (res.code == 201) {
        msg({ title: res.msg, status: "success", duration: 3000 });
        redirect.push("/");
      } else {
        msg({ title: res.msg, status: "error", duration: 3000 });
      }
    } catch (er) {
      console.log(er);
    }
    setIsSubmit(false);
  };

  return (
    <div className="register-wrapper grid lg:grid-cols-2 p-5">
      <form
        noValidate
        className="bg-slate-800 grid lg:grid-cols-1 md:grid-cols-1 p-5 rounded-l-3xl"
        onSubmit={handleSubmit(loginFunc)}
      >
        <div>
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            {...register("username", { required: "user name required" })}
            type="text"
            className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full "
          />
          <p className="text-red-500">{errors.username?.message}</p>
        </div>

        <div>
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email format",
              },
            })}
            type="email"
            className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full "
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: "password required" })}
            type="password"
            className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full "
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>

        {/* <div>
          <label className="text-white" htmlFor="avatar">
            Avatar
          </label>
          <input
            ref={avatarImg}
            onChange={handleFile}
            type="file"
            className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full "
          />
        </div> */}

        <div className="submit-btn mt-3">
          {isSubmit ? (
            <Spinner  size={"2xl"} color="white" height={50} width={1}  />
          ) : (
            <button
              className=" bg-slate-500 text-white outline-none border-none w-full py-2 rounded-3xl"
              type="submit"
            >
              Register
            </button>
          )}
        </div>
      </form>
      <div className="img-wrapper">
        <Image
          width={500}
          height={500}
          className="w-full rounded-r-3xl"
          alt="image"
          src={`https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1687802747/catalog/1673391100242911232/ixmsjupruwgd64xmnmks.jpg`}
        />
      </div>
    </div>
  );
};

export default Register;
