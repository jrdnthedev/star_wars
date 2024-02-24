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
import planetImg from "../../assets/img/planet.jpg";
import LoadingSpinner from "@/app/components/loadingSpinner/loading";
import SearchBar from "@/app/components/searchBar/searchBar";
import Link from "next/link";
import getPlanets from "@/app/services/planets/planetService";

export default function Planets() {
  const [planetData, setPlanetData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const planets = useMemo(() => {
    return [
      {
        name: "alderaan",
        src: alderaan,
        description:
          "If ever one needed an example of the irredeemable evil of the Empire, look no further than the shattered remains of Alderaan. A peaceful world of lush valleys and snow-capped mountains, Alderaan was once regarded for its natural beauty, its tranquility, and the sophistication of its arts and culture. Before the Imperial uprising, Alderaan was represented in the waning days of the Republic by such venerated politicians as Bail Organa. In fact, Alderaan was one of the earliest supporters of the Alliance to Restore the Republic, though its officials prudently kept all ties to the Rebellion secret. Despite such discretion, the Empire knew it to be a haven of rebel activity, making it a target of reprisal as soon as the Death Star was operational.",
      },
      {
        name: "bespin",
        src: bespin,
        description:
          "Secluded from galactic turmoil by its location in a little-visited sector of space, Bespin is an astrophysical rarity. An immense gas giant surrounded by a number of moons, the planet contains a band of habitable atmosphere among its endless clouds. In this stratum of life, enterprising prospectors have established floating mining complexes devoted to extracting valuable gasses from deep within the planet. The most well known of these ventures is the opulent Cloud City, formerly under the administration of Lando Calrissian. During the tail end of the Galactic Civil War, the Empire garrisoned Bespin and took over Cloud City, though the outpost and the planet enjoyed freedom after the defeat of the Emperor at the Battle of Endor.",
      },
      {
        name: "dagobah",
        src: dagobah,
        description:
          "Home to Yoda during his final years, Dagobah was a swamp-covered planet strong with the Force -- a forgotten world where the wizened Jedi Master could escape the notice of Imperial forces. Characterized by its bog-like conditions and fetid wetlands, the murky and humid quagmire was undeveloped, with no signs of technology. Though it lacked civilization, the planet was teeming with life -- from its dense, jungle undergrowth to its diverse animal population. Home to a number of fairly common reptilian and amphibious creatures, Dagobah also boasted an indigenous population of much more massive -- and mysterious -- lifeforms. Surrounded by creatures generating the living Force, Yoda learned to connect with the deeper cosmic Force and waited for one who might bring about the return of the Jedi Order.",
      },
      {
        name: "endor",
        src: endor,
        description:
          "Secluded in a remote corner of the galaxy, the forest moon of Endor would easily have been overlooked by history were it not for the decisive battle that occurred there. The lush, forest home of the Ewok species is the gravesite of Darth Vader and the Empire itself. It was here that the Rebel Alliance won its most crucial victory over the Galactic Empire.",
      },
      {
        name: "hoth",
        src: hoth,
        description:
          "Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.",
      },
      {
        name: "kamino",
        src: kamino,
        description:
          "Once purged from the otherwise complete Jedi Archives was all evidence of the mysterious world of Kamino. A lonely world beyond the Outer Rim and just south of the Rishi Maze, few could have predicted that Kamino would become a key contributor to a massive shift in political power in the final days of the Republic. Kamino is a planet of endless oceans and storms. Few features mark its surface, save for massive stilt-mounted cities wherein reside the planet's natural inhabitants, the Kaminoans. From Tipoca City, the planet's prime minister rules. Lama Su and Kamino’s chief medical scientist Nala Se closely monitor the operations of Kamino's most prized export -- clones -- even after the Clone Wars reaches a conclusion.",
      },
      {
        name: "naboo",
        src: naboo,
        description:
          "An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery, while the underwater Gungan settlements are a beautiful display of exotic hydrostatic bubble technology.",
      },
      {
        name: "tatooine",
        src: tatooine,
        description:
          "Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.",
      },
      {
        name: "yavin iv",
        src: yavin,
        description:
          "One of a number of moons orbiting the gas giant Yavin in the galaxy’s Outer Rim, Yavin 4 is a steamy world covered in jungle and forest. It was the location of the principal rebel base early in the Galactic Civil War, and the site from which the Rebellion launched the attack that destroyed the first Death Star -- a confrontation known thereafter as the Battle of Yavin.",
      },
      {
        name: "coruscant",
        src: coruscant,
        description:
          "Coruscant is the vibrant heart and capital of the galaxy during the age of the Empire, featuring a diverse mix of cultures and citizens spread over hundreds of levels. Once the home of the main Jedi Temple -- the central hub of Jedi training and learning for over a thousand generations and the repository of the Jedi Archives -- these traditions ended when the planet bore witness to Order 66.",
      },
    ];
  }, []);

  const addItemToObject = useCallback(
    (data: any) => {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < planets.length; j++) {
          if (
            data[i].name.toLocaleLowerCase() ===
            planets[j].name.toLocaleLowerCase()
          ) {
            data[i].id = j + 1;
            data[i].img = planets[j].src.src;
            data[i].description = planets[j].description;
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
      setPlanetData(addItemToObject(data.results));
      setFilteredData(addItemToObject(data.results));
      setLoading(false);
    };
    fetchData();
  }, [addItemToObject]);

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
                  style={{ backgroundImage: `url(${planetImg.src})` }}
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
