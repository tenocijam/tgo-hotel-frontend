import React from 'react'
import Hero from '../components/Hero'
import BookingsListing from '../components/BookingsListing'

const AdminBookings = () => {
  return (
    <>
    <Hero title="All Bookings" />
    <BookingsListing />
    </>
  )
}

export default AdminBookings