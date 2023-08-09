'use client'
import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <InfinitySpin color='#FF961B' />
    </div>
  )
}

export default Loader