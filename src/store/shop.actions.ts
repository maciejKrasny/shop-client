import Axios from "axios";
import { LOAD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./types";
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

export const addProductToCart = (id: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, id: id});
  }
}

export const removeProductFromCart = (id: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, id: id});
  }
}