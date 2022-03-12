import React from 'react'
import '../screens/product.scss'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <div className='product'>
        <img src={require('../img/menudo.jpg').default} />

        <div className='product__info'>
          <p className='info__name'>Product 1</p>
          <p className='info_description'>
            Here is a future description of the product
          </p>

          <p className='info__price'>$49.99</p>

          <Link to={`/product/${1}`} className='info__button'>
            View
          </Link>
        </div>
      </div>
    </>
  )
}

export default Product