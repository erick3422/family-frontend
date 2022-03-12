import React from 'react'
import '../Cart/cartitem.scss'
import { Link } from 'react-router-dom'
const CartItem = () => {
  return (
    <>
      <div className='cart__item'>
        <div className='cart__item__image'>
          <img src={require('../../img/menudo.jpg').default} />
        </div>
        <Link to={`/product/${1}`} className='cart__item__name'>
          <p>Product 1</p>
        </Link>
        <p className='cart__item__price'>$49.99</p>

        <select className='cart__item__select'>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>

        <button className='cart__item__delete'>
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
    </>
  )
}

export default CartItem
