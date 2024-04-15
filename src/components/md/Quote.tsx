import { primaryOrange } from "~/utils/colors";

interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <div className="flex gap-4 py-4">
      <div className={`w-0.5 bg-[${primaryOrange}]`} />
      <blockquote> {children} </blockquote>
    </div>
  );
};

export default Quote;
