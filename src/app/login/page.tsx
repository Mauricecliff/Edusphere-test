import Login from '@/screens/login'
import React from 'react'

export default function page() {
  return (
    <div className="flex justify-center">
        <div className="login justify-center items-center hidden md:flex">
            <img src="./d-image.png" alt="display-image" />
        </div>
        <div className='w-[100%] md:w-[50%] px-5 mt-5'>
          <Login />
        </div>     
    </div>
  )
}
