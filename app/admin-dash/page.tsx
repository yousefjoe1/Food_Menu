import React from "react";
import { ChakraWrapper } from "../_components/Cards/HOC/ChakraWrapper";
import AddProduct from "../_components/Forms/AddProduct";
import FavoriteFruits from "../_components/Cards/FavoriteFruits";

const page = async () => {
  // if (process.env.NEXT_PUBLIC_USER !== "hi") {
  //   return "Not admin";
  // }

  return <div className="lg:px-24 px-5">
    {/* add product */}
    <br />
    <ChakraWrapper>
      <AddProduct />
    </ChakraWrapper>
    <br />
    <FavoriteFruits admin={true} />
    <br />
     </div>
};

export default page;
