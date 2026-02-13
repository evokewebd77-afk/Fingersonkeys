import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, Globe, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const stats = [
    {
        icon: Users,
        value: 1000,
        suffix: '+',
        label: 'Happy Students',
        color: 'from-pink-500 to-purple-500',
    },
    {
        icon: GraduationCap,
        value: 50,
        suffix: '+',
        label: 'Expert Teachers',
        color: 'from-purple-500 to-indigo-500',
    },
    {
        icon: Globe,
        value: 25,
        suffix: '+',
        label: 'Countries Reached',
        color: 'from-indigo-500 to-pink-500',
    },
    {
        icon: TrendingUp,
        value: 98,
        suffix: '%',
        label: 'Success Rate',
        color: 'from-pink-500 to-rose-500',
    },
];

const Counter = ({ value, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span className="text-5xl md:text-6xl font-black">
            {count}{suffix}
        </span>
    );
};

const StatsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-zinc-950/50">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />

            {/* Decorative Circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
                        Our <span className="text-pink-500">Impact</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Transforming lives through music education worldwide
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="relative group"
                        >
                            <div className="relative p-8 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon size={32} className="text-white" />
                                </div>

                                {/* Counter */}
                                <div className={`text-transparent bg-clip-text bg-gradient-to-br ${stat.color} text-center`}>
                                    <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                                </div>

                                {/* Label */}
                                <p className="text-zinc-400 text-center mt-4 font-semibold">
                                    {stat.label}
                                </p>

                                {/* Bottom Glow */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
