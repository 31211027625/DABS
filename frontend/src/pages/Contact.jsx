import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>LIÊN HỆ <span className='text-gray-700 font-semibold'>CHÚNG TÔI</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact_image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>VĂN PHÒNG</p>
          <p className='text-gray-500'> 01 HÙNG VƯƠNG, TP HUẾ <br /> THỪA THIÊN HUẾ, VIỆT NAM</p>
          <p className='text-gray-500'>SDT: 0945712321 <br /> Email: ldnhatvu1304@gmail.com</p>
          <p className='font-semibold text-lg text-gray-500'>BẠN MUỐN HỢP TÁC VỚI CHÚNG TÔI</p>
          <p className='text-gray-500'>Tìm hiểu thêm về các nhóm và việc làm của chúng tôi.</p>
          <button className='py-4 px-8 text-sm border border-black hover:bg-black cursor-pointer hover:text-white transition-all duration-500'>Khám phá việc làm</button>
        </div>
      </div>
    </div>
  )
}

export default Contact