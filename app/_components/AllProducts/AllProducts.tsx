import React from "react";
import useFetch from "@/app/_hooks/useFetch";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";

import { ProductItem } from "@/app/Interfaces/Interface";

import DeleteProduct from "../UpdateDelete/DeleteProduct";
import UpdateProduct from "../UpdateDelete/UpdateProduct";

import ProductForm from "../Forms/ProductForm";

const AllProducts = () => {

  const { data, isLoading, isError,refetch } = useFetch("products", "p", true, true);

  return (
    <div>
      {/* <h2 className="text-center text-white text-2xl pb-8">All Products</h2> */}
      <Accordion allowToggle>
        <AccordionItem>
          <h2 className="">
            <AccordionButton display={'flex'} justifyContent={'center'}>
              <Box as="div" fontSize={20} color={'orange'}>
                Add Product
              </Box>
              <AccordionIcon color={'orange'} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ProductForm />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br />
      {isLoading ? (
        <div className="flex gap-5 items-center">
          <h3>Loading .....</h3>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="sm"
          />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-5">
          {data?.data?.map((fruit: ProductItem) => (
            <div key={fruit["_id"]} className="lg:w-[265px]">
              <div className="card-img w-full h-[214px]">
                <Image
                  src={`${`${fruit.image}`}`}
                  className="w-full object-cover h-full"
                  width={256}
                  height={214}
                  alt={`${fruit.image} image`}
                />
              </div>

              <div className="bg-[#18181A] p-1">
                <h3 className="text-white pt-2 text-base">
                  {" "}
                  {fruit.name} <br />
                  {fruit.price}
                  {"$"}
                </h3>

                <div className="fruit-info px-4 pb-3 bg-[#18181A] ">
                  <p className="text-sm text-white mt-1">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos, nulla?{" "}
                  </p>
                </div>

                <div className="flex justify-between mt-5">
                  <DeleteProduct id={fruit._id} isRefetch={true} refetchFn={()=> refetch()} />
                  <UpdateProduct fruit={fruit}  isRefetch={true} refetchFn={()=> refetch()}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {isError && (
        <div className="flex gap-5 items-center">
          <h3>Error .....</h3>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="sm"
          />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
