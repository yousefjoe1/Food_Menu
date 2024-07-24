import { ChakraWrapper } from '@/app/_components/Cards/HOC/ChakraWrapper'
import Login from '@/app/_components/Forms/Login'
import Register from '@/app/_components/Forms/Register'
import React from 'react'

const page = () => {
  return (
    <div>
      <ChakraWrapper>
        <Register />
        <h4 className='bg-slate-400 p-3 rounded-xl mx-3 text-center'>Login</h4>
        <Login />
      </ChakraWrapper>
    </div>
  )
}

export default page