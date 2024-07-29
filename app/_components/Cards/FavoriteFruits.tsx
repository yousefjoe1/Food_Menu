import Image from "next/image";
import React, { Suspense } from "react";

import { getData } from "@/app/actions/getProducts";

import { ProductItem } from "@/app/Interfaces/Interface";
import DeleteProduct from "../UpdateDelete/DeleteProduct";
import { ChakraWrapper } from "./HOC/ChakraWrapper";
import UpdateProduct from "../UpdateDelete/UpdateProduct";

const FavoriteFruits = async ({ admin }: { admin: boolean }) => {
  const data = await getData(`products`);


  const validImg = (str:string)=> {
    let strType =str.slice(-3)
    
    if(strType != 'jpg'){
      return 'https://t3.ftcdn.net/jpg/00/74/73/92/360_F_74739200_WG1Fdy15mIVeQapC6LqiaoLqNLPFVqzr.jpg';
    }else {
      return str;
    }
  }

  return (
    <div className="flex gap-4 flex-wrap">
      <Suspense fallback={".... Loading ...."}>
        {data.status == "success"
          ? data.data.map((fruit: ProductItem) => (
              <div key={fruit["_id"]} className="lg:w-[265px]">
                <h3></h3>
                <div className="card-img w-full h-[214px]">

                  <Image
                    src={validImg(fruit.image)}
                    className="w-full object-cover h-full"
                    width={256}
                    height={214}
                    alt={`${validImg(fruit.image)} image`}
                  />
                </div>

                {admin ? (
                  <div className="bg-[#18181A] p-1">
                    <h3 className="text-white pt-2 text-base">
                      {" "}
                      {fruit.name}{" "}
                      <br />
                      {fruit.price}{"$"}

                    </h3>
                    <ChakraWrapper>
                      <div className="flex justify-between mt-5">
                        <DeleteProduct id={fruit._id} />
                        <UpdateProduct fruit={fruit} />
                      </div>
                    </ChakraWrapper>
                  </div>
                ) : (
                  <div className="fruit-info px-4 pb-3 bg-[#18181A] ">
                    <h3 className="text-white pt-2 text-base">
                      {" "}
                      {fruit.name}{" "}
                    </h3>

                    <p className="text-sm text-white mt-1">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dignissimos, nulla?{" "}
                    </p>

                    <h4 className="text-sm text-white my-2">
                      {" "}
                      {fruit.price}${" "}
                    </h4>

                    <div className="btns flex items-center justify-between gap-5 mt-3">
                      <div className="border-[1px] border-white text-white rounded-sm flex justify-around w-[95px] p-2 ">
                        <button>+</button>
                        <button>1</button>
                        <button>-</button>
                      </div>
                      <button className="bg-[#DEC700] text-white w-[95px] p-2 rounded-sm ">
                        Buy Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          : data.msg}
      </Suspense>
    </div>
  );
};

export default FavoriteFruits;
