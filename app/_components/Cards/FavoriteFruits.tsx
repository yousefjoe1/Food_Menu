import { fruits } from '@/app/constants/data'
import Image from 'next/image'
import React from 'react'

const FavoriteFruits = () => {

  return (
    <div className='flex gap-4 flex-wrap'>
        {
            fruits.map(fruit=>(
                <div key={fruit.id} className='lg:w-[265px]'>
                    <div className="card-img">
                        <Image src={fruit.img} className='w-full h-full' width={256} height={214} alt={`${fruit.name} image`} />
                    </div>

                    <div className="fruit-info px-4 pb-3 bg-[#18181A] ">
                        <h3 className='text-white pt-2 text-base'> {fruit.name} </h3>

                        <p className='text-sm text-white mt-1'> {fruit.details} </p>

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
            ))
        }
    </div>
  )
}

export default FavoriteFruits