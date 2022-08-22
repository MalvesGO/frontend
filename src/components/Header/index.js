import React from 'react'
import './style.css'

import { AiOutlineLogin } from 'react-icons/ai';

export default function Header() {
  return (
    <div className='header'>
      <div className="container-logo">
        <img className='logo' src="https://www.aguasdosado.pt/settings/1/logo/original?1557410311" alt="" />
      </div>
      <input className='search' type="text" placeholder='Buscar' />
      <div className='login'>
        <AiOutlineLogin fontSize={22} className='icon' />
        <p>Aceder</p>
      </div>
    </div>
  )
}
