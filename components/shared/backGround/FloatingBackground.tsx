"use client";

import { useEffect, useRef } from "react";

interface Shape {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    angle: number;
    rotationSpeed: number;
    type: "circle" | "square" | "triangle";
    opacity: number;
}

export default function FloatingBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let shapes: Shape[] = [];

        // Track and scale canvas coordinates to handle window adjustments
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initShapes();
        };

        // Initialize shapes with randomized vectors
        const initShapes = () => {
            shapes = [];
            const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 60000));
            const types: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];

            for (let i = 0; i < count; i++) {
                shapes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 30 + 15, // Dimensions between 15px and 45px
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    angle: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.01,
                    type: types[Math.floor(Math.random() * types.length)],
                    opacity: Math.random() * 0.04 + 0.06,
                });
            }
        };

        // Render Frame Execution Loop
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Fetch dynamic current border text color to blend with theme preferences
            const isDark = document.documentElement.classList.contains("dark");
            const strokeColor = isDark ? "255, 255, 255" : "0, 0, 0";

            shapes.forEach((shape) => {
                // Update spatial position coordinates
                shape.x += shape.speedX;
                shape.y += shape.speedY;
                shape.angle += shape.rotationSpeed;

                // Screen boundary collision handler: wraps around opposite edges seamlessly
                if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
                if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
                if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
                if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

                // Render Graphic Shapes context parameters
                ctx.save();
                ctx.translate(shape.x, shape.y);
                ctx.rotate(shape.angle);
                ctx.strokeStyle = `rgba(${strokeColor}, ${shape.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();

                if (shape.type === "circle") {
                    ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                } else if (shape.type === "square") {
                    ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                } else if (shape.type === "triangle") {
                    ctx.moveTo(0, -shape.size / 2);
                    ctx.lineTo(shape.size / 2, shape.size / 2);
                    ctx.lineTo(-shape.size / 2, shape.size / 2);
                    ctx.closePath();
                }

                ctx.stroke();
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none w-screen h-screen block bg-transparent"
        />
    );
}
