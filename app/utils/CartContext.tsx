"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "@/app/interfaces/product";

// Define the cart item type
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the context type
interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

// Define the reducer function
const cartReducer = (
  state: CartItem[],
  action: { type: string; payload: Product }
): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      console.log(action.payload, action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...state, { product: action.payload, quantity: 1 }];
      }
    case "DELETE":
      const itemToDelete = state.findIndex(
        (item) => Number(item.product.id) === Number(action.payload.product.id)
      );

      if (itemToDelete !== -1) {
        const updatedCart = [...state];
        if (updatedCart[itemToDelete].quantity > 1) {
          updatedCart[itemToDelete].quantity -= 1;
          return updatedCart;
        } else {
          updatedCart.splice(itemToDelete, 1);
          return updatedCart;
        }
      } else {
        console.log("item not found", itemToDelete);
      }
    default:
      return state;
  }
};

// Define the context provider
interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const deleteFromCart = (product: Product) => {
    dispatch({ type: "DELETE", payload: product });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
