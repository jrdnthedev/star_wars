"use client";
import { useCart } from "@/app/utils/CartContext";
import React from "react";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item: any, index: number) => (
          <li key={index}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
