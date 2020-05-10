import { initalState, ShopAction, LOAD_PRODUCTS, ADD_PRODUCT_TO_CART, CartProductProps, REMOVE_PRODUCT_FROM_CART, LOAD_CART, CLEAR_CART } from "./types";

export const ShopReducer = (state = initalState, action: ShopAction) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case LOAD_CART:
      return {
        ...state,
        cart: action.cartProducts,
      };
    case ADD_PRODUCT_TO_CART:
      const cartProductIndex = state.cart.findIndex(product => product.id === action.productCartId);
      if (cartProductIndex !== -1) {
        const updatedCartProduct: CartProductProps = { ...state.cart[cartProductIndex], amount: state.cart[cartProductIndex].amount + 1 };
        const updatedCart = [ ...state.cart ];
        updatedCart[cartProductIndex] = updatedCartProduct;
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const productToCart = state.products.find(product => product.id === action.productCartId);
      localStorage.setItem('cart', JSON.stringify([ ...state.cart, { ...productToCart, amount: 1 } ]));
      return {
        ...state,
        cart: [ ...state.cart, { ...productToCart, amount: 1 } ],
      };
    case REMOVE_PRODUCT_FROM_CART: 
      const cartProductToRemoveIndex = state.cart.findIndex(product => product.id === action.productCartId);
      if (cartProductToRemoveIndex !== -1 && state.cart[cartProductToRemoveIndex].amount > 1) {
        const updatedCartProduct: CartProductProps = { ...state.cart[cartProductToRemoveIndex], amount: state.cart[cartProductToRemoveIndex].amount - 1 };
        const updatedCart = [ ...state.cart ];
        updatedCart[cartProductToRemoveIndex] = updatedCartProduct;
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const updatedCart = state.cart.filter(product => product.id !== action.productCartId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      }
    case CLEAR_CART: 
    localStorage.setItem('cart', JSON.stringify([]));
    return {
      ...state,
      cart: [],
    }
    default: 
      return state;
  }
}