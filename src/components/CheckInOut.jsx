import React from 'react'
import DateInput from "../components/DateInput"
import Button from "../components/Button"
import { Link } from 'react-router-dom'

const CheckInOut = () => {
  return (
    <>
        <div className='flex justify-center gap-16 items-center px-32 rounded-full bg-white  shadow-lg'>
            <DateInput />
            <Link to="/booking" className="text-white text-lg bg-primary h-fit px-4 py-2 rounded-lg hover:bg-primary-hover">Book now</Link>
        </div>
    </>
  )
}

export default CheckInOut