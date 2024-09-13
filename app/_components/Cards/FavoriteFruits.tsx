import Image from "next/image";
import React, { Suspense } from "react";

import { getData } from "@/app/actions/getProducts";

import { ProductItem } from "@/app/Interfaces/Interface";
import DeleteProduct from "../UpdateDelete/DeleteProduct";
import { ChakraWrapper } from "./HOC/ChakraWrapper";
import UpdateProduct from "../UpdateDelete/UpdateProduct";
import CardBtns from "../Btns/CardBtns";

const FavoriteFruits = async ({ admin,query }: { admin: boolean,query: string }) => {
  const data = await getData(`products${query}`);
// console.log(data,'products - FavoriteFruits');

  return (
    <div className="flex gap-4 flex-wrap">
      <Suspense fallback={".... Loading ...."}>
        {data.status == 'success'
          ? data.data.map((fruit: ProductItem) => (
              <div key={fruit["_id"]} className="lg:w-[265px]">
                <h3></h3>
                <div className="card-img w-full h-[214px]">

                  <Image
                    src={`${`${fruit.image}`}`}
                    className="w-full object-cover h-full"
                    width={256}
                    height={214}
                    alt={`${fruit.image} image`}
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
                      <DeleteProduct id={fruit._id} isRefetch={true} refetchFn={ ()=> {} } />
                      <UpdateProduct fruit={fruit}  isRefetch={true} refetchFn={()=> {} }/>
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
                    <ChakraWrapper>
                    <CardBtns fruit={fruit} />
                    </ChakraWrapper>
                  </div>
                )}
              </div>
            ))
          : <span className="text-white">{data.msg}</span>}
      </Suspense>
    </div>
  );
};

export default FavoriteFruits;
