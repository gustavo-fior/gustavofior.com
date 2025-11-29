import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type PostPreviewProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  showDate?: boolean;
};

const PostPreview = ({
  title,
  description,
  date,
  slug,
  showDate = true,
}: PostPreviewProps) => {
  return (
    <Link
      href={`/blog/post/${slug}`}
      className={`${showDate ? "w-full" : "flex w-fit"}`}
    >
      <motion.div className="group flex justify-between pb-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <h2 className="text-base transition duration-200 ease-in-out group-hover:text-neutral-500">
              {title}
            </h2>
            <ArrowRight
              className={`h-2.5 w-2.5 text-neutral-400 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:opacity-100`}
              strokeWidth={2.6}
            />
          </div>
          <p className="max-w-lg text-sm tracking-[0.005em] text-neutral-400">
            {description}
          </p>
        </div>
        {showDate && (
          <p className="hidden min-w-fit text-xs tabular-nums tracking-tighter text-neutral-300 md:block">
            {new Date(date).toLocaleString("default", { month: "2-digit" })}/
            {new Date(date).getFullYear()}
          </p>
        )}
      </motion.div>
    </Link>
  );
};

export default PostPreview;
