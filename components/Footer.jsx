import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/playing_piano.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          “Music can change the world because it can change people.” 
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR SCHOOLS</h1>
          <p className={styles.text}>
            2450 Ang Mo Kio Ave 8,
            <br /> Singapore 569811
            <br /> (65) 99807788
          </p>
          <p className={styles.text}>
            2550 Bishan Ave 7,
            <br /> Singapore 569845
            <br /> (65) 99807787
          </p>
          <p className={styles.text}>
            2550 Serangoon Ave 11,
            <br /> Singapore 669876
            <br /> (65) 99807789
          </p>
          <p className={styles.text}>
            878 Orchard Cecil Street
            <br /> Singapore 378811
            <br /> (65) 99807785
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00am – 10:00pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00am – 9:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
