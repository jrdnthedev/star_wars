"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import fallen_ship from "../../assets/img/fallen_ship.jpg";
import getShips from "@/app/services/ships/shipService";
import LoadingSpinner from "@/app/components/loadingSpinner/loading";
import SearchBar from "@/app/components/searchBar/searchBar";
import Link from "next/link";
import death_star from "../../assets/img/starships/death_star.jpg";
import sentinel_class from "../../assets/img/starships/sentinel_class.jpg";
import star_destroyer from "../../assets/img/starships/star_destroyer.jpg";
import millennium_falcon from "../../assets/img/starships/millennium_falcon.jpg";
import y_wing from "../../assets/img/starships/y_wing.jpg";
import x_wing from "../../assets/img/starships/x_wing.jpg";
import tie_fighter from "../../assets/img/starships/tie_fighter.jpg";
import executor from "../../assets/img/starships/executor.jpg";
import medium_transport from "../../assets/img/starships/medium_transport.jpg";

export default function Spaceships() {
  const [shipData, setShipData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const ships = useMemo(() => {
    return [
      {
        name: "death",
        src: death_star.src,
        description:
          "The Death Star was the Empire’s ultimate weapon: a moon-sized space station with the ability to destroy an entire planet. But the Emperor and Imperial officers like Grand Moff Tarkin underestimated the tenacity of the Rebel Alliance, who refused to bow to this technological terror…",
        history:
          "Supreme Chancellor Palpatine, with assistance from the Geonosians, had plotted to build the first dreaded Death Star -- a weapon unlike anything the galaxy had ever seen. Palpatine, secretly the Sith Lord Darth Sidious, had his apprentice Darth Tyranus (also known as Count Dooku) deliver the plans from Geonosis to Coruscant at the start of the Clone Wars. Even as the Clone Wars raged, the Death Star secretly took shape in space above Geonosis. Access to the former Separatist world was restricted, with very few in the Imperial hierarchy allowed to know about the battle station’s construction. The Empire initially appointed Vice Admiral Rancit to supervise the network of bases protecting the Death Star, an effort overseen from the remote Sentinel Base. Rancit’s replacement, Wilhuff Tarkin, faced a host of challenges, from delayed shipments and raw-materials shortages to missed engineering deadlines and attempts at sabotage. Tarkin proved a capable commander, and Palpatine rewarded him by making him a Grand Moff with greater control over the project. Tarkin would become the battle station’s greatest champion, seeing it as the key to vanquishing all resistance to Palpatine’s rule.",
      },
      {
        name: "sentinel-class",
        src: sentinel_class.src,
        description:
          "Designed by Sienar Fleet Systems, the Sentinel-class shuttle was a larger-scale troop transport used by the Empire. Much like its cousin, the Lambda-class shuttle, these vehicles featured three wings in a triangular layout: a stationary center foil and two articulated flanking wings. Imperials used the shuttle for missions that spanned the galaxy, from a search for droids on Tatooine to conflicts with the Lothal rebels.",
        history: "",
      },
      {
        name: "destroyer",
        src: star_destroyer.src,
        description:
          "The wedge-shaped Imperial Star Destroyer is a capital ship bristling with weapons emplacements. Turbolasers and tractor beam projectors dot its surface. Its belly hangar bay can launch TIE fighters, boarding craft, land assault units, hyperspace probes, or be used to hold captured craft. In the days of the Empire, its bustling bridge would be staffed by the finest crewers in the Imperial starfleet. Its presence in a system mark matters of extreme Imperial import. Though, as is typical of the Empire, not even the Star Destroyer was enough to sate the Imperial hunger for displays of power. Larger vessels, such as the Super Star Destroyer, dwarf even these giants.",
        history:
          "The Imperial Star Destroyer evolved from the smaller Venator-class Star Destroyer, a mainstay of the Republic Navy during the Clone Wars. Known colloquially as Republic attack cruisers or Jedi cruisers, Venators proved exceptionally versatile warships. They were effective in ship-to-ship combat but also served ably as starfighter carriers and troop transports. The later Imperial-class built upon the strengths of these Republic predecessors. An Imperial Star Destroyer hovering above Lothal After the dissolution of the Republic, the Emperor ordered a massive military buildup, crushing dissent and bringing systems that had been beyond the reach of Republic law under Imperial rule. For planet after planet across the galaxy, Imperial Star Destroyers became symbols of this new order. Citizens weary of chaos and war cheered the sight of these giant dagger-shaped warships, while pirates and slavers quailed at the thought of confronting them. But a few citizens wondered if the imposition of Imperial law was worth the freedoms lost. An Imperial Star Destroyer approaching the Death Star Imperial Star Destroyers became the backbone of the powerful Imperial starfleet. Star Destroyers hunted down Rebel task forces, blockaded disorderly worlds and served as bases for ground assaults. And in secret, the Empire was adding even deadlier assets to its already formidable arsenal. The Death Star’s firepower dwarfed that of Star Destroyers, threatening to eliminate all resistance to the Emperor’s rule. An Imperial Star Destroyer pursuing the Millennium Falcon Alliance strategists developed starfighters designed to punch through an Imperial Star Destroyer’s defenses, and the biggest rebel capital ships had the firepower and defensive capabilities to slug it out with one. But the Imperial starfleet dwarfed the combined task forces of the Alliance. Rebel tacticians knew the best strategy when confronted by a Star Destroyer was to flee.",
      },
      {
        name: "corvette",
        src: "",
        description: "",
        history: "",
      },
      {
        name: "Millennium Falcon",
        src: millennium_falcon.src,
        description:
          "An extensively modified Corellian light freighter, the Millennium Falcon is a legend in smuggler circles and is coveted by many for being the fastest hunk of junk in the galaxy. Despite her humble origins and shabby exterior, the ship that made the Kessel Run in less than 12 parsecs has played a role in some of the greatest victories of the Rebel Alliance and the New Republic. The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises. A succession of owners, including Lando Calrissian and Han Solo, have made special modifications that boosted the freighter’s speed, shielding and firepower to impressive – and downright illegal – levels. The price of such tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky. Despite her flaws, she’s beloved by her owners – Han Solo and Chewbacca spent years searching the galaxy for the ship they once called home, rejoicing when they finally reclaimed her.",
        history:
          "The Millennium Falcon was Lando Calrissian’s pride and joy. After he acquired the Corellian freighter, Lando spared no expense remodeling it according to his discerning tastes. Extensive modifications made the Falcon an ideal home base for a sophisticated “sportsman” like Lando, who traveled the galaxy with pilot droid L3-37. The Millennium Falcon raids Kessel The promise of a hefty percentage persuaded Lando to hire out his prized ship for a raid on Kessel’s coaxium supply. It was a decision Lando would come to regret. The Dilapidated Millennium Falcon After the mining colony erupted in a mass breakout, Han Solo took the helm to complete the galaxy’s most famous Kessel Run. The glory of the achievement came at a crippling cost. By the time the Falcon touched down on Savareen, it was in worse shape than when Lando had first found the crude freighter. The journey had stripped away the immaculate streamlined plating, the auxiliary craft had been lost, and Lando soon retreated, limping away in what remained of his crowning achievement. But Han tracked Lando down on Numidian Prime, where he won the ship in a game of sabacc. For many years, the freighter served as home base as Han and Chewbacca began their smuggling careers. The Millennium Falcon impounded in a Death Star hangar bay When Obi-Wan Kenobi hired Han Solo and Chewbacca for a charter to Alderaan, the Jedi specified that he needed a fast ship. Han assured him he’d found one -- hadn’t the Millennium Falcon made the Kessel Run in less than 12 parsecs? When Luke Skywalker first saw the battered freighter, he was convinced they’d been hoodwinked -- the Falcon looked like she might fall apart in her docking bay. But the Falcon lived up to her captain’s boasts, escaping the Imperial warships guarding Tatooine and proving maneuverable and tough in a firefight with TIE fighters patrolling space around the Death Star. Han and Chewie were at the Falcon’s controls when they blasted Darth Vader and his TIE wingmen off Luke’s tail, giving the young Rebel the chance to make the million-to-one shot that destroyed the Death Star. The Millennium Falcon on Bespin Han decided to leave his friends with the Rebel Alliance and pay off his debt to Jabba the Hutt, but the Falcon wouldn’t cooperate -- he and Chewbacca spent hours in Echo Base’s hangar trying to get the balky freighter back in flying shape. Han barely got the Falcon off the ground, escaping Hoth just ahead of Darth Vader’s shock troops, but her hyperdrive failed with Star Destroyers and TIE fighters in hot pursuit. Unable to go into lightspeed, Han sought refuge in an asteroid field, where he made frantic repairs -- but the hyperdrive failed again. Han used every trick known to Corellians to escape and limp to the nearby star system of Bespin, where Lando’s techs fixed the Falcon. Lando didn’t know the Imperials -- who encased Han in carbonite in Cloud City -- had deactivated her hyperdrive as a safeguard against escape attempts, but fortunately R2-D2 discovered the sabotage. The little droid reactivated the hyperdrive, allowing the freighter and her crew to escape. The Millennium Falcon escaping the Death Star II's destruction Lando and Chewbacca discovered Boba Fett had taken Han to Tatooine, and hid the Falcon while they infiltrated Jabba the Hutt’s palace to rescue their friend. Han then lent his beloved ship to Lando for the Rebel attack on the second Death Star at Endor. The Falcon maneuvered like a fighter in the chaotic battle, diving into the battle station’s labyrinthine superstructure. Lando fired concussion missiles into the Death Star’s main reactor and raced for the surface, escaping just as the station exploded. The lowly freighter, once derided as a piece of junk, had destroyed the Empire’s greatest weapon. The Millennium Falcon dogfighting with TIE Fighters on Jakku After her star turn at the Battle of Endor, the Millennium Falcon was part of several key New Republic victories over the Empire’s remnants – and further semi-legal adventures pursued by Han and Chewie. But the duo lost their beloved freighter to Gannis Ducain, and spent years trying to find her again. Meanwhile, the Falcon kept changing hands, going from Ducain to the Irving Boys before winding up under a tarp on Jakku. Han and Chewie reclaimed the Falcon, but Han died shortly after getting to see his beloved ship again. Chewie and the scavenger Rey – who’d stolen the Falcon from Unkar Plutt on Jakku – then piloted the freighter into the Unknown Regions on a quest to find Luke Skywalker. After Rey left Ahch-To, the Falcon – now home to nests of porgs – served as an escape craft for the besieged Resistance on Crait. The Millennium Falcon at Exegol The Falcon encountered some serious scrapes as the fight between the First Order and the Resistance intensified: damage from lightspeed skipping, capture on Pasaana and near-incineration, and a rough landing on Kef Bir. But the battered freighter survived them all, and flew at the head of a citizens’ navy that bolstered the Resistance’s numbers at the climactic Battle of Exegol.",
      },
      {
        name: "y-wing",
        src: y_wing.src,
        description:
          "The Y-wing is a workhorse starfighter has been in use since the Clone Wars. Used for dogfights and for bombing runs against capital ships and ground targets, Y-wings are often overshadowed by newer models such as the X-wing and the A-wing. But the Y-wing's historical importance is remarkable, and it has reliably served multiple generations of star pilots.",
        history:
          "Y-wings were a useful addition to the Republic starfighter ranks during the Clone Wars, serving primarily as bombers. Their relative lack of speed and maneuverability made them ill-suited for dogfighting, though skilled pilots could overcome these limitations, pushing the ungainly fighters to their limits while onboard gunners targeted enemies. Chopper sitting in a Republic Y wing at Reklam Station At Reklam Station, an Imperial salvage yard, 14 Republic Y-wings were set to be turned to scrap. Coming upon this intel, the Ghost crew attempted to steal the starfighters for the rebellion’s growing fleet. While the mission was not easy, they did come away with the Y-wings, and the station was destroyed in the process. Y-Wing bombers during the Battle of Yavin Y-wings saw service during the Galactic Civil War, with rebel pilots respecting their ability to take a beating in combat and still return home. But these starfighters were showing their age by the time of the struggle against the Empire – many had been stripped of hull plating and engine nacelles to make maintenance easier, and models that eliminated the gunner’s turret had been introduced. Y-wings took part in the attacks on the Empire’s Death Stars at Yavin and Endor, and were mainstays of the Alliance starfighters corps in the years between those epic battles.",
      },
      {
        name: "x-wing",
        src: x_wing.src,
        description:
          "The X-wing is a versatile Rebel Alliance starfighter that balances speed with firepower. Armed with four laser cannons and two proton torpedo launchers, the X-wing can take on anything the Empire throws at it. Nimble engines give the X-wing an edge during dogfights, and it can make long-range jumps with its hyperdrive and its astromech droid co-pilot. Luke Skywalker is famous for destroying the Death Star behind the controls of an X-wing.",
        history:
          "For the Rebel Alliance, the X-wing starfighter’s greatest asset was its versatility. X-wings were nimble enough to dogfight with TIE fighters while tough enough to slug it out with Imperial ships of the line. That made them a good choice for the Alliance in its showdown with the first Death Star, where X-wings had to combat starfighters and turbolaser emplacements, then perform a bombing run down a narrow trench on the battle station’s surface. While often flying in conjunction with other starfighter models, X-wings remained the backbone of the rebels’ starfighter corps after the Battle of Yavin. They ably performed escort duty during the evacuation of Hoth’s Echo Base and proved critical to the attack on the second Death Star at the Battle of Endor. Luke raising his X-wing When he went into exile on Ahch-To, Luke sunk his X-wing offshore – but returned as a Jedi spirit and used the Force to raise and repair it for Rey. She piloted the starfighter to Exegol, transmitting Luke’s old Alliance callsign so the Resistance could follow her.",
      },
      {
        name: "tie",
        src: tie_fighter.src,
        description:
          "The TIE fighter was the unforgettable symbol of the Imperial fleet. Carried aboard Star Destroyers and battle stations, TIE fighters were single-pilot vehicles designed for fast-paced dogfights with Rebel X-wings and other starfighters. The iconic TIE fighter led to other models in the TIE family including the dagger-shaped TIE Interceptor and the explosive-laden TIE bomber. The terrifying roar of a TIE's engines would strike fear into the hearts of all enemies of the Empire.",
        history:
          "Building on the Clone Wars’ advances in starfighter design, the TIE became the signature fighter of the Empire. TIE fighters lacked shields and tough armor, depending on maneuverability and their pilots’ skill for effectiveness in combat. As the Empire tightened its grip on the planets of the galaxy, the Imperial war machine built TIE fighters on more and more worlds, and they became common sights in the skies of planets such as Lothal. Zeb Orrelios looking into the cockpit of a TIE Fighter A TIE cockpit was cramped, and the fighter’s lack of defenses made flying one a dangerous calling. But TIE pilots took a perverse pride in the flaws of their craft. They saw the ability to fly a TIE effectively as the sign of true ability for a pilot, and TIE aces were held in great esteem by pilots who dreamed of amassing similarly impressive service records. Stormtroopers guarding the TIE Advanced v1 The Empire continually tested new technology for TIE fighters, with corporations such as Sienar Fleet Systems creating prototypes for expert pilots to fly. Some of these experimental TIEs had shields, advanced weaponry, tracking capabilities or superior maneuverability. The Empire unveiled one experimental TIE -- the TIE Advanced v1 -- on Lothal during Empire Day festivities. The Imperial agent known as the Inquisitor then piloted one of these prototype craft in combat against Lothal’s rebels. Imperial TIE Fighter fighting Rebel X-Wings during the Battle of Yavin The Rebel Alliance countered the Empire’s TIE squadrons with X-wings and Y-wings, which boasted heavier weapons and protective shields. But all Rebel pilots learned to fear the trademark howl of a TIE in flight. TIE fighters played many roles within the Imperial fleet: conducting reconnaissance for Star Destroyers, serving as sentry ships for the Death Star, neutralizing or destroying ships flown smugglers and pirates, and patrolling the skies of Imperial worlds. Vader's TIE Advanced and a TIE Fighter escort during the Battle of Yavin The campaign against the Rebellion spurred new research and testing of TIE models. During the Battle of Yavin, Darth Vader led the Death Star’s TIE corps in a prototype TIE Advanced. Vader and his wingmen destroyed numerous Rebel fighters during their defense of the Death Star, which was thwarted by an unexpected attack by the Millennium Falcon. TIE bombers dropping bombs in an asteroid field At the Battle of Hoth, TIE fighters harassed fleeing Rebel transports and fighters, and pursued the Falcon into the tumbling chaos of an asteroid field -- a spectacularly dangerous mission for unshielded starfighters. When the Falcon went to ground deep within the field, TIE bombers prowled the asteroids, dropping ordnance in an effort to flush the freighter out of hiding. Assorted TIE Fighters fighting Rebel ships during the Battle of Endor At the Battle of Endor, the Rebels faced off against the Empire’s newest model of TIE fighter, the dagger-winged TIE interceptor. These speedy fighters swarmed the Alliance’s squadrons and ships of the line, blasting away at the Emperor’s enemies with wing-mounted laser cannons.",
      },
      {
        name: "executor",
        src: executor.src,
        description:
          "The mighty flagship of Darth Vader, the Executor led Death Squadron during the Empire’s assault on Hoth and pursued the Millennium Falcon to Bespin, where Luke Skywalker and his friends narrowly escaped her tractor beams. First commanded by Admiral Ozzel and later by Admiral Piett, the massive warship met her end during the Battle of Endor, when a rebel A-wing smashed through her command bridge. Out of control, the Executor careened into the Death Star and exploded.",
        history: "",
      },
      {
        name: "rebel",
        src: medium_transport.src,
        description:
          "A military version of a civilian transport, the GR-75 proved critical to the rebel retreat from Hoth, as starfighters protected personnel and equipment evacuating aboard these minimally armed craft. The GR-75’s clamshell-like outer hull offers protection for its interior, which can be filled with cargo pods.",
        history: "",
      },
    ];
  }, []);

  const addItemToObject = useCallback(
    (data: any) => {
      let idStart = 11;
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < ships.length; j++) {
          console.log(data[i].name.toLocaleLowerCase());
          if (
            data[i].name
              .toLocaleLowerCase()
              .includes(ships[j].name.toLocaleLowerCase())
          ) {
            data[i].id = idStart++;
            data[i].img = ships[j].src;
            data[i].description = ships[j].description;
            data[i].history = ships[j].history;
          }
        }
      }
      return data;
    },
    [ships]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShips();
      setShipData(addItemToObject(data.results));
      setFilteredData(addItemToObject(data.results));
      setLoading(false);
    };
    fetchData();
  }, [addItemToObject]);

  function filter(e: any) {
    const result = shipData.filter((data: any) =>
      data.name.toLocaleLowerCase().includes(e.target.value)
    );
    setFilteredData(result);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(shipData);
  return (
    <>
      <SearchBar filter={filter} />

      <div id="gallery_container">
        {filteredData.map((ship: any, index: number) => (
          <Link
            href={{
              pathname: "/views/detail",
              query: ship,
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
                <p>{ship.name}</p>
                <p>{ship.model}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </>
  );
}
