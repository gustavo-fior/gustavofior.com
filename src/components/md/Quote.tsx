interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <div className="my-1 flex gap-4">
      <div className={`w-px rounded-full bg-neutral-300`} />
      <blockquote className="font-serif font-medium not-italic leading-relaxed tracking-wider text-neutral-900">
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
