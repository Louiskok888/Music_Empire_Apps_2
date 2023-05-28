import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import AddButton from "../components/AddButton";
import AddButton2 from "../components/AddButton2";
import Add from "../components/Add";
import Featured from "../components/Featured";
import PianoList from "../components/PianoList";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Profile from "./Profile";


export default function Home({ pianoList, admin, user }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Empire</title>
        <meta name="description" content="Best piano distributor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <div className={styles.adminButton}>
        {admin && <AddButton setClose={setClose} />}
        <Link href="/admin" passHref>
          <div>{admin && <AddButton2 />}</div>
        </Link>
        {user && <Profile/>}
      </div>
      <PianoList pianoList={pianoList} />
      {!close && <Add setClose={setClose} pianoList={pianoList} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  let user = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
    user = true;
  }

  const res = await axios.get("https://music-empire-apps-2.vercel.app/api/products");
  return {
    props: {
      pianoList: res.data,
      admin,
      user,
    },
  };
};
