import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Юность Севера</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            src="/images/placeholder.jpg"
            alt=""
            width={360}
            height={225}
            className={styles.image}
          />
          <p className={styles.text}>Coming sooon...</p>
        </div>
      </main>
    </>
  );
}
