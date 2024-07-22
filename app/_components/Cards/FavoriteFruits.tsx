import Image from 'next/image'
import React, { Suspense } from 'react'

import { getData } from '@/app/actions/getProducts'

import { ProductItem } from '@/app/Interfaces/Interface'

const FavoriteFruits = async () => {
    const data = await getData(`products`)

  return (
    <div className='flex gap-4 flex-wrap'>
        <Suspense fallback={'.... Loading ....'} >
            {
                data.status == 'success' ? data.data.map((fruit:ProductItem)=>(
                    <div key={fruit.id} className='lg:w-[265px]'>
                        <div className="card-img w-full h-[214px]">
                            <Image src={fruit.image} className='w-full object-cover h-full' width={256} height={214} alt={`${fruit.name} image`} />
                        </div>

                        <div className="fruit-info px-4 pb-3 bg-[#18181A] ">
                            <h3 className='text-white pt-2 text-base'> {fruit.name} </h3>

                            <p className='text-sm text-white mt-1'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, nulla? </p>

                            <h4 className='text-sm text-white my-2'> {fruit.price}$ </h4>

                            <div className="btns flex items-center justify-between gap-5 mt-3">
                                <div className='border-[1px] border-white text-white rounded-sm flex justify-around w-[95px] p-2 '>
                                    <button>+</button>
                                    <button>1</button>
                                    <button>-</button>
                                </div>
                                <button className='bg-[#DEC700] text-white w-[95px] p-2 rounded-sm '>
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </div>
                )):
                data.msg
            }
        </Suspense>
    </div>
  )
}

export default FavoriteFruits