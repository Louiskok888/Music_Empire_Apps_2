import styles from "../styles/classes.module.css";
import Image from "next/image";
import Link from "next/link";

const classes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/lesson" passHref>
          <div className={styles.item}>
            <Image src="/img/pianolearn.png" alt="" width="200" height="200" />
            <div className={styles.inst}>Piano</div>
          </div>
        </Link>
        <div className={styles.item}>
          <Image src="/img/drumslearn.png" alt="" width="200" height="200" />
          <div className={styles.inst}>Drums</div>
        </div>
        <div className={styles.item}>
          <Image src="/img/guitarlearn.png" alt="" width="200" height="200" />
          <div className={styles.inst}>Guitar</div>
        </div>
        <div className={styles.item}>
          <Image src="/img/keyboardlearn.png" alt="" width="200" height="200" />
          <div className={styles.inst}>Keyboard</div>
        </div>
      </div>
    </div>
  );
};

export default classes;
