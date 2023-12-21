"use client";
import { Planet } from "@/app/interfaces/planet";
import { Product } from "@/app/interfaces/product";
import { useCart } from "@/app/utils/CartContext";
import React from "react";

export default function Cart() {
  const { cart, deleteFromCart } = useCart();

  console.log(cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item: any, index: number) => (
          <li key={index}>
            {item.product.name} - Quantity: {item.quantity}
            <span>
              <button onClick={() => deleteFromCart(item)}>delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
