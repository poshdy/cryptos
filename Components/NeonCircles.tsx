import React from 'react'

const NeonCircles = () => {
  return (
    <section className=' fixed -z-20 w-full h-full'>
<div className='w-[80px] h-[80px] absolute left-5 top-8 blur-3xl bg-[#F47AFF] rounded-full shadow'></div>
<div className='w-[80px] h-[80px] blur-3xl absolute right-20 top-56 bg-[#FF961B] rounded-full shadow'></div>
<div className='w-[80px] h-[80px] absolute blur-3xl left-5 bottom-10 bg-[#8D7AFF] rounded-full shadow'></div>
<div className='w-[80px] h-[80px] absolute blur-3xl right-0 bottom-10  bg-[#BDFF7A] rounded-full shadow'></div>
    </section>
  )
}

export default NeonCircles