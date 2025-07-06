interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <div className="flex gap-4">
      <div className={`w-0.5 rounded-full bg-orange-600`} />
      <blockquote className="my-1 font-serif text-xl font-black italic leading-relaxed tracking-wide text-neutral-600">
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
