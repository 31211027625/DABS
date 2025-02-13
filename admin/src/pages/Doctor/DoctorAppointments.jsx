import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorAppointments = () => {
    const { dToken,appointments,getAppointments} = useContext(DoctorContext)
    useEffect(() => {
        if(dToken){
            getAppointments()
        }
    },[dToken])
  return (
    <div className='w-full max-w-6xl m-5'>
        <p className='mb-3 text-lg font-medium'>All Apppointments</p>
        <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll '>
          <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
            <p className=''>#</p>
            <p className=''>Patient</p>
            <p className=''>Payment</p>
            <p className=''>Age</p>
            <p className=''>Date & Time</p>
            <p className=''>Fees</p>
            <p className='hidden'>Action</p>
          </div>
        </div>
    </div>
  )
}

export default DoctorAppointments