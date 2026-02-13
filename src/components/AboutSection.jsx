import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Home, Clock, Star, Users, Award } from 'lucide-react';

const benefits = [
    {
        icon: Star,
        text: 'Learn with expert teachers, wherever you\'re located',
    },
    {
        icon: Home,
        text: 'Have lessons from the comfort of home',
    },
    {
        icon: Clock,
        text: 'Save time travelling to and from your lesson',
    },
    {
        icon: CheckCircle2,
        text: 'And still enjoy the benefits of lessons with a real teacher',
    }
];

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="about" className="py-24 px-4 relative z-10 bg-zinc-900/50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter  font-[var(--font-brand)] tracking-tighter italic">
                            About <span className="text-pink-500 pr-2">Fingers on Keys</span>
                        </h2>
                        <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                            <p>
                                Fingers on Keys is a platform focused on <span className="text-pink-400 font-semibold underline underline-offset-4 decoration-pink-500/30">live 1-on-1 online piano lessons</span> with professional instructors catering to children and adults.
                            </p>
                            <p>
                                We provide an interactive online piano learning platform with feedback and tutorials for all levels. Our mission is to prepare students for internationally recognised exams while fostering a lifelong love for music.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold animate-pulse-slow"
                                >
                                    Gurgaon (Offline) - Coming Soon!
                                </motion.div>
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    Age Groups & Expert Lessons
                                </h3>
                                <p className="text-zinc-400">
                                    We welcome students of all ages. However, to build a strong musical foundation, the <span className="text-pink-400 font-bold">minimum starting age is 6 years</span>.
                                </p>
                            </div>

                            {/* Mini Stats */}
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                <motion.div
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(236, 72, 153, 0.5)' }}
                                    className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all"
                                >
                                    <Users className="text-pink-500 mb-2" size={24} />
                                    <div className="text-2xl font-black text-white">1000+</div>
                                    <div className="text-sm text-zinc-400">Students</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                                    className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all"
                                >
                                    <Award className="text-purple-500 mb-2" size={24} />
                                    <div className="text-2xl font-black text-white">50+</div>
                                    <div className="text-sm text-zinc-400">Teachers</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            style={{ y }}
                            className="relative rounded-[3rem] overflow-hidden border border-pink-500/20 shadow-2xl group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop"
                                alt="Professional Piano Learning"
                                className="w-full h-[600px] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                        </motion.div>

                        {/* Floating Cards over image */}
                        <div className="absolute -bottom-10 -left-10 right-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.slice(0, 2).map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-4 group hover:border-pink-500/50 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                        <benefit.icon size={24} />
                                    </div>
                                    <p className="text-sm font-bold text-zinc-100">{benefit.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
