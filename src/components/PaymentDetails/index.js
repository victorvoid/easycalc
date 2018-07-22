import React from 'react'
import './PaymentDetails.css'

const PaymentDetails = () => (
  <div className='payment-details'>
    <div className='gross-value'>
      <span className='description'>Seu sálario líquido será</span>
      <span className='value'> R$ 35.744,29 </span>
    </div>

    <h2 className='title'>Descontos</h2>
    <ul className='details'>
      <li className='item'>
        <div>
          <h3 className='title'>INSS</h3>
          <p className='description'>
            Valor retido na fonte para inss
          </p>
        </div>
        <span className='value'>542,00</span>
      </li>
      <li className='item'>
        <div>
          <h3 className='title'>IRRF</h3>
          <p className='description'>
            Valor retido na fonte para irrf
          </p>
        </div>
        <span className='value'>542,00</span>
      </li>
    </ul>
  </div>
)

export default PaymentDetails
