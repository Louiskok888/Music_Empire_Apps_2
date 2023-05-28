import { createContext, useState } from "react";
import axios from "axios";
import { useScriptProviderContext } from "@paypal/react-paypal-js";
import Link from "next/link";
import styles from "../styles/RegisterPage.module.css"
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();


  async function registerUser(ev) {
    ev.preventDefault();

    try {
      const newUser = {
        name,
        email,
        password,
      };

      await axios.post("music-empire-apps-2.vercel.app
/api/user", newUser);    
      router.push("/LoginPage")
      alert("Registration successful. Now you can log in");

    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <form className={styles.wrapper} >
          <input className={styles.input} 
            type="text"
            placeholder="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
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
          <button onClick={registerUser} className={styles.button}>Register</button>
          <div>
            Already have an account?{" "}
            <Link href="/LoginPage" passHref>
            <div className={styles.login}>Go to Login</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

