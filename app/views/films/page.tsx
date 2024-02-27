"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import planetImg from "../../assets/img/planet.jpg";
import LoadingSpinner from "@/app/components/loadingSpinner/loading";
import SearchBar from "@/app/components/searchBar/searchBar";
import Link from "next/link";
import getFilms from "../../services/films/filmService";

export default function Films() {
  const [filmData, setFilmData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const film = useMemo(() => {
    return [
      {
        title: "A New Hope",
        src: "",
      },
      {
        title: "The Empire Strikes Back",
        src: "",
      },
      {
        title: "Return of the Jedi",
        src: "",
      },
      {
        title: "The Phantom Menace",
        src: "",
      },
      {
        title: "Attack of the Clones",
        src: "",
      },
      {
        title: "Revenge of the Sith",
        src: "",
      },
    ];
  }, []);

  const addItemToObject = useCallback(
    (data: any) => {
      let idStart = 31;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < film.length; j++) {
          if (
            data[i].title.toLocaleLowerCase() ===
            film[j].title.toLocaleLowerCase()
          ) {
            data[i].id = idStart++;
            // data[i].img = film[j].src.src;
          }
        }
      }
      return data;
    },
    [film]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms();
      setFilmData(addItemToObject(data.results));
      setFilteredData(addItemToObject(data.results));
      setLoading(false);
    };
    fetchData();
  }, []);

  function filter(e: any) {
    const result = filmData.filter((data: any) =>
      data.name.toLocaleLowerCase().includes(e.target.value)
    );
    setFilteredData(result);
  }

  console.log(filteredData);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <SearchBar filter={filter} />
      <div id="gallery_container">
        {filteredData.map((movie: any, index: number) => (
          <Link
            href={{
              pathname: "/views/detail",
              query: movie,
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
                <p>{movie.title}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
}
