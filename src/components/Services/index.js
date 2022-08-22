import React from 'react'
import './style.css'

import { FaHandHoldingWater } from 'react-icons/fa';
import { MdWaterDamage } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import {GiWaterRecycling} from 'react-icons/gi'

export default function Services() {
  return (
    <div className='services'>
      <h1>Serviços</h1>

      <div className='list-services'>

        <div className='service'>
          <MdWaterDamage size={50} color='#032F64' />
          <h2>A Empresa</h2>
        </div>
        <div className='service'>
          <FaHandHoldingWater size={50} color='#032F64' />
          <h2>Estou sem Água</h2>
        </div>

        <div className='service'>
          <BiSupport size={50} color='#032F64' />
          <h2>Apoio ao Cliente</h2>
        </div>

        <div className='service'>
          <GiWaterRecycling size={50} color='#032F64' />
          <h2>Qualidade da Água</h2>
        </div>
      </div>
    </div>
  )
}
