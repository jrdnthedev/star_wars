"use client";
import { useEffect, useState } from "react";
// import getPlanets from '../../services/planets/planetService';
import Image from "next/image";
import coverPhoto from "../../assets/img/cover_photo.jpg";

async function getPlanets() {
  const res = await fetch("https://swapi.dev/api/planets");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Planets() {
  const [planetData, setPlanetData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPlanets();
      setPlanetData(data);
    }
    return () => {
      fetchData();
    };
  }, []);

  console.log(planetData);
  return (
    <>
      <h1>Planets Page</h1>
      <div id="gallery_container">
        {planetData.results.map((planet: any, index: number) => (
          <figure key={index}>
            <div className="image_wrapper">
              <Image
                src={coverPhoto}
                alt="test"
                fill={true}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <figcaption>
              <p>{planet.name}</p>
              <p>{planet.terrain}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
