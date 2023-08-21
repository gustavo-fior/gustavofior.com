import Link from "next/link";
import { motion } from "framer-motion";

type PostPreviewProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  emoji: string;
};

const PostPreview = ({
  title,
  description,
  date,
  slug,
  emoji,
}: PostPreviewProps) => {
  return (
    <Link href={`/blog/post/${slug}`}>
        <motion.div whileHover={{ scale: 1.005 }} whileTap={{scale: 0.98}} className="flex justify-between rounded-lg px-6 py-4 transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:drop-shadow-lg hover:backdrop-blur-lg">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <h2 className="hidden text-2xl sm:block">{emoji}</h2>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <p className="text-slate-300">{description}</p>
          </div>
          <p className="hidden min-w-fit italic text-slate-400 md:block">
            {date}
          </p>
        </motion.div>
    </Link>
  );
};

export default PostPreview;
