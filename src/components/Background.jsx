import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };
        window.addEventListener('resize', resizeCanvas);

        // --- Configuration ---
        const stringCount = 40;
        const tension = 0.05;
        const dampening = 0.95;

        // --- String Class ---
        class GuitarString {
            constructor(x) {
                this.x = x;
                this.points = [];
                // Create control points along the string for flexibility
                const pointsCount = 20;
                const spacing = canvas.height / pointsCount;
                for (let i = 0; i <= pointsCount; i++) {
                    this.points.push({
                        x: x,
                        y: i * spacing,
                        vx: 0,
                        targetX: x
                    });
                }
                this.vibrating = false;
                this.color = '#52525b'; // Zinc-600 base
            }

            update(mouse) {
                let maxVelocity = 0;

                for (let i = 1; i < this.points.length - 1; i++) {
                    const mk = this.points[i];

                    // 1. Mouse Interaction (Pluck)
                    if (mouse.x !== undefined && mouse.y !== undefined) {
                        const dx = mouse.x - mk.x;
                        const dy = mouse.y - mk.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 50 && Math.abs(mouse.dx) > 2) {
                            // "Pluck" force based on mouse horizontal speed
                            mk.vx -= mouse.dx * 0.2;
                            this.vibrating = true;
                            this.color = '#ec4899'; // Hot pink when touched
                        }
                    }

                    // 2. Physics (Spring mechanism)
                    const force = (mk.targetX - mk.x) * tension;
                    mk.vx += force;
                    mk.vx *= dampening;
                    mk.x += mk.vx;

                    maxVelocity = Math.max(maxVelocity, Math.abs(mk.vx));
                }

                // Color decay
                if (maxVelocity < 0.1) {
                    this.vibrating = false;
                    this.color = '#52525b';
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.points[0].x, this.points[0].y);

                // Smooth curve through points
                for (let i = 1; i < this.points.length - 2; i++) {
                    const xc = (this.points[i].x + this.points[i + 1].x) / 2;
                    const yc = (this.points[i].y + this.points[i + 1].y) / 2;
                    ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
                }

                ctx.quadraticCurveTo(
                    this.points[this.points.length - 2].x,
                    this.points[this.points.length - 2].y,
                    this.points[this.points.length - 1].x,
                    this.points[this.points.length - 1].y
                );

                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.vibrating ? 2 : 1;
                ctx.shadowColor = '#ec4899';
                ctx.shadowBlur = this.vibrating ? 15 : 0;
                ctx.stroke();
            }
        }

        let strings = [];
        const init = () => {
            strings = [];
            const spacing = canvas.width / stringCount;
            for (let i = 0; i <= stringCount; i++) {
                strings.push(new GuitarString(i * spacing));
            }
        };

        // Initial setup
        resizeCanvas();

        let mouse = { x: undefined, y: undefined, dx: 0 };
        const handleMouseMove = e => {
            mouse.dx = e.clientX - (mouse.x || e.clientX); // Track horizontal velocity
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        const animate = () => {
            // Fancy trail effect
            ctx.fillStyle = 'rgba(24, 24, 27, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            strings.forEach(s => {
                s.update(mouse);
                s.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden">
            {/* Pink/Purple Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/10 to-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#18181b_100%)] opacity-70 pointer-events-none"></div>
        </div>
    );
};

export default Background;
