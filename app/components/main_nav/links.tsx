import Link from "next/link";
import styles from "./links.module.css";
export default function Links() {
  return (
    <>
      <nav>
        <ul id={styles.main_nav}>
          <li>
            <Link href="/views/planets" replace>
              Planets
            </Link>
          </li>
          <li>
            <Link href="/views/spaceships" replace>
              Spaceships
            </Link>
          </li>
          <li>
            <Link href="/views/vehicles" replace>
              Vehicles
            </Link>
          </li>
          <li>
            <Link href="/views/people" replace>
              People
            </Link>
          </li>
          <li>
            <Link href="/views/films" replace>
              Films
            </Link>
          </li>
          <li>
            <Link href="/views/species" replace>
              Species
            </Link>
          </li>
          <li>
            <Link href="/views/favourites" replace>
              Favourites
            </Link>
          </li>
        </ul>
        <span>
          <Link href="/">SW</Link>
        </span>
        <span>Icons</span>
      </nav>
    </>
  );
}
