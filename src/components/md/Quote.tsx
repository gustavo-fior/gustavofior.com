interface QuoteProps {
  children: string;
}

const Quote = ({ children }: QuoteProps) => {
  return (
    <blockquote className="rounded-lg bg-white bg-opacity-20 px-6 py-4 drop-shadow-lg backdrop-blur-lg">
      {children}
    </blockquote>
  );
};

export default Quote;
