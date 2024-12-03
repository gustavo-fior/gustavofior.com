
interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <div className="flex gap-4">
      <div className={`w-0.5 bg-[#ff743d]`} />
      <blockquote> {children} </blockquote>
    </div>
  );
};

export default Quote;
