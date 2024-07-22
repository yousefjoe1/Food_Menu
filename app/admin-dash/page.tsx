import React from "react";
import { ChakraWrapper } from "../_components/Cards/HOC/ChakraWrapper";
import AddProduct from "../_components/Forms/AddProduct";

const page = async () => {
  // if (process.env.NEXT_PUBLIC_USER !== "hi") {
  //   return "Not admin";
  // }

  return <div className="px-24">
    {/* add product */}
    <br />
    <ChakraWrapper>
      <AddProduct />
    </ChakraWrapper>
     </div>
};

export default page;
