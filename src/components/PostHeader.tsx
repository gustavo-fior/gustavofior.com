interface PostHeaderProps {
  title: string;
  readTime: string;
  date: string;
  emoji: string;
}

const PostHeader = ({ title, readTime, date, emoji }: PostHeaderProps) => {
  return (
    <div className="flex flex-row pb-8 gap-4 pt-24 align-middle items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        {emoji}
      </h1>
      <div>
        <h1 className="pb-1 text-lg font-bold sm:text-xl md:text-2xl">
          {title}
        </h1>
        <h3 className="text-zinc-500 text-sm md:text-base">
          {date} <span className="text-[#e64100]">•</span>{" "}
          <span className="italic">{readTime}</span>
        </h3>
      </div>
      
    </div>
  );
};

export default PostHeader;
