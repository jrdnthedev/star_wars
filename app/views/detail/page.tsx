"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../detail.module.css";
import Image from "next/image";
import { useCart } from "@/app/utils/CartContext";
import { Product } from "@/app/interfaces/product";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  let num = 0;

  let pageDetails: Product = {};

  const { addToCart } = useCart();

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      pageDetails[key] = num;
      console.log(num);
    }
    pageDetails[key] = value;
  });

  const keys = Object.keys(pageDetails);

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          <Image
            src={pageDetails.img}
            alt={pageDetails.name || pageDetails.title + " image"}
            fill={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <section id={styles.details}>
          <h1>{pageDetails.title || pageDetails.name}</h1>
          <div>
            {keys
              .filter(function (item) {
                if (
                  item === "history" ||
                  item === "description" ||
                  item === "opening_crawl"
                ) {
                  return false; // skip
                }
                return true;
              })
              .map((key) => (
                <p key={key}>
                  {key}: {pageDetails[key]}
                </p>
              ))}
          </div>
          <button onClick={() => addToCart(pageDetails)}>Add To Cart</button>
        </section>
        <div id={styles.background}>
          <p>
            description: {pageDetails.opening_crawl || pageDetails.description}
          </p>
          <p>history: {pageDetails.history} </p>
        </div>
      </div>
    </>
  );
}
