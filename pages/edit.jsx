import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/edit.module.css";
import { useState } from "react";
import Link from "next/link";

const Edit = ({ pianoList }) => {
  const router = useRouter();
  const productId = router.query.productId;
  const productTitle = router.query.productTitle;
  const productImg = router.query.productImg;
  const productDesc = router.query.productDesc;
  const [id, setId] = useState(null)
  const [title, setTitle] = useState(null)
  const [desc, setDesc] = useState(null)
  // const [img, setImg] = useState("")


  const handleUpdate = async (id) => {

    try {
      const res = await axios.put("music-empire-apps-2.vercel.app
/api/products/" + id, {
        _id: id,
        title: title,
        desc: desc,
        // img: `/img/${img}`,
      });
    router.push("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div classNmae={styles.wrapper}>
        <div className={styles.item}>Product Id : {productId}</div>
        <input 
        className={styles.item} 
        placeholder="Enter new Id" 
        type="text" 
        onChange={(e) => setId(e.target.value)}
        />
        <div className={styles.item}>Title : {productTitle}</div>
        <input
          className={styles.item}
          placeholder="Enter new Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.item}>Description : {productDesc}</div>
        <textarea
          className={styles.item}
          placeholder="Enter new Description"
          rows={5}
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className={styles.item}>
          <div className={styles.item}>
            <Image
              src={productImg}
              width={150}
              height={150}
              objectFit="cover"
              alt=""
            />
          </div>
          <input
            className={styles.item}
            placeholder="Enter new Image"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}

          />
        </div>
        <Link href="/admin" passHref>
        <div className={styles.item}>
        <button className={styles.button} onClick={()=>handleUpdate(productId)}>
        Update
        </button>
        </div>
        </Link>
      </div>
    </div>
  );
};


export default Edit;
