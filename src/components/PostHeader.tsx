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
          <h1 className="pb-2 font-serif text-4xl font-medium">{title}</h1>
          <h3 className="whitespace-pre text-sm text-neutral-400">
            {date}
            {"  "}
            <span className={`text-orange-600 `}>•</span>
            {"  "}
            <span className="text-neutral-300">{readTime}</span>
          </h3>
        </div>
        <h1 className="mr-1 text-2xl md:text-3xl">{emoji}</h1>
      </div>
    </>
  );
};

export default PostHeader;
