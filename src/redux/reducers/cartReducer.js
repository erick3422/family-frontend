import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  const item = action.payload

  const existItem = state.cartItems.find((x) => x.product === item.product)

  switch (action.type) {
  case actionTypes.ADD_TO_CART:
    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        )
      }
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item]
      }
    }
  case actionTypes.REMOVE_FROM_CART:
    return {
      ...state,
      cartItems: state.cartItems.filter((x) => x.product !== action.payload)
    }

  default:
    return state
  }
}
