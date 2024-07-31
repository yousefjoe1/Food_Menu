import React, { Suspense } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Image from "next/image";
import { getCart } from "../actions/getCart";
import { ChakraWrapper } from "../_components/Cards/HOC/ChakraWrapper";
import DeleteCart from "../_components/UpdateDelete/DeleteCart";

interface Product {
  name: string;
  _id: string;
  image: string;
  price: string;
}

interface Item {
  _id: string;
  user_id: string;
  product: Product;
  count: string;
}

const page = async () => {
  const cart = await getCart("cart");
  console.log(cart,'cart');
  
  const validImg = (str: string) => {
    let strType = str.slice(-3);

    if (strType != "jpg") {
      return "https://t3.ftcdn.net/jpg/00/74/73/92/360_F_74739200_WG1Fdy15mIVeQapC6LqiaoLqNLPFVqzr.jpg";
    } else {
      return str;
    }
  };

  return (
    <section className="bg-slate-500 p-3 min-h-svh ">
      <Suspense fallback={".... Loading ...."}>

        {cart.status == "success"
          ? <>
        <h3 className="text-3xl rounded-xl bg-slate-900 text-yellow-50 p-2">
          Total : {cart.total}
        </h3>
          {

          cart.data.map((item: Item) => (
              <div
                key={item._id}
                className="bg-slate-600 flex justify-between mt-5 rounded-xl overflow-hidden"
              >
                <div className="flex gap-2">
                  <div className="img-wrapper w-[200px] ">
                    <Image
                      src={validImg(item.product.image)}
                      className="w-full h-full"
                      height={200}
                      width={200}
                      alt={`${item.product.name} image`}
                    />
                  </div>
                  <div className="pr-info">
                    <h2 className="text-xl font-semibold text-yellow-100">{item.product.name}</h2>
                    <h2 className="text-lg text-slate-400 mt-3 font-medium">{item.product.price} $</h2>
                    <h2 className="text-lg text-slate-400 mt-3 font-medium bg-slate-700 rounded-2xl p-2 w-fit ">{item.count}</h2>
                  </div>
                </div>

                <ChakraWrapper>
                  <DeleteCart productId={item._id} />
                </ChakraWrapper>
              </div>
            ))
          }
          </>
          : "No data available"}
      </Suspense>
    </section>
  );
};

export default page;
