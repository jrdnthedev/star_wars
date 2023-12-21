"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./detail.module.css";
import Image from "next/image";
import { Planet } from "@/app/interfaces/planet";
import { useCart } from "@/app/utils/CartContext";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  let num = 0;
  let planet: Planet = {
    id: 0,
    name: "",
    terrain: "",
    gravity: "",
    population: "",
    img: "",
  };
  const { addToCart } = useCart();

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      planet[key] = num;
      console.log(num);
    }
    planet[key] = value;
  });

  console.log(planet);
  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          <Image
            src={planet.img}
            alt={planet.name + " image"}
            fill={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <section id={styles.planet_details}>
          <h1>{planet.name}</h1>
          <div>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
            <p>Gravity: {planet.gravity}</p>
          </div>
          <button onClick={() => addToCart(planet)}>Add To Cart</button>
        </section>
      </div>
    </>
  );
}
