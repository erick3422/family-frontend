import React from 'react'
import '../screens/menu.scss'
import Product from './Product'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <ul className='shopping__cart'>
        <li>
          <Link to={'/cart'} className='cart__link'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='cart__logo__badge'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to={'/menu'} className='shop__link'>
            <i className='fa-solid fa-store'></i>
            <span>
             Shop
            </span>
          </Link>
        </li>
      </ul>
      <div className='menu__screen'>
        <h2 className='menu__screen__title'>Best Food</h2>

        <div className='menu__screen__products'>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  )
}

export default Menu
