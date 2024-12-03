
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
          <h1 className="pb-1.5 text-neutral-200">
            {title}
          </h1>
          <h3 className="text-sm text-neutral-500 whitespace-pre">
            {date}  <span className={`text-[#ff743d] `}>•</span>{"  "}
            <span className="italic">{readTime}</span>
          </h3>
        </div>
        <h1 className="text-2xl md:text-3xl mr-1">{emoji}</h1>
      </div>
    </>
  );
};

export default PostHeader;
