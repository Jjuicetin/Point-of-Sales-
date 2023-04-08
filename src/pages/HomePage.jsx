import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <MainLayout>
      <div className='bg-light p-5 mt-4 rounded-3'>
        <h1>tee hee :3</h1>
        <Link to='/service' className='btn btn-primary'>Click to sell stuff</Link>
      </div>
    </MainLayout>
  )
}

export default HomePage

