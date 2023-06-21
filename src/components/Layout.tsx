import { useEffect } from "react";
import { Gradient } from "../utils/gradient/gradient";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
      <main className="flex max-h-screen min-h-screen flex-col text-white">
        <canvas
          id="gradient-canvas"
          className="fixed inset-0"
          data-transition-in
        />
        {children}
      </main>
  );
};

export default Layout;
