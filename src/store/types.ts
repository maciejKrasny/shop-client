export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export type ShopAction = {
  type: typeof LOAD_PRODUCTS | typeof LOAD_CART | typeof ADD_PRODUCT_TO_CART | typeof REMOVE_PRODUCT_FROM_CART | typeof CLEAR_CART;
  productCartId: number;
  products: ProductProps[];
  cartProducts: CartProductProps[];
};

export interface ProductProps {
  id: number;
  name: string;
  description: string,
  price: number;
  imageURL: string;
};

export interface CartProductProps extends ProductProps {
  amount: number;
};

export interface ShopState  {
  products: ProductProps[];
  cart: CartProductProps[];
};

export const initalState: ShopState = {
  products: [],
  cart: [],
};