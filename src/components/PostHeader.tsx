interface PostHeaderProps {
  title: string;
  readTime: string;
  date: string;
  emoji: string;
}

const PostHeader = ({
  title,
  readTime,
  date,
  emoji
}: PostHeaderProps) => {
  return (
      <div className="pb-4">
        <h1 className="pb-6 text-5xl font-bold md:text-6xl lg:text-7xl">{emoji}</h1>
        <h1 className="pb-4 text-3xl sm:text-4xl font-bold md:text-5xl">{title}</h1>
        <h3 className="pb-4 text-slate-400 md:text-lg">
          {date} • <span className="italic">{readTime}</span>
        </h3>
      </div>
  );
};

export default PostHeader;
