import React from 'react'
import Header from 'components/Header'
import './AppLayout.css'

const AppLayout = ({ children, className }) => (
  <main className={`app-layout ${className}`}>
    <Header />
    { children }
  </main>
)

export default AppLayout
