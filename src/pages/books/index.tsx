import { AnimatePresence, motion } from "framer-motion";
import {
  BookCheckIcon,
  BookOpen,
  BookXIcon,
  LibraryBigIcon,
  ShoppingBag,
  XIcon,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { books } from "~/data/books";

type BookStatus = "READ" | "READING" | "BUY" | "WILL_READ" | "LOST";

export default function Books() {
  // State to track the selected status filter. When a status badge is clicked, filter the books by that status
  const [selectedStatus, setSelectedStatus] = useState<BookStatus | null>(null);

  const filteredBooks = selectedStatus
    ? books.filter((book) => book.status === selectedStatus)
    : books;

  const readingBooks = filteredBooks.filter(
    (book) => book.status === "READING"
  );
  const nonReadingBooks = filteredBooks
    .filter((book) => book.status !== "READING")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  const sortedBooks = [...readingBooks, ...nonReadingBooks];

  return (
    <>
      <Head>
        <title>Gustavo Fior</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Brazilian software engineer" />
        <meta property="og:title" content="Gustavo Fior" />
        <meta property="og:description" content="Brazilian software engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gustavofior.com" />
        <meta property="og:site_name" content="Gustavo Fior" />

        <meta
          property="og:image"
          content="https://www.gustavofior.com/api/og"
        />

        <meta
          property="twitter:image"
          content="https://www.gustavofior.com/api/og"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Gustavo Fior" />
        <meta property="twitter:description" content="Software engineer" />
      </Head>
      {/* MAIN CONTENT */}
      <div className="flex flex-col pb-48">
        <div className="flex flex-row items-center justify-between gap-4 pb-8 align-middle">
          <div>
            <h1 className="pb-1.5 font-serif text-2xl font-medium">Books</h1>
            <h3 className="whitespace-pre text-sm text-neutral-400">
              My own little library
            </h3>
          </div>
          {/* Show the active filter with an X button to clear it */}
          <AnimatePresence>
            {selectedStatus && (
              <motion.button
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                viewport={{ once: true }}
                onClick={() => setSelectedStatus(null)}
                className="group flex w-fit items-center gap-1 text-xs transition-opacity hover:opacity-70"
              >
                {selectedStatus === "READ" && (
                  <>
                    <BookCheckIcon
                      className="mb-[1px] size-[11px] fill-emerald-100 text-emerald-500"
                      strokeWidth={2.5}
                    />
                    <span className="text-emerald-500">Read</span>
                  </>
                )}
                {selectedStatus === "READING" && (
                  <>
                    <BookOpen
                      className="size-[11px] fill-orange-100 text-orange-500"
                      strokeWidth={2.5}
                    />
                    <span className="text-orange-500">Reading</span>
                  </>
                )}
                {selectedStatus === "BUY" && (
                  <>
                    <ShoppingBag
                      className="mb-[1px] size-[11px] fill-sky-100 text-sky-500"
                      strokeWidth={2.5}
                    />
                    <span className="text-sky-500">Buy</span>
                  </>
                )}
                {selectedStatus === "WILL_READ" && (
                  <>
                    <LibraryBigIcon
                      className="mb-px size-[11px] fill-amber-100 text-amber-500"
                      strokeWidth={2.3}
                    />
                    <span className="text-amber-500">Will Read</span>
                  </>
                )}
                {selectedStatus === "LOST" && (
                  <>
                    <BookXIcon
                      className="mb-[1px] size-[11px] fill-red-100 text-red-500"
                      strokeWidth={2.5}
                    />
                    <span className="text-red-500">Dropped</span>
                  </>
                )}
                <XIcon className="ml-1 size-3 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-2 gap-8 gap-y-16 md:grid-cols-4">
          {sortedBooks.map((book) => (
            <div key={book.name} className="flex flex-col gap-4">
              <div className="book book-fade book-hover-open group relative w-fit rounded-sm rounded-r-none">
                <Image
                  src={book.coverImageUrl}
                  alt={book.name}
                  width={1920}
                  height={1080}
                  className="pointer-events-none block h-[75px] w-[50px] border-r-[2px] border-neutral-200 object-cover transition-all duration-100 ease-in-out"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 left-0.5 w-[calc(100%-99%)] bg-neutral-800/10"></div>
              </div>
              <div className="flex flex-col gap-1">
                {book.status === "READ" && (
                  <button
                    onClick={() =>
                      selectedStatus === "READ"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("READ")
                    }
                    className="flex w-fit items-center gap-1 text-[10px] text-emerald-500 transition-opacity hover:opacity-70"
                  >
                    <BookCheckIcon
                      className="mb-[1px] size-[9px] fill-emerald-100"
                      strokeWidth={2.5}
                    />
                    Read
                  </button>
                )}
                {book.status === "READING" && (
                  <button
                    onClick={() =>
                      selectedStatus === "READING"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("READING")
                    }
                    className="flex w-fit items-center gap-1 text-[10px] text-orange-500 transition-opacity hover:opacity-70"
                  >
                    <BookOpen
                      className="size-[9px] fill-orange-100"
                      strokeWidth={2.5}
                    />
                    Reading
                  </button>
                )}
                {book.status === "BUY" && (
                  <button
                    onClick={() =>
                      selectedStatus === "BUY"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("BUY")
                    }
                    className="flex w-fit items-center gap-1 text-[10px] text-sky-500 transition-opacity hover:opacity-70"
                  >
                    <ShoppingBag
                      className="mb-[1px] size-[9px] fill-sky-100"
                      strokeWidth={2.5}
                    />
                    Buy
                  </button>
                )}
                {book.status === "WILL_READ" && (
                  <button
                    onClick={() =>
                      selectedStatus === "WILL_READ"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("WILL_READ")
                    }
                    className="flex w-fit items-center gap-1 text-[10px] text-amber-500 transition-opacity hover:opacity-70"
                  >
                    <LibraryBigIcon
                      className="mb-px size-[9px] fill-amber-100"
                      strokeWidth={2.3}
                    />
                    Will Read
                  </button>
                )}
                {book.status === "LOST" && (
                  <button
                    onClick={() =>
                      selectedStatus === "LOST"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("LOST")
                    }
                    className="flex w-fit items-center gap-[3px] text-[10px] text-red-500 transition-opacity hover:opacity-70"
                  >
                    <BookXIcon
                      className="mb-[1px] size-[9px] fill-red-100"
                      strokeWidth={2.5}
                    />
                    Dropped
                  </button>
                )}
                <p className="line-clamp-2 text-sm">{book.name}</p>
                <p className="mb-1 text-xs tracking-wide text-neutral-400">
                  {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
