"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./detail.module.css";
import coverPhoto from "../../../assets/img/cover_photo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  const planet: any = {};

  data?.forEach((value, key) => {
    console.log(key, value);
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
            alt="test"
            fill={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <section id={styles.planet_details}>
          <h1>{planet.name}</h1>
          <div>
            <p>{planet.terrain}</p>
            <p>{planet.population}</p>
            <p>{planet.gravity}</p>
          </div>
        </section>
      </div>
    </>
  );
}
