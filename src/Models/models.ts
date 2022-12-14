import { ReactNode } from 'react';
export interface ProductProps {
  id: string;
  name: string;
  seller: string;
  price: number;
  ratings: number;
  img: string;
  stock: number;
  category: string;
}
export interface IProduct {
  product: ProductProps;
}
export type IProducts = ProductProps[];
export type ShoppingCartProviderProps = {
  children: ReactNode;
};
export type CartItemType = {
  id: string;
  quantity: number;
};

export type ShoppingCartValue = {
  getQuantity: (id: string) => number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeQuantity: (id: string) => void;
  cartItems?: CartItemType[];
  cartQuantity: number;
};
