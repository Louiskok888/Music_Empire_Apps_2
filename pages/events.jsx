import styles from "../styles/Events.module.css";
import Image from "next/image";

const Events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image src="/img/recital.png" alt="" width="700" height="500" />
        </div>
        <div className={styles.desc}>
          It is my pleasure to welcome you all to this wonderful music concert.
          Tonight, we are here to celebrate the power of music and the talented
          performers who bring it to life. Whether you are a die-hard music fan
          or simply here to experience something new, I can assure you that
          tonight's concert will be a night to remember. Music has the
          incredible ability to connect people from all walks of life and to
          evoke a range of emotions. It has the power to lift our spirits, move
          us to tears, and even transport us to another place and time. Tonight,
          we will experience all of that and more as we witness the incredible
          talent of the performers who will take the stage. I want to take a
          moment to thank our sponsors for making this concert possible. Without
          their support, we would not be able to bring this incredible evening
          of music to you. And of course, a huge thank you to the performers
          themselves for sharing their talents with us and making tonight's
          concert a reality. So sit back, relax, and get ready to be transported
          on a musical journey like no other. Once again, welcome to this
          amazing music concert, and enjoy the show!
        </div>
      </div>
    </div>
  );
};

export default Events;
