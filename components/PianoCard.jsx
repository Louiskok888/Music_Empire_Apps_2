import Image from "next/image";
import styles from "../styles/PianoCard.module.css";
import Link from "next/link";

const PianoCard = ({ piano }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${piano._id}`} passHref>
        <Image src={piano.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{piano.title}</h1>
      <span className={styles.price}>${piano.prices[0]}</span>
      <p className={styles.desc}>{piano.desc}</p>
    </div>
  );
};

export default PianoCard;