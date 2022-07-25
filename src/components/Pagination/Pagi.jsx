import React from 'react'
// import Button from '../Button/Button'
import './style.scss'
export default function Pagi() {

  return (
    <div className='pagi-contain'>
        <button className='btn'>{'<'}</button>
        <button className='btn btn--active'>1</button>
        <button className='btn'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>{'>'}</button>
    </div>
  )
}
