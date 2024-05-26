import React from 'react'
import Sidebar from '../Sidebar'
import Hero from '../Hero'

const Home = () => {
  return (
    <div className='flex gap-7'>
        <Sidebar/>
        <Hero/>
    </div>
  )
}

export default Home