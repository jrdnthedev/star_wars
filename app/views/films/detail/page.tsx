"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../detail.module.css";
import Image from "next/image";
import { Films } from "@/app/interfaces/films";
import { useCart } from "@/app/utils/CartContext";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  let num = 0;
  let films: Films = {
    id: 0,
    title: "",
    episode_id: 0,
    opening_crawl: "",
    director: "",
    producer: "",
    release_date: "",
  };
  const { addToCart } = useCart();

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      films[key] = num;
      console.log(num);
    }
    films[key] = value;
  });

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          {/* <Image
                src={films.img}
                alt={films.name + " image"}
                fill={true}
                sizes="(max-width: 768px) 100vw"
            /> */}
        </div>
        <section id={styles.details}>
          <h1>{films.title}</h1>
          <div>
            <p>Episode: {films.episode_id}</p>
            <p>director: {films.director}</p>
            <p>producer: {films.producer}</p>
            <p>release date: {films.release_date}</p>
          </div>
          <button onClick={() => addToCart(films)}>Add To Cart</button>
        </section>
        <div id={styles.background}>
          <p>description: {films.opening_crawl}</p>
        </div>
      </div>
    </>
  );
}
