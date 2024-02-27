"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../detail.module.css";
import Image from "next/image";
import { useCart } from "@/app/utils/CartContext";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  let num = 0;

  let pageDetails: any = {};

  const { addToCart } = useCart();

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      pageDetails[key] = num;
      console.log(num);
    }
    pageDetails[key] = value;
  });

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          {/* <Image
                    src={pageDetails.img}
                    alt={pageDetails.name | pageDetails.title + " image"}
                    fill={true}
                    sizes="(max-width: 768px) 100vw"
                /> */}
        </div>
        <section id={styles.details}>
          <h1>{pageDetails.title || pageDetails.name}</h1>
          {/* <div>
                <p>Episode: {films.episode_id}</p>
                <p>director: {films.director}</p>
                <p>producer: {films.producer}</p>
                <p>release date: {films.release_date}</p>
              </div> */}
          <button onClick={() => addToCart(pageDetails)}>Add To Cart</button>
        </section>
        <div id={styles.background}>
          {/* <p>description: {films.opening_crawl}</p> */}
        </div>
      </div>
    </>
  );
}
