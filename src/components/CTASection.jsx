import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const CTASection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-32 px-4 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-950/40 via-zinc-950 to-purple-950/40" />

                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />

                {/* Floating Stars */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * 400,
                                scale: 0,
                            }}
                            animate={{
                                y: [null, -100],
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeOut"
                            }}
                            className="absolute"
                        >
                            <Star className="text-pink-400" size={16} fill="currentColor" />
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 backdrop-blur-xl"
                        >
                            <Sparkles size={20} />
                            <span className="font-bold tracking-wider uppercase text-sm">Limited Time Offer</span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Ready to Start Your
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                                Musical Journey?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of students worldwide and unlock your musical potential with personalized lessons from expert instructors.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold text-white text-lg shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] transition-all border border-white/20 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Get Started Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Shine Effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white/5 border border-white/20 rounded-full font-bold text-white text-lg hover:bg-white/10 hover:border-pink-500/50 transition-all backdrop-blur-md"
                            >
                                View Pricing
                            </motion.button>
                        </div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center gap-8 pt-12 text-zinc-400"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-2 border-zinc-950" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold">1000+ Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold">4.9/5 Rating</span>
                            </div>
                            <div className="text-sm font-semibold">
                                ✓ Free Trial Lesson
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                type="student"
            />
        </>
    );
};

export default CTASection;
