"use client";
import { Product } from "@/app/interfaces/product";
import { CartItem } from "./CartContext";

// Define the reducer function
export const cartReducer = (
  state: CartItem[],
  action: { type: string; payload: Product }
): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(
        (item) => item.product.id === action.payload.id
      );
      console.log(action.payload, action.payload);
      if (existingItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...state, { product: action.payload, quantity: 1 }];
      }
    case "DELETE":
      const itemToDelete = state.findIndex(
        (item) => Number(item.product.id) === action.payload.product.id
      );
      console.log(action.payload, state);
      if (itemToDelete !== -1) {
        console.log("item found", itemToDelete);
      } else {
        console.log("item not found", itemToDelete);
      }
    default:
      return state;
  }
};
