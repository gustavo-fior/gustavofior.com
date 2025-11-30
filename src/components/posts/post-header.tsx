interface PostHeaderProps {
  title: string;
  readTime: string;
  date: string;
  emoji: string;
}

const PostHeader = ({ title, readTime, date, emoji }: PostHeaderProps) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-4 pb-8 align-middle">
        <div>
          <h1 className="pb-1.5 font-serif text-2xl font-medium tracking-[0.01em]">
            {title}
          </h1>
          <h3 className="whitespace-pre text-sm tracking-[0.01em] text-neutral-400">
            {date}
            {"  "}
            <span className={`text-orange-600`}>/</span>
            {"  "}
            <span className="text-neutral-400">{readTime}</span>
          </h3>
        </div>
        <h1 className="mr-1 hidden text-xl md:text-2xl">{emoji}</h1>
      </div>
    </>
  );
};

export default PostHeader;
