"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../planets/detail/detail.module.css";
import Image from "next/image";
import { Ship } from "@/app/interfaces/ship";
import { useCart } from "@/app/utils/CartContext";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  const { addToCart } = useCart();
  let num = 0;
  let ship: Ship = {
    id: 0,
    consumables: "",
    max_atmosphering_speed: "",
    model: "",
    name: "",
    img: "",
    starship_class: "",
    cargo_capacity: 0,
    cost_in_credits: 0,
    crew: 0,
    hyperdrive_rating: 0,
    length: 0,
    passengers: 0,
    manufacturer: "",
  };

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      ship[key] = num;
      console.log(num);
    }
    ship[key] = value;
  });
  console.log(ship);
  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          <Image
            src={ship.img}
            alt={ship.name + " image"}
            fill={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <section id={styles.planet_details}>
          <h1>{ship.name}</h1>
          <div>
            <p>Model: {ship.model}</p>
            <p>manufacturer: {ship.manufacturer}</p>
            <p>Cost: {ship.cost_in_credits}</p>
            <p>Class: {ship.starship_class}</p>
            <p>Speed: {ship.max_atmosphering_speed}</p>
            <p>Length: {ship.length}</p>
            <p>Consumables: {ship.consumables}</p>
            <p>Class: {ship.starship_class}</p>
            <p>Description: {ship.description}</p>
            <p>History: {ship.history}</p>
          </div>
          <button onClick={() => addToCart(ship)}>Add To Cart</button>
        </section>
      </div>
    </>
  );
}
