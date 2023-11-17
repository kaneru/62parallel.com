import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Юность Севера</title>
      </Head>
      <Header />
      <main>
        <div className="grid place-items-center">
          <Image
            src="/images/main-page/us.jpeg"
            alt="Арт Юность Севера"
            width={562}
            height={640}
            className="w-screen h-[auto] sm:w-[562px] sm:h-[640px] sm:mt-6"
          />
        </div>
        <div className="grid place-items-center">
          <Image
            src="/images/main-page/photo_2023-11-17 22.10.48.jpeg"
            alt="Арт Юность Севера"
            width={562}
            height={640}
            className="w-screen h-[auto] sm:w-[562px] sm:h-[640px] sm:mt-6"
          />
        </div>
      </main>
    </>
  );
}
