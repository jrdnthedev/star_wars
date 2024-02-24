"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../detail.module.css";
import Image from "next/image";
import { useCart } from "@/app/utils/CartContext";
import { Vehicle } from "@/app/interfaces/vehicle";

export default function DetailPage() {
  const router = useRouter();
  const data = useSearchParams();
  let num = 0;
  let vehicle: Vehicle = {
    id: 0,
    name: "",
    model: "",
    max_atmosphering_speed: "",
    passengers: "",
    vehicle_class: "",
    manufacturer: "",
    length: "",
    cost_in_credits: "",
    cargo_capacity: "",
    consumables: "",
    crew: "",
    img: "",
  };
  const { addToCart } = useCart();

  data?.forEach((value, key) => {
    if (key === "id") {
      num = Number(value);
      vehicle[key] = num;
      console.log(num);
    }
    vehicle[key] = value;
  });
  console.table(vehicle);
  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <div id={styles.detail_wrapper}>
        <div id={styles.image_wrapper}>
          <Image
            src={vehicle.img}
            alt={vehicle.name + " image"}
            fill={true}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <section id={styles.details}>
          <h1>{vehicle.name}</h1>
          <div>
            <p>name: {vehicle.name}</p>
            <p>model: {vehicle.model}</p>
            <p>max speed: {vehicle.max_atmosphering_speed}</p>
            <p>passengers: {vehicle.passengers}</p>
            <p>class: {vehicle.vehicle_class}</p>
            <p>manufacturer: {vehicle.manufacturer}</p>
            <p>length: {vehicle.length}</p>
            <p>capacity: {vehicle.cargo_capacity}</p>
            <p>cost: {vehicle.cost_in_credits}</p>
            <p>crew: {vehicle.crew}</p>
          </div>
          <button onClick={() => addToCart(vehicle)}>Add To Cart</button>
        </section>
        <div id={styles.background}>
          <p>description: {vehicle.description}</p>
          <p>history: {vehicle.history}</p>
        </div>
      </div>
    </>
  );
}
