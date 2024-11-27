import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero' 

const EventsPage = () => {
  return (
    <>
        <Navbar />
        <div className='flex flex-col space-y-8 md:space-y-16'>
            <Hero title="Our Events" image="/images/serene/img7.jpg" />
        </div>
        <Footer />
    </>
  )
}

export default EventsPage