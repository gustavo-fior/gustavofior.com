
interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <div className="flex gap-4">
      <div className={`w-0.5 bg-orange-600`} />
      <blockquote> {children} </blockquote>
    </div>
  );
};

export default Quote;
