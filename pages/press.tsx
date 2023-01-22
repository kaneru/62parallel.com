import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/container";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const PRESS_DATA = [
  {
    id: 1,
    title:
      "Минус 50, гараж и лейбл из газеты. Как и чем живет якутский панк-рок — в проекте фотографа Василия Колотилова",
    source: "Такие дела",
    link: "https://takiedela.ru/2019/06/ya-upal-v-sugrob-i-umer/",
    date: "2019-06-28",
  },
  {
    id: 2,
    title: "The Punk Scene in Yakutsk, Russia Turns Isolation Into Inspiration",
    source: "Bandcamp",
    link: "https://daily.bandcamp.com/scene-report/yakutsk-punk-scene-list",
    date: "2019-01-11",
  },
  {
    id: 3,
    title: "Вышел сборник якутского панка «62 параллель»",
    source: "Sadwave",
    link: "https://sadwave.com/2015/01/yakutsk-punk/",
    date: "2015-01-28",
  },
  {
    id: 4,
    title: "Вдохновленные изоляцией: панк-сцена Якутска",
    source: "Sadwave",
    link: "https://sadwave.com/2019/02/yakutsk-bandcamp/",
    date: "2019-02-14",
  },
  {
    id: 5,
    title:
      "«Юность Севера» — якутский панк-лейбл, промоагентство и сплоченное вокруг музыки сообщество",
    source: "НОЖ",
    link: "https://knife.media/russian-microlabels/",
    date: "2015-01-28",
  },
  {
    id: 6,
    title: "ЮНОСТЬ СЕВЕРА",
    source: "Институт музыкальных инициатив",
    link: "https://i-m-i.ru/profiles/youth-of-north",
    date: null,
  },
  {
    id: 7,
    title:
      "Yakutsk is one of the coldest cities on Earth. It's producing some of Russia's hottest punk rock",
    source: "Los Angeles Times",
    link: "https://www.latimes.com/world/la-fg-russia-yakutsk-siberia-punk-rock-20190426-story.html",
    date: "2019-04-26",
  },
  {
    id: 8,
    title:
      "«Никто не хочет играть грязный панк!»: якутская сцена, «Юность Севера» и «Дом музыканта»",
    source: "Sadwave",
    link: "https://sadwave.com/2022/12/saha-punk/",
    date: "2022-12-29",
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
          <h1 className="uppercase text-center text-2xl font-bold">
            Всякая хуйня о нас в прессе
          </h1>
          <div className="mt-8">
            <Image
              src="/images/press/jumbotron.png"
              alt=""
              width="854"
              height="533"
              className="block mx-auto w-full"
            />
            <ul className="flex flex-col gap-6 mt-8">
              {PRESS_DATA.map((article) => (
                <li key={article.id} className="flex flex-col">
                  <a
                    href={article.link}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                  <div className="flex">
                    <span>{article.source}</span>
                    {article.date ? (
                      <>
                        {"  •  "}
                        <span>{article.date}</span>
                      </>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
