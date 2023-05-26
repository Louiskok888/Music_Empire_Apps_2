import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/music_empire.jpeg" alt="" width="90" height="90" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Music Empire</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/musicproducts" passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
          <Link href="/classes" passHref>
            <li className={styles.listItem}>Music Classes</li>
          </Link>
          <Link href="/events" passHref>
            <li className={styles.listItem}>Events</li>
          </Link>
          <Link href="/exam" passHref>
            <li className={styles.listItem}>Exam Boards</li>
          </Link>
          <Link href="/contact"passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href="/LoginPage" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <h3>Login</h3>
            <Image src="/img/login.png" alt="" width="30" height="30" />
          </div>
        </div>
      </Link>
      <Link href="/RegisterPage" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <h3>Register</h3>
            <Image src="/img/login.png" alt="" width="30" height="30" />
          </div>
        </div>
      </Link>

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
