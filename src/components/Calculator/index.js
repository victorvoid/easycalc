import React from 'react'
import enhancer from 'enhancers/Calculator'
import PaymentDetails from 'components/PaymentDetails'
import './Calculator.css'

const Calculator = ({ grossSalary, onChange }) => (
  <div className='calculator'>
    <form className='calculator-form'>
      <label htmlFor='value' className='input-label'>
        Seu salário bruto é
      </label>
      <input
        type='text'
        id='value'
        onChange={onChange}
        className='input-value'
        placeholder='R$: 0,00'
        value={grossSalary} />
    </form>
    <PaymentDetails />
  </div>
)

export default enhancer(Calculator)
