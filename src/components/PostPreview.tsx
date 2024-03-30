import Link from "next/link";
import { motion } from "framer-motion";

type PostPreviewProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, description, date, slug }: PostPreviewProps) => {
  return (
    <Link href={`/blog/post/${slug}`}>
      <motion.div className="group flex justify-between pb-8  ">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-lg font-semibold transition duration-200 ease-in-out group-hover:text-[#e64100]">
            {title}
          </h2>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <p className="hidden min-w-fit text-sm text-zinc-500 md:block">
          {date}
        </p>
      </motion.div>
    </Link>
  );
};

export default PostPreview;
