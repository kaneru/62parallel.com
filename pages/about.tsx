import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const ABOUT_LINKS = [
  {
    id: 1,
    title: "Bandcamp",
    link: "https://youthofnorth.bandcamp.com/music",
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com/62parallel",
  },
  {
    id: 3,
    title: "Twitter",
    link: "https://twitter.com/62parallel",
  },
  {
    id: 4,
    title: "VK",
    link: "https://vk.com/62parallel",
  },
  {
    id: 5,
    title: "ucoz.net",
    link: "https://62parallel.ucoz.net",
  },
  {
    id: 6,
    title: "Blogspot",
    link: "http://anatoliiskjkolledij.blogspot.com",
  },
  {
    id: 7,
    title: "Tumblr",
    link: "https://62parallel.tumblr.com",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Юность Севера</title>
      </Head>
      <Header />
      <main>
        <Container className="lg:px-64">
          <h1 className="uppercase text-center text-2xl font-bold">О нас</h1>
          <div className="mt-8">
            <Image
              src="/images/about/jumbotron.jpg"
              alt=""
              width="854"
              height="533"
              className="block mx-auto w-full"
            />
            <div className="mt-8">
              <p>в якутске жить одно удовольствие</p>
              <ul className="flex flex-col gap-6 mt-8">
                {ABOUT_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
