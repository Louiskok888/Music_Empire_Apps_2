import styles from "../styles/lesson.module.css";
import Image from "next/image";

const lesson = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image src="/img/featured.png" alt="" width="180" height="180" />
          Piano
        </div>
        <div className={styles.item}>
          <Image src="/img/featured3.png" alt="" width="180" height="180" />
          Keyboards
        </div>
        <div className={styles.item}>
          <Image src="/img/featured9.png" alt="" width="180" height="180" />
          Electric Organ
        </div>
        <div className={styles.item}>
          <Image src="/img/playbyear.png" alt="" width="180" height="180" />
          Play By Ear
        </div>
      </div>
    </div>
  );
};

export default lesson;
