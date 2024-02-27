"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import getVehicles from "@/app/services/vehicles/vehicleService";
import LoadingSpinner from "@/app/components/loadingSpinner/loading";
import SearchBar from "@/app/components/searchBar/searchBar";
import cover_photo from "../../assets/img/cover_photo.jpg";
import sandcrawler from "../../assets/img/vehicles/sandcrawler.jpeg";
import t16skyhopper from "../../assets/img/vehicles/t16skyhopper.jpeg";
import x34landspeeder from "../../assets/img/vehicles/x34landspeeder.jpeg";
import snowspeeder from "../../assets/img/vehicles/snowspeeder.jpeg";
import tiebomber from "../../assets/img/vehicles/tiebomber.jpeg";
import at_at from "../../assets/img/vehicles/at-at.jpeg";
import at_st from "../../assets/img/vehicles/at-st.jpeg";
import cloud_car from "../../assets/img/vehicles/cloud-car.jpeg";
import sail_barge from "../../assets/img/vehicles/sail_barge.jpeg";

export default function Vehicles() {
  const [vehicletData, setVehicleData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const vehicles = useMemo(() => {
    return [
      {
        name: "Sand Crawler",
        src: sandcrawler,
        description:
          "Sandcrawlers are huge treaded fortresses used by Jawas as transportation and shelter. The sand-pitted vehicles, many meters in height, are equipped with a magnetic suction tube for sucking droids and scrap into their cargo chambers.",
        history:
          "Sandcrawlers were a common sight on Tatooine, used by the planet’s native Jawas as homes, workshops and fortresses. These massive rolling vehicles trundled across the desert wastes in search of machinery that could be fixed up and sold to settlers. Those searching for something knew to check in with the Jawa tribes, whose knowledge of Tatooine’s badlands and desert flats was unequalled. A Sandcrawler traversing the deserts on Tatooine During the Galactic Civil War, the droids C-3PO and R2-D2 were found by a Jawa sandcrawler and sold to Owen Lars and his nephew Luke Skywalker. What seemed like a nice payday for the Jawas turned out to be their doom – Imperial troops tracked the sandcrawler and destroyed it.",
      },
      {
        name: "T-16 skyhopper",
        src: t16skyhopper.src,
        description:
          "A high-performance airspeeder capable of reaching a planet’s troposphere, T-16 skyhoppers were fast and maneuverable – a combination that could be dangerous for young pilots. Luke Skywalker owned a two-man skyhopper, but burned out the instrumentation during a reckless trip through Beggar’s Canyon. He was left to play idly with a model of his beloved craft until he could make the T-16 airworthy again. The controls of a T-16 were similar to those of a T-65 X-wing, which allowed Luke to join the rebel attack on the Death Star at Yavin.",
        history: "",
      },
      {
        name: "X-34 landspeeder",
        src: x34landspeeder.src,
        description:
          "Luke Skywalker owned one of these nondescript but speedy landspeeders, racing the sand-pocked and sun-faded craft across the desert between the Lars homestead and outposts such as Tosche Station and Anchorhead. The X-34’s powerful repulsorlift engine that allows it to float about a meter above the ground, augmented by a trio of air-cooled thrust turbines. Luke’s speeder was old and battered, and missing the port turbine’s cowling, but tinkering and careful maintenance – essential in the harsh environment of Tatooine -- kept it in good working order. After the death of his aunt and uncle, Luke sold his speeder in Mos Eisley to help pay for passage to Alderaan.",
        history: "",
      },
      {
        name: "TIE/LN starfighter",
        src: "",
        description: "",
        history: "",
      },
      {
        name: "snowspeeder",
        src: snowspeeder.src,
        description:
          "When stationed on Hoth, the Rebel Alliance modified T-47 airspeeders to become snowspeeders, fast flying conveyances for patrol and defense of their hidden base. It took some doing to keep the crippling cold from permanently grounding their airforce, but Rebel ingenuity overcame the relentless Hoth elements. The T-47 airspeeder is a small, wedge-shaped craft with two forward-facing laser cannons. In its rear arc is a harpoon gun fitted with a heavy-duty tow cable. The snowspeeder is a two-man vessel, with a pilot and rear-facing tailgunner.",
        history: "",
      },
      {
        name: "TIE bomber",
        src: tiebomber.src,
        description:
          "The Empire uses flights of its specialized double-hulled TIE bombers to drop vast quantities of munitions on rebellious planets and targets in space, delivering devastating attacks with frightening accuracy.",
        history:
          "TIE bombers would run routine missions over Ryloth, dispatched from the Quasar Fire-Class Cruiser-Carrier orbiting the planet. When the Ghost crew attempted to steal the massive ship, the TIE bombers returned from their run, ready to destroy the rebels. Blasting forward torpedoes, they came close to stopping the theft, but were ultimately outgunned.",
      },
      {
        name: "at-at",
        src: at_at.src,
        description:
          "The All Terrain Armored Transport, or AT-AT walker, is a four-legged transport and combat vehicle used by the Imperial ground forces. Standing over 20 meters tall with blast-impervious armor plating, these massive constructs are used as much for psychological effect as they are for tactical advantage.",
        history:
          "When Agent Kallus and the Empire tracked the Ghost crew to Seelos, they brought with them a new kind of weapon: the AT-AT. Massive and powerful, the rebels’ clone trooper friends were impressed with the four-legged tanks’ advances in engineering, armor, and firepower. Their modified AT-TE was no match. Three of the transports were dispatched in total, chasing the rebels into a blinding sandstorm. Through the Force, Kanan the Jedi was able to “see” the walkers and advised the clones on where and when to strike. It proved to be a successful strategy, as a direct hit to the neck of the nearest AT-AT sent the vehicle toppling. Once out of the sandstorm, the battle continued. Zeb, Kanan, and Ezra eventually commandeered one of the walkers, helping Captain Rex to destroy the only remaining AT-AT, and Kallus ordered a hasty retreat. AT-ATs drove the Empire’s assault on the Rebel base during the Battle of Hoth. The gigantic combat vehicles were air-dropped onto the snowy world, where they marched toward the command center and were met by Rebel defenses. Snowspeeders first attempted to blast the AT-ATs, but the walkers armor proved too strong. Commander Luke Skywalker ordered his squadron to use harpoons and tow cables, tying the legs of the hulking transports. Though this tactic proved effective at toppling a walker, the Rebels were ultimately unable to stop the Empire’s advance. General Veers, leading the surface attack, targeted and destroyed the Rebel base’s main power generator. Imperial forces, along with Darth Vader, entered the base -- though most Rebels had been able to escape.",
      },
      {
        name: "at-st",
        src: at_st.src,
        description:
          "While not as imposing as its larger AT-AT walker cousin, the AT-ST nonetheless served as a significant addition to the Imperial side of battlefields in the Galactic Civil War. The two-man craft is lightly armed with chin-mounted laser cannons, and side-mounted weapon pods. The two-legged transport, dubbed the scout walker by many, serves as a reconnaisance and patrol vehicle, often flanking approaching AT-ATs and mopping up infantry that sneaks past the larger walkers. The Imperials used AT-STs in both the Battle of Hoth and the Battle of Endor.",
        history:
          "During the Galactic Civil War, scout walkers proved effective not only as escorts for larger AT-ATs, but also as vehicles undertaking independent operations such as reconnaissance, patrols and anti-infantry missions. The AT-ST’s speed and maneuverability made it a valuable component of the Imperial arsenal.",
      },
      {
        name: "Storm IV Twin-Pod cloud car",
        src: cloud_car.src,
        description:
          "These brick-colored atmospheric vehicles keep the peace in the skies of Bespin. Cloud cars feature twin “pods” connected by a repulsorlift engine, and are equipped with light blaster cannons. Each cloud car has a pilot and a gunner, who work in tandem to intercept starships bound for Cloud City, question their captains and take defensive measures as needed.",
        history: "",
      },
      {
        name: "sail barge",
        src: sail_barge.src,
        description:
          "Jabba the Hutt valued money and power, and enjoyed showing off just how much he had of both. The Khetanna, his luxury sail barge, was among the crimelord’s most extravagant purchases: a massive transport that carried up to 500 passengers, maintained a crew of 26, and was outfitted with space for live music and entertainment. It was manufactured by Ubrikkian, measuring 30 meters long and equipped with a heavy blaster cannon -- an essential feature for Jabba’s lifestyle. Indeed, the craft was symbolic of Jabba’s hubris and ego, and played a large part in his downfall.",
        history:
          "Jabba and his followers used the Khetanna to “visit” Tatooine’s Sarlacc pit, where Han Solo, Luke Skywalker, and Chewbacca were meant to be executed. Things did not go as planned, however. The Rebel heroes, who were sentenced to walk a plank into the Great Pit of Carkoon while Jabba and his men watched from the Khetanna, turned the tables on their captors. They decimated the gangster’s thugs, Jabba was killed by Princess Leia, and the impressive sail barge was destroyed, exploding in flames above the sands of the desert world.",
      },
    ];
  }, []);
  const addItemToObject = useCallback(
    (data: any) => {
      let idStart = 21;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < vehicles.length; j++) {
          if (
            data[i].name.toLocaleLowerCase() ===
            vehicles[j].name.toLocaleLowerCase()
          ) {
            data[i].id = idStart++;
            data[i].img = vehicles[j].src;
            data[i].description = vehicles[j].description;
          }
        }
      }
      return data;
    },
    [vehicles]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVehicles();
      setVehicleData(addItemToObject(data.results));
      setFilteredData(addItemToObject(data.results));
      setLoading(false);
    };
    fetchData();
  }, [addItemToObject]);

  function filter(e: any) {
    const result = vehicletData.filter((data: any) =>
      data.name.toLocaleLowerCase().includes(e.target.value)
    );
    setFilteredData(result);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(vehicletData);
  return (
    <>
      <SearchBar filter={filter} />

      <div id="gallery_container">
        {filteredData.map((vehicle: any, index: number) => (
          <Link
            href={{
              pathname: "/views/detail",
              query: vehicle,
            }}
            key={index}
          >
            <figure>
              <div className="image_wrapper">
                <div
                  className="bkgImg"
                  style={{ backgroundImage: `url(${cover_photo.src})` }}
                ></div>
              </div>
              <figcaption>
                <p>{vehicle.name}</p>
                <p>{vehicle.model}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
}
