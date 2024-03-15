interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <blockquote className="rounded-lg bg-zinc-900 py-4 px-5 text-[#e64100]">
      {children}
    </blockquote>
  );
};

export default Quote;
