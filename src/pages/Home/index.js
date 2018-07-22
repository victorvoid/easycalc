import React from 'react'
import AppLayout from 'layouts/AppLayout'
import Calculator from 'components/Calculator'
import Container from 'components/Container'
import './Home.css'

const Home = () => (
  <AppLayout className='home'>
    <Container>
      <h1 className="title">Meu salário</h1>
    </Container>
    <Calculator />
  </AppLayout>
)

export default Home
