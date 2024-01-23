import React from 'react'
import Slider from '../component/Slider'
import Card from '../component/Card'

export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='max-w-[70vw]'>
            <Slider/>
        </div>
        <div className='bg-gray-900 w-full flex justify-center mp-10 h-48 items-center flex-col'>
            <p className='text-white font-lemon'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus.
            </p>
            <button className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center 
            decoration-none bg-[#ff5252] border-white border-[2px] rounded-[10px]  shadow-white shadow-[5px_5px_0px_black] duration-[0.3s] hover:bg-white hover:text-[#ff5252] hover:border-[#ff5252] hover:shadow-[#ff5252] active:bg-[#fcf414] active:shadow-none active:translate-y-[4px]'>Explore Now</button>
        </div>
        <div className='flex flex-row'>
          <Card title={"Metal"} image={"https://img.icons8.com/windows/32/steel-i-beam.png"}/>
          <Card title={"copper"} image={"https://img.icons8.com/plasticine/100/copper-bars.png"}/>
          <Card title={"steel"} image={"https://img.icons8.com/plasticine/100/steel.png"}/>
        </div>
    </div>
  )
}
