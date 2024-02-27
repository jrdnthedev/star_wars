"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../detail.module.css";
import Image from "next/image";
import { People } from "@/app/interfaces/people";
import { useCart } from "@/app/utils/CartContext";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  let num = 0;
  let people: People = {
    id: 0,
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    gender: "",
    birth_year: "",
    homeworld: "",
    eye_color: "",
    skin_color: "",
    img: "",
  };
  const { addToCart } = useCart();

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      people[key] = num;
      console.log(num);
    }
    people[key] = value;
  });

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          <Image
            src={people.img}
            alt={people.name + " image"}
            fill={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <section id={styles.details}>
          <h1>{people.name}</h1>
          <div>
            <p>gender: {people.gender}</p>
            <p>Height: {people.height}</p>
            <p>Homeworld: {people.homeworld}</p>
          </div>
          <button onClick={() => addToCart(people)}>Add To Cart</button>
        </section>
        <div id={styles.background}>
          <p>description: {people.description}</p>
          <p>history: {people.history}</p>
        </div>
      </div>
    </>
  );
}
