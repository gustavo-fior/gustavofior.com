import Link from "next/link";

type PostPreviewProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const PostPreview = ({
  title,
  description,
  date,
  slug,
}: PostPreviewProps) => {
  return (
    <Link href={`/blog/post/${slug}`}>
      <div className="flex justify-between rounded-lg px-6 py-4 transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:drop-shadow-lg hover:backdrop-blur-lg ">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">
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
