import React, { Suspense } from 'react'
import { getData } from '../actions/getProducts';
import { ChakraWrapper } from '../_components/Cards/HOC/ChakraWrapper';
import DeleteProduct from '../_components/UpdateDelete/DeleteProduct';
import UpdateProduct from '../_components/UpdateDelete/UpdateProduct';
import CardBtns from '../_components/Btns/CardBtns';
import Image from 'next/image';
import { ProductItem } from '../Interfaces/Interface';

const AllFruits = async () => {

  const data = await getData(`products`);

  return (
    <div className='p-5'>
        <h3 className='text-center text-white font-bold lg:text-2xl text-lg'>All Fruits</h3>
        <br />

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

                {false ? (
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

    </div>
  )
}

export default AllFruits