import styles from "./page.module.css";
import main from "./assets/img/main_img.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div id={styles.header}></div>
        <p>
          Did you hear that? They've shut down the main reactor. We'll be
          destroyed for sure. This is madness! We're doomed! There'll be no
          escape for the Princess this time. What's that? Artoo! Artoo-Detoo,
          where are you? At last! Where have you been? They're heading in this
          direction. What are we going to do? We'll be sent to the spice mine of
          Kessel or smashed into who knows what! Wait a minute, where are you
          going? The Death Star plans are not in the main computer.
        </p>
        <p>
          Nice! Come on! It's them! Blast them! Get back to the ship! Where are
          you going? Come back! He certainly has courage. What good will it do
          us if he gets himself killed? Come on! I think we took a wrong turn.
          There's no lock! That oughta hold it for a while. Quick, we've got to
          get across.
        </p>
        <p>
          I think I know what he has in mind. Master Luke, sir! Pardon me for
          asking...but, ah...what should Artoo and I do if we're discovered
          here? Lock the door! And hope they don't have blasters. That isn't
          very reassuring. I can't see a thing in this helmet. This is not going
          to work.
        </p>
      </div>
    </>
  );
}
