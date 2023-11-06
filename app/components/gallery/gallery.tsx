import styles from "./gallery.module.css";
import Image from "next/image";
import coverPhoto from "../../assets/img/cover_photo.jpg";

export default function Gallery(data: any) {
  return (
    <>
      <div id={styles.gallery_container}>
        <figure>
          <div className={styles.image_wrapper}>
            <Image src={coverPhoto} alt="test" fill={true} />
          </div>
          <figcaption>
            <p>asdfasdfadsf</p>
            <p>asdfasdfasdf</p>
          </figcaption>
        </figure>

        <figure>
          <div className={styles.image_wrapper}>
            <Image src={coverPhoto} alt="test" fill={true} />
          </div>
          <figcaption>
            <p>asdfasdfadsf</p>
            <p>asdfasdfasdf</p>
          </figcaption>
        </figure>
        <figure>
          <div className={styles.image_wrapper}>
            <Image src={coverPhoto} alt="test" fill={true} />
          </div>
          <figcaption>
            <p>asdfasdfadsf</p>
            <p>asdfasdfasdf</p>
          </figcaption>
        </figure>
        <figure>
          <div className={styles.image_wrapper}>
            <Image src={coverPhoto} alt="test" fill={true} />
          </div>
          <figcaption>
            <p>asdfasdfadsf</p>
            <p>asdfasdfasdf</p>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
