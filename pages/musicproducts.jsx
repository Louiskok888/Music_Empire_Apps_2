import styles from "../styles/musicproducts.module.css";
import Image from "next/image";

const musicproducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image src="/img/featured.png" alt="" width="180" height="180" />
          Piano
        </div>
        <div className={styles.item}>
          <Image src="/img/featured14.png" alt="" width="180" height="180" />
          Drums
        </div>
        <div className={styles.item}>
          <Image src="/img/featured12.png" alt="" width="180" height="180" />
          Guitar
        </div>
        <div className={styles.item}>
          <Image src="/img/featured15.png" alt="" width="180" height="180" />
          Brass Intruments
        </div>
        <div className={styles.item}>
          <Image src="/img/flute.png" alt="" width="180" height="180" />
          Woodwind Intruments
        </div>
        <div className={styles.item}>
          <Image src="/img/amplifier.png" alt="" width="180" height="180" />
          Amplifier
        </div>
        <div className={styles.item}>
          <Image src="/img/featured3.png" alt="" width="180" height="180" />
          Keyboard
        </div>
        <div className={styles.item}>
          <Image src="/img/accessories.png" alt="" width="180" height="180" />
          Accessories
        </div>
      </div>
    </div>
  );
};

export default musicproducts;
