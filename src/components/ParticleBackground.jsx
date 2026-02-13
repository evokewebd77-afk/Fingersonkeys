import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -20;
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 0.5 + 0.2;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? 'rgba(236, 72, 153,' : 'rgba(168, 85, 247,';
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                if (this.y > canvas.height) {
                    this.reset();
                }

                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
            }

            draw() {
                ctx.fillStyle = this.color + this.opacity + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
};

export default ParticleBackground;
