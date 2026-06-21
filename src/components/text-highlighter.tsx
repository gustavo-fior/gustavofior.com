import {
  motion,
  type Transition,
  useInView,
  type UseInViewOptions,
} from "framer-motion";
import {
  type ElementType,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

type HighlightDirection = "ltr" | "rtl" | "ttb" | "btt";

type TextHighlighterProps = {
  /** The text content to be highlighted */
  children: React.ReactNode;
  /** HTML element to render as @default "span" */
  as?: ElementType;
  /** How to trigger the animation @default "inView" */
  triggerType?: "hover" | "ref" | "inView" | "auto";
  /** Animation transition configuration */
  transition?: Transition;
  /** Options for useInView hook when triggerType is "inView" */
  useInViewOptions?: UseInViewOptions;
  /** Class name for the highlighted element */
  className?: string;
  /** Highlight color (CSS color string) @default 'hsl(25, 90%, 80%)' */
  highlightColor?: string;
  /** Direction of the highlight animation @default "ltr" */
  direction?: HighlightDirection;
} & React.HTMLAttributes<HTMLElement>;

export type TextHighlighterRef = {
  /** Trigger the highlight animation */
  animate: (direction?: HighlightDirection) => void;
  /** Reset the highlight animation */
  reset: () => void;
};

export const TextHighlighter = forwardRef<
  TextHighlighterRef,
  TextHighlighterProps
>(
  (
    {
      children,
      as = "span",
      triggerType = "inView",
      transition = { type: "spring", duration: 1, delay: 0, bounce: 0 },
      useInViewOptions = { once: true, amount: 0.1 },
      className,
      highlightColor = "hsl(25, 90%, 80%)",
      direction = "ltr",
      ...props
    },
    ref
  ) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentDirection, setCurrentDirection] =
      useState<HighlightDirection>(direction);

    // Keep the active direction in sync with the prop.
    useEffect(() => {
      setCurrentDirection(direction);
    }, [direction]);

    // Called unconditionally to respect the rules of hooks; only used when
    // triggerType is "inView".
    const isInView = useInView(componentRef, useInViewOptions);

    useImperativeHandle(ref, () => ({
      animate: (animationDirection?: HighlightDirection) => {
        if (animationDirection) {
          setCurrentDirection(animationDirection);
        }
        setIsAnimating(true);
      },
      reset: () => setIsAnimating(false),
    }));

    const shouldAnimate =
      triggerType === "hover"
        ? isHovered
        : triggerType === "inView"
        ? isInView
        : triggerType === "ref"
        ? isAnimating
        : triggerType === "auto"
        ? true
        : false;

    const ElementTag = as || "span";

    const getBackgroundSize = (animated: boolean) => {
      switch (currentDirection) {
        case "ltr":
        case "rtl":
          return animated ? "100% 100%" : "0% 100%";
        case "ttb":
        case "btt":
          return animated ? "100% 100%" : "100% 0%";
        default:
          return animated ? "100% 100%" : "0% 100%";
      }
    };

    const getBackgroundPosition = () => {
      switch (currentDirection) {
        case "ltr":
          return "0% 0%";
        case "rtl":
          return "100% 0%";
        case "ttb":
          return "0% 0%";
        case "btt":
          return "0% 100%";
        default:
          return "0% 0%";
      }
    };

    const animatedSize = useMemo(
      () => getBackgroundSize(shouldAnimate),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [shouldAnimate, currentDirection]
    );
    const initialSize = useMemo(
      () => getBackgroundSize(false),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [currentDirection]
    );
    const backgroundPosition = useMemo(
      () => getBackgroundPosition(),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [currentDirection]
    );

    const highlightStyle = {
      backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: backgroundPosition,
      backgroundSize: animatedSize,
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone",
      padding: "0.05em 0.2em",
      borderRadius: "0.25em",
    } as React.CSSProperties;

    return (
      <ElementTag
        ref={componentRef}
        onMouseEnter={() => triggerType === "hover" && setIsHovered(true)}
        onMouseLeave={() => triggerType === "hover" && setIsHovered(false)}
        {...props}
      >
        <motion.span
          className={`inline ${className ?? ""}`}
          style={highlightStyle}
          animate={{ backgroundSize: animatedSize }}
          initial={{ backgroundSize: initialSize }}
          transition={transition}
        >
          {children}
        </motion.span>
      </ElementTag>
    );
  }
);

TextHighlighter.displayName = "TextHighlighter";

export default TextHighlighter;
