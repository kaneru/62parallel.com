import Link from "next/link";
import cn from "classnames";
import { Container } from "./container";
import { useState } from "react";
import { useRouter } from "next/router";

const HEADER_MENU_ITEMS = [
  { id: 0, title: "About", url: "/about" },
  { id: 1, title: "Pressa", url: "/press" },
  // { id: 2, title: "Shop", url: "/shop" },
  {
    id: 3,
    title: "Music",
    url: "https://youthofnorth.bandcamp.com/",
    isExternalLink: true,
  },
];

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const router = useRouter();

  return (
    <header
      className={cn({
        ["bg-zinc-800 lg:bg-transparent"]: isMenuOpened,
      })}
    >
      <Container className="py-8">
        <nav className="flex flex-wrap gap-8 items-center lg:items-end justify-between lg:justify-between">
          <Link
            href="/"
            className={cn("hover:text-blue-500", {
              "text-zinc-50": isMenuOpened,
              "text-zinc-800": !isMenuOpened,
            })}
          >
            <h1 className="text-xl md:text-3xl font-bold text-capitalize">
              Юность Севера
            </h1>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-zinc-800 rounded-lg lg:hidden hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            <span className="sr-only">Открыть навигационное меню</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={cn("w-full lg:block lg:w-auto", {
              hidden: !isMenuOpened,
            })}
            id="mobile-menu"
          >
            <ul className="flex flex-col gap-6 lg:flex-row">
              {HEADER_MENU_ITEMS.map((item) => (
                <li key={item.id} className="text-lg font-medium">
                  {item.isExternalLink ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("hover:underline hover:text-blue-500", {
                        "text-zinc-800": !isMenuOpened,
                        "text-zinc-50": isMenuOpened,
                      })}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.url}
                      className={cn("hover:underline hover:text-blue-500", {
                        "text-zinc-800": !isMenuOpened,
                        "text-zinc-50": isMenuOpened,
                      })}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
