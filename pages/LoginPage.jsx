import axios from "axios";
import { useContext, useState } from "react";
import Link from "next/link";
import styles from "../styles/LoginPage.module.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLoginSubmit(ev) {
      ev.preventDefault();
      try {
        await axios.post("https://music-empire-apps-2-kpe0r1mfe-louiskok888.vercel.app/api/userlogin", {
          email, 
          password,
        });    
        alert("Login successful");
        window.location.href = "/Profile";
      } catch (e) {
        alert("Login failed");
      }
    }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.login}>Login</div>
        <form className={styles.wrapper}>
          <input className={styles.input}
            type="email"
            placeholder="email address"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input className={styles.input}
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button onClick={handleLoginSubmit} className={styles.button}>Login</button>
          <div>
            <div className={styles.registernew}>Register new account!</div>
            <Link href="/RegisterPage" passHref>
            <div className={styles.register}>Go to Register</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
