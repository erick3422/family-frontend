import React from 'react'
import '../screens/cart.scss'
import { Link } from 'react-router-dom'
import CartItem from '../components/Cart/CartItem'

const Cart = () => {
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
            <span>Shop</span>
          </Link>
        </li>
      </ul>
      <div className='cart__screen__left'>
        <h2>Shopping Cart</h2>

        <CartItem />
      </div>
      <div className='cart__screen__right'>
        <div className='cart__screen__info'>
          <p>Subtotal (0) items</p>
          <p>$49.99</p>
        </div>
        <div className='button__checkout'>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
