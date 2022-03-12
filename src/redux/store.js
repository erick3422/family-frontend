import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { cartReducer } from './reducers/cartReducer'
import {
  getProductDetailReducer,
  getProductsReducer
} from './reducers/productReducer'

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
)

export default store
