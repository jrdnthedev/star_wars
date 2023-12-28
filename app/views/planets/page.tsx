"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import alderaan from "../../assets/img/alderaan.jpg";
import bespin from "../../assets/img/bespin.jpg";
import dagobah from "../../assets/img/dagobah.jpg";
import endor from "../../assets/img/endor.jpg";
import hoth from "../../assets/img/hoth.jpg";
import kamino from "../../assets/img/kamino.jpg";
import naboo from "../../assets/img/naboo.jpg";
import tatooine from "../../assets/img/tatooine.jpg";
import yavin from "../../assets/img/yavin.jpg";
import coruscant from "../../assets/img/coruscant.jpg";
import fallen_ship from "../../assets/img/fallen_ship.jpg";
import LoadingSpinner from "@/app/components/loadingSpinner/loading";
import SearchBar from "@/app/components/searchBar/searchBar";
import Link from "next/link";

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
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const planets = useMemo(() => {
    return [
      { name: "alderaan", src: alderaan },
      { name: "bespin", src: bespin },
      { name: "dagobah", src: dagobah },
      { name: "endor", src: endor },
      { name: "hoth", src: hoth },
      { name: "kamino", src: kamino },
      { name: "naboo", src: naboo },
      { name: "tatooine", src: tatooine },
      { name: "yavin iv", src: yavin },
      { name: "coruscant", src: coruscant },
    ];
  }, []);

  const addImageToObject = useCallback(
    (data: any) => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < planets.length; j++) {
          if (
            data[i].name.toLocaleLowerCase() ===
            planets[j].name.toLocaleLowerCase()
          ) {
            data[i].id = j + 1;
            data[i].img = planets[j].src.src;
          }
        }
      }
      return data;
    },
    [planets]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlanets();
      setPlanetData(addImageToObject(data.results));
      setFilteredData(addImageToObject(data.results));
      setLoading(false);
    };
    fetchData();
  }, [addImageToObject]);

  function filter(e: any) {
    const result = planetData.filter((data: any) =>
      data.name.toLocaleLowerCase().includes(e.target.value)
    );
    setFilteredData(result);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(planetData);
  return (
    <>
      <SearchBar filter={filter} />

      <div id="gallery_container">
        {filteredData.map((planet: any, index: number) => (
          <Link
            href={{
              pathname: "/views/planets/detail",
              query: planet,
            }}
            key={index}
          >
            <figure>
              <div className="image_wrapper">
                <div
                  className="bkgImg"
                  style={{ backgroundImage: `url(${fallen_ship.src})` }}
                ></div>
              </div>
              <figcaption>
                <p>{planet.name}</p>
                <p>{planet.terrain}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
}
