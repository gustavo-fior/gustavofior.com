import { useEffect } from "react";
import { Gradient } from "../utils/gradient/gradient";

const GradientCanvas = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative">
      <canvas
        id="gradient-canvas"
        className="fixed inset-0 h-full w-full"
        data-transition-in
      />
    </div>
  );
};

export default GradientCanvas;
