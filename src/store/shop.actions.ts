import Axios from "axios";
import { LOAD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, LOAD_CART, CLEAR_CART } from "./types";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const loadProducts = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    Axios.get('http://localhost:8080/product', {
      headers: {}
    })
    .then(response => {
      dispatch({ type: LOAD_PRODUCTS, products: response.data });
    })  
  };
}

export const loadCart = () => {
  return (dispatch: Dispatch<AnyAction>) => {
   const cart = localStorage.getItem("cart");
   if (cart) {
     dispatch({ type: LOAD_CART, cartProducts: JSON.parse(cart) });
   }
  };
}

export const addProductToCart = (id: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, productCartId: id});
  }
}

export const removeProductFromCart = (id: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, productCartId: id});
  }
}

export const clearCart = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: CLEAR_CART });
  }
}