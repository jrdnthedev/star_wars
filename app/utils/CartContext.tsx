"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "@/app/interfaces/product";

// Define the cart item type
interface CartItem {
  product: Product;
  quantity: number;
}

// Define the context type
interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product) => void;
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
        (item) => item.product.name === action.payload.name
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...state, { product: action.payload, quantity: 1 }];
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

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
