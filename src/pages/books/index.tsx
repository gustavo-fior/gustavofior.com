import { useAtom } from "jotai";
import {
  BookmarkCheckIcon,
  BookmarkIcon,
  BookmarkPlusIcon,
  BookmarkXIcon,
  StarIcon,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { books } from "~/data/books";
import {
  filtersAtom,
  isBooksFilterOpenAtom,
  languagesAtom,
  sortsAtom,
} from "~/utils/atoms";

export default function Books() {
  // State to track the selected status filter. When a status badge is clicked, filter the books by that status
  const [selectedStatus, setSelectedStatus] = useAtom(filtersAtom);
  const [selectedSort] = useAtom(sortsAtom);
  const [selectedLanguage] = useAtom(languagesAtom);
  const [isFiltersOpen, setIsFiltersOpen] = useAtom(isBooksFilterOpenAtom);
  const filteredBooks = selectedStatus
    ? books.filter((book) => book.status === selectedStatus)
    : books;

  // Apply sorting based on selectedSort
  const getSortedBooks = () => {
    const booksCopy = [...filteredBooks];

    switch (selectedSort) {
      case "BEST":
        return booksCopy.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
      case "WORST":
        return booksCopy.sort((a, b) => {
          // Books without stars go to the end
          if (a.stars == null && b.stars == null) return 0;
          if (a.stars == null) return 1;
          if (b.stars == null) return -1;
          return a.stars - b.stars;
        });
      case "ABC":
        return booksCopy.sort((a, b) => {
          return selectedLanguage === "PT"
            ? a.name.localeCompare(b.name)
            : a.englishName.localeCompare(b.englishName);
        });
      case "ZXY":
        return booksCopy.sort((a, b) => {
          return selectedLanguage === "PT"
            ? b.name.localeCompare(a.name)
            : b.englishName.localeCompare(a.englishName);
        });
      default:
        // Default: reading books first, then by date
        const readingBooks = booksCopy.filter(
          (book) => book.status === "READING"
        );
        const nonReadingBooks = booksCopy
          .filter((book) => book.status !== "READING")
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        return [...readingBooks, ...nonReadingBooks];
    }
  };

  const sortedBooks = getSortedBooks();

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
              My own little library.
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 gap-y-16 md:grid-cols-4">
          {sortedBooks.map((book) => (
            <div key={book.name} className="flex flex-col gap-4">
              <div className="book book-fade book-hover-open group relative w-fit select-none rounded-sm rounded-r-none">
                <Image
                  src={book.coverImageUrl}
                  alt={book.name}
                  width={1920}
                  height={1080}
                  className="pointer-events-none block h-[75px] w-[50px] border-r-[2px] border-amber-50 object-cover transition-all duration-100 ease-in-out"
                  priority
                  quality={100}
                  sizes="50px"
                  loading="eager"
                />
                <div className="absolute inset-0 left-0.5 w-[calc(100%-99%)] bg-neutral-800/10"></div>
              </div>
              <div className="flex flex-col gap-1">
                {book.status === "READ" && (
                  <button
                    onClick={() => {
                      if (!isFiltersOpen) setIsFiltersOpen(true);
                      selectedStatus === "READ"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("READ");
                    }}
                    className="flex w-fit select-none items-center gap-[3px] text-[10px] text-emerald-500 transition-opacity hover:opacity-70"
                  >
                    <BookmarkCheckIcon
                      className="mb-[1px] size-[9px] fill-emerald-100"
                      strokeWidth={2.5}
                    />
                    Read
                  </button>
                )}
                {book.status === "READING" && (
                  <button
                    onClick={() => {
                      if (!isFiltersOpen) setIsFiltersOpen(true);
                      selectedStatus === "READING"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("READING");
                    }}
                    className="flex w-fit select-none items-center gap-[3px] text-[10px] text-orange-500 transition-opacity hover:opacity-70"
                  >
                    <BookmarkIcon
                      className="mb-[1px] size-[9px] fill-orange-100"
                      strokeWidth={2.5}
                    />
                    Reading
                  </button>
                )}
                {book.status === "BUY" && (
                  <button
                    onClick={() => {
                      if (!isFiltersOpen) setIsFiltersOpen(true);
                      selectedStatus === "BUY"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("BUY");
                    }}
                    className="flex w-fit select-none items-center gap-[3px] text-[10px] text-sky-500 transition-opacity hover:opacity-70"
                  >
                    <BookmarkPlusIcon
                      className="mb-[1px] size-[9px] fill-sky-100"
                      strokeWidth={2.5}
                    />
                    Buy
                  </button>
                )}
                {book.status === "WILL_READ" && (
                  <button
                    onClick={() => {
                      if (!isFiltersOpen) setIsFiltersOpen(true);
                      selectedStatus === "WILL_READ"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("WILL_READ");
                    }}
                    className="flex w-fit select-none items-center gap-[3px] text-[10px] text-amber-500 transition-opacity hover:opacity-70"
                  >
                    <BookmarkIcon
                      className="mb-[1px] size-[9px] fill-amber-100"
                      strokeWidth={2.5}
                    />
                    Will Read
                  </button>
                )}
                {book.status === "LOST" && (
                  <button
                    onClick={() => {
                      if (!isFiltersOpen) setIsFiltersOpen(true);
                      selectedStatus === "LOST"
                        ? setSelectedStatus(null)
                        : setSelectedStatus("LOST");
                    }}
                    className="flex w-fit select-none items-center gap-[3px] text-[10px] text-red-500 transition-opacity hover:opacity-70"
                  >
                    <BookmarkXIcon
                      className="mb-[1px] size-[9px] fill-red-100"
                      strokeWidth={2.5}
                    />
                    Dropped
                  </button>
                )}
                <p className="pointer-events-none line-clamp-2 text-sm">
                  {selectedLanguage === "PT" ? book.name : book.englishName}
                </p>
                <p className="pointer-events-none mb-1 text-xs tracking-wide text-neutral-400">
                  {book.author}
                </p>
                {book.stars && (
                  <div className="flex items-center gap-0.5">
                    {/* Full stars */}
                    {Array.from({ length: Math.floor(book.stars) }).map(
                      (_, index) => (
                        <StarIcon
                          key={index}
                          className="size-[9px] fill-yellow-200 text-yellow-500"
                          strokeWidth={2.5}
                        />
                      )
                    )}
                    {/* Half star */}
                    {book.stars % 1 !== 0 && (
                      <div className="relative size-[9px]">
                        <StarIcon
                          className="absolute size-[9px] text-transparent"
                          strokeWidth={2.5}
                        />
                        <div
                          className="absolute overflow-hidden"
                          style={{ width: "50%" }}
                        >
                          <StarIcon
                            className="size-[9px] fill-yellow-200 text-yellow-500"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
