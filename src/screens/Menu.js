import React from 'react'
import '../screens/menu.scss'
import Product from './Product'
const Menu = () => {
  return (
    <>
      <div className='menu__screen'>
        <h2 className='menu__screen__title'>Best Food</h2>

        <div className='menu__screen__products'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </>
  )
}

export default Menu
