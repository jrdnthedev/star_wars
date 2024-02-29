"use client";
import { useCart } from "@/app/utils/CartContext";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./cart.module.css";

export default function Cart() {
  const { cart, deleteFromCart } = useCart();
  return (
    <div>
      <div id={styles.cartWrapper}>
        <div id={styles.listView}>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item: any, index: number) => (
              <li key={index}>
                <div className={styles.listItem}>
                  <span>
                    {item.product.img ? (
                      <Image
                        src={item.product.img}
                        alt={item.product.name || item.product.title + " image"}
                        fill={true}
                        sizes="(max-width: 768px) 100vw"
                      />
                    ) : (
                      <span className={styles.emptyImg}></span>
                    )}
                  </span>
                  <span className={styles.listItemDescription}>
                    {item.product.name || item.product.title} - Quantity:
                    {" " + item.quantity}
                  </span>
                  <span>
                    <button onClick={() => deleteFromCart(item)}>delete</button>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div id={styles.summaryView}>
          <h2>Summary</h2>
          <div id={styles.summaryDetails}>
            <p>
              <span>Items</span>
              <span>{cart.length}</span>
            </p>
            <p>
              <span>Quantity</span>
              <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
