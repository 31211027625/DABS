import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  '>
        {/*Left*/}
        <div className=''>
          <img className='mb-5 w-40' src={assets.logo} alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit facere eaque fugit asperiores necessitatibus, ratione sit omnis, totam vero natus consequuntur maiores impedit expedita? Suscipit deleniti atque architecto alias.</p>
        </div>
        {/*Center*/}
        <div>
          <p className='text-xl font-medium mb-5'>Chúng tôi</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Trang chủ</li>
            <li>Về chúng tôi </li>
            <li>Liên hệ</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
        {/*Right*/}
        <div>
          <p className='text-xl font-medium mb-5'>Thông tin liên lạc</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>0945712321</li>
            <li>ldnhatvu1304@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright Text */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center font-semibold'>Copyright...----------------------</p>
      </div>
    </div>
  )
}

export default Footer