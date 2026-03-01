interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <div className="flex gap-4">
      <div className={`w-px rounded-full bg-neutral-300`} />
      <blockquote className="my-0.5 font-serif font-[450] not-italic leading-relaxed tracking-wide text-neutral-800">
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
