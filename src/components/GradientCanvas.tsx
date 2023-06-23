import { useEffect } from "react";
import { Gradient } from "../utils/gradient/gradient";

const GradientCanvas = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas id="gradient-canvas" className="fixed inset-0" data-transition-in />
  );
};

export default GradientCanvas;
