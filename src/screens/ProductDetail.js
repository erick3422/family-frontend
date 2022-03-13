import React from 'react'
import '../screens/productdetail.scss'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <>
      <ul className='shopping__cart'>
        <li>
          <Link to={'/cart'} className='cart__link'>
            <i className='fa-regular fa-cart-shopping'></i>
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

      <div className='product__screen'>
        <div className='product__screen__left'>
          <div className='left__image'>
            <img src={require('../img/menudo.jpg').default} />
          </div>

          <div className='left__info'>
            <p className='left__name'>Menudo</p>
            <p>Price:$7.99</p>
            <p>Descriptions: Delicious Menudo </p>
          </div>
        </div>
        <div className='product__screen__right'>
          <div className='right__info'>
            <p>
              Price: <span>$7.99</span>
            </p>
            <p>
             Status: <span>In Stock</span>
            </p>
            <p>
             Qty
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </p>
            <p>
              <button type='button'>Add To Cart</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetail
