import React from 'react'
import '../screens/product.scss'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <div className='product'>
        <img src={require('../img/menudo.jpg').default} />

        <div className='product__info'>
          <p className='info__name'>Menudo</p>
          <p className='info_description'>Delicious Menudo</p>

          <p className='info__price'>$7.99</p>

          <Link to={`/product/${1}`} className='info__button'>
        View
          </Link>
        </div>
      </div>

      <div className='product'>
        <img src={require('../img/tacos.jpg').default} />

        <div className='product__info'>
          <p className='info__name'>Tacos</p>
          <p className='info_description'>Delicious Tacos</p>

          <p className='info__price'>$9.99</p>

          <Link to={`/product1/${2}`} className='info__button'>
        View
          </Link>
        </div>
      </div>

      <div className='product'>
        <img src={require('../img/pizza.jpg').default} />

        <div className='product__info'>
          <p className='info__name'>Pizza Napoletana</p>
          <p className='info_description'>Best Italian Pizza</p>

          <p className='info__price'>$30.99</p>

          <Link to={`/product2/${2}`} className='info__button'>
         View
          </Link>
        </div>
      </div>

      <div className='product'>
        <img src={require('../img/hamburgher.jpg').default} />

        <div className='product__info'>
          <p className='info__name'>Hamburgher with Fries</p>
          <p className='info_description'>
         Best Hamburgher with accompany in the best Fries in the town.
          </p>

          <p className='info__price'>$20.99</p>

          <Link to={`/product3/${2}`} className='info__button'>
         View
          </Link>
        </div>
      </div>

      <div className='product'>
        <img src={require('../img/mondogo.jpg').default} />

        <div className='product__info'>
          <p className='info__name'>Mondogo</p>
          <p className='info_description'>
          Best Colombian Mondogo around the world.
          </p>

          <p className='info__price'>$20.99</p>

          <Link to={`/product4/${2}`} className='info__button'>
        View
          </Link>
        </div>
      </div>
    </>
  )
}

export default Product
