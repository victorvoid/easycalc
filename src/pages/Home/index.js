import React from 'react'
import AppLayout from 'layouts/AppLayout'
import Calculator from 'components/Calculator'
import './Home.css'

const Home = () => (
  <AppLayout className='home'>
    <Calculator />
  </AppLayout>
)

export default Home
