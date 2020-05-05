export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export type ShopAction = {
  type: typeof LOAD_PRODUCTS | typeof ADD_PRODUCT_TO_CART | typeof REMOVE_PRODUCT_FROM_CART;
  productCartId: number;
  products: ProductProps[];
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