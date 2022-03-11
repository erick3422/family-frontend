import React from 'react'
import '../screens/productdetail.scss'

const ProductDetail = () => {
  return (
    <>
      <div className='product__screen'>
        <div className='product__screen__left'>
          <div className='left__image'>
            <img src={require('../img/menudo.jpg').default} />
          </div>

          <div className='left__info'>
            <p className='left__name'>Product 1</p>
            <p>Price:$49.99</p>
            <p>Description: Some goes here </p>
          </div>
        </div>
        <div className='product__screen__right'>
          <div className='right__info'>
            <p>
            Price: <span>$49.99</span>
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
