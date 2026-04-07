import { useEffect, useRef } from "react";
import type { CubicCoefficients } from "../utils/types";

export default function CubicGraph({ a, b, c, d }: CubicCoefficients) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) 
      return;

    const ctx = canvas.getContext("2d");
    if (!ctx) 
      return;

    const minX = -10, maxX = 10;
    const minY = -10, maxY = 10;

    const scaleX = canvas.width / (maxX - minX);
    const scaleY = canvas.height / (maxY - minY);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // axes
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // graph
    ctx.beginPath();
    let first = true;

    for (let i = 0; i < canvas.width; i++) {
      const x = minX + i / scaleX;
      const y = a * x ** 3 + b * x ** 2 + c * x + d;
      const canvasY = canvas.height / 2 - y * scaleY;

      if (first) {
        ctx.moveTo(i, canvasY);
        first = false;
      } else {
        ctx.lineTo(i, canvasY);
      }
    }

    ctx.stroke();
  }, [a, b, c, d]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="border rounded-lg"
    />
  );
}