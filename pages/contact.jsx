// import styles from "../styles/Help.module.css";

// const Help = () => {
//   return (
//     <div className={styles.container}>
//       Needs help?
//     </div>
//   );
// };

// export default Help;

import Head from 'next/head';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input className={styles.input} type="text" id="name" name="name" required />

          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" name="email" required />

          <label className={styles.label} htmlFor="message">Message:</label>
          <textarea className={styles.textarea} id="message" name="message" rows="4" required></textarea>

          <button className={styles.button} type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
