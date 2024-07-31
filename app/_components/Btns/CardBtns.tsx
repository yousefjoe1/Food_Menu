"use client";
import { addToCart } from "@/app/actions/addToCart";
import { ProductItem } from "@/app/Interfaces/Interface";
import { Spinner, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const CardBtns = ({ fruit }: { fruit: ProductItem }) => {
  const msg = useToast();
  const [isSubmit, setIsSubmit] = useState(false);

  const [productCount, setProductCount] = useState(1);

  const addToCartFunc = async () => {
    const data = {
      product: fruit,
      count: productCount,
    };

    
    setIsSubmit(true);
    const resp = await addToCart(data);
    setIsSubmit(false);
    if(resp.code == 404){
      msg({ title: 'Login first', status: "info", duration: 3000 ,isClosable:true});
      return
    }

    if (resp.product == true) {
      msg({ title: 'product exist in the cart', status: "info", duration: 3000,isClosable:true });
    } else {
      msg({ title: 'product added to the cart', status: "success", duration: 3000,isClosable:true });
    }
  };

  const handleCount = (type:string) => {
    if(type == '+'){
      setProductCount(p=> p + 1)
    }

    if(type == '-'){
      if(productCount > 1){
        setProductCount(p=> p - 1)
      }
    }

  }

  return (
    <div className="btns flex items-center justify-between gap-5 mt-3">
      <div className="border-[1px] border-white text-white rounded-sm flex justify-around w-[95px] p-2 ">
        <button onClick={()=> handleCount('+') }>+</button>
        <button>{productCount} </button>
        <button onClick={()=> handleCount('-') }>-</button>
      </div>
      {isSubmit ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="sm"
        />
      ) : (
        <button
          onClick={addToCartFunc}
          className="bg-[#DEC700] text-white w-[95px] p-2 rounded-sm "
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

export default CardBtns;
