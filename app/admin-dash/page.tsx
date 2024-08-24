import React from 'react'
import PropTypes from 'prop-types'

import FavoriteFruits from "../_components/Cards/FavoriteFruits";
import { ChakraWrapper } from "../_components/Cards/HOC/ChakraWrapper";
import ProductForm from "../_components/Forms/ProductForm";

const page = async () => {
  

  return (
    <div className="lg:px-24 px-5">
      {/* add product */}
      <br />
      <ChakraWrapper>
        <ProductForm />

      </ChakraWrapper>
      <br />
      <FavoriteFruits admin={true} query='' />
      <br />
    </div>
  );
};

export default page;
