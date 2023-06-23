import Link from "next/link";

type PostPreviewProps = {
  title: string;
  emoji: string;
  description: string;
  date: string;
  slug: string;
};

const PostPreview = ({
  title,
  emoji,
  description,
  date,
  slug,
}: PostPreviewProps) => {
  return (
    <Link href={slug}>
      <div className="flex justify-between rounded-lg px-6 py-4 transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:drop-shadow-lg hover:backdrop-blur-lg ">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">
            <span className="pr-3">{emoji}</span>
            {title}
          </h2>
          <p className="text-slate-300">{description}</p>
        </div>
        <p className="italic min-w-fit text-slate-400">{date}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
