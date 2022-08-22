import React from 'react'
import './style.css'

export default function News() {
  return (
    <div className='news'>
      <h1>Notícias</h1>

      <div className='list-news'>

        <div className='new'>
        <span>22/05/2022</span>
        <img src="https://www.aguasdosado.pt/posts/32/image/thumb?1640280530" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam eum.</p>
        </div>

        <div className='new'>
        <span>22/05/2022</span>
        <img src="https://www.aguasdosado.pt/posts/32/image/thumb?1640280530" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam eum.</p>
        </div>

        <div className='new'>
        <span>22/05/2022</span>
        <img src="https://www.aguasdosado.pt/posts/32/image/thumb?1640280530" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam eum.</p>
        </div>
      </div>
    </div>
  )
}
