interface PostHeaderProps {
  title: string;
  readTime: string;
  date: string;
  emoji: string;
}

const PostHeader = ({ title, readTime, date, emoji }: PostHeaderProps) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-4 pb-6 align-middle md:pb-8">
        <div>
          <h1 className="pb-1.5 font-serif text-[1.6rem] font-[450]">
            {title}
          </h1>
          <h3 className="whitespace-pre text-sm font-[350] tracking-[0.01em] text-neutral-400">
            {date}
            {"  "}
            {/* <span className={`font-light text-neutral-300`}>/</span>
            {"  "}
            <span className="text-neutral-400">{readTime}</span> */}
          </h3>
        </div>
        <h1 className="mr-1 hidden text-xl md:text-2xl">{emoji}</h1>
      </div>
    </>
  );
};

export default PostHeader;
