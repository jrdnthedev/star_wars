"use client";
import Link from "next/link";
import styles from "./links.module.css";
import { useCart } from "@/app/utils/CartContext";
import { useEffect, useState } from "react";

export default function Links() {
  const { cart } = useCart();
  const [isToggle, setToggle] = useState(false);

  useEffect(() => {});

  const toggleMenu = () => {
    setToggle(!isToggle);
  };
  return (
    <>
      <div id="mobile-menu" onClick={toggleMenu}>
        <div id="hamburger_icon" className={isToggle ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={isToggle ? "open" : ""}>
        <ul id={styles.main_nav}>
          <li>
            <Link href="/views/planets" replace>
              Planets
            </Link>
          </li>
          <li>
            <Link href="/views/spaceships" replace>
              Spaceships
            </Link>
          </li>
          <li>
            <Link href="/views/vehicles" replace>
              Vehicles
            </Link>
          </li>
          {/* <li>
            <Link href="/views/people" replace>
              People
            </Link>
          </li> */}
          <li>
            <Link href="/views/films" replace>
              Films
            </Link>
          </li>
          <li id={styles.cart}>
            <span className={cart.length ? "dot" : ""}>{cart.length}</span>
            <Link href="/views/cart" replace>
              Cart
            </Link>
          </li>
        </ul>
        <span>
          <Link href="/">SW</Link>
        </span>
        <span>Icons</span>
      </nav>
    </>
  );
}
