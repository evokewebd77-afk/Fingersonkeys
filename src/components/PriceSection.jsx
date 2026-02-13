import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Target, Rocket, Star, ChevronRight, Music, Award, Heart } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

const learningPaths = [
    {
        title: 'Young Maestro',
        subtitle: 'Ages 6-12',
        icon: Music,
        gradient: 'from-pink-500 to-rose-500',
        description: 'Start your musical adventure with fun, engaging lessons designed for young learners',
        highlights: [
            'Learn through games & stories',
            'Build strong foundations',
            'Boost creativity & confidence',
            'Prepare for Grade 1-3 exams'
        ],
        duration: '6-12 months to Grade 1',
        image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800&q=80',
    },
    {
        title: 'Rising Star',
        subtitle: 'Teens & Adults (Beginner)',
        icon: Star,
        gradient: 'from-purple-500 to-indigo-500',
        description: 'Perfect for beginners of any age ready to unlock their musical potential',
        highlights: [
            'Flexible learning pace',
            'Popular songs & classics',
            'Music theory made easy',
            'Prepare for Grade 3-5 exams'
        ],
        duration: '12-18 months to Grade 3',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        popular: true
    },
    {
        title: 'Performance Pro',
        subtitle: 'Advanced Students',
        icon: Trophy,
        gradient: 'from-indigo-500 to-pink-500',
        description: 'Achieve excellence with advanced techniques and professional performance skills',
        highlights: [
            'Master complex repertoire',
            'Stage performance training',
            'Composition & improvisation',
            'Prepare for Grade 6-8 & Diplomas'
        ],
        duration: '18-24 months to Grade 8',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
    }
];

const benefits = [
    { icon: Heart, text: 'Personalized 1-on-1 Attention' },
    { icon: Rocket, text: 'Learn at Your Own Pace' },
    { icon: Award, text: 'International Certification' },
    { icon: Target, text: 'Track Your Progress' }
];

const PriceSection = () => {
    const [selectedPath, setSelectedPath] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="pricing" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 backdrop-blur-xl mb-6"
                        >
                            <Sparkles size={20} className="animate-pulse" />
                            <span className="font-bold tracking-wider uppercase text-sm">Choose Your Path</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
                            Your Musical
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                                Journey Starts Here
                            </span>
                        </h2>
                        <p className="text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
                            Select the perfect learning path tailored to your age, goals, and aspirations.
                            Every journey includes personalized lessons, expert guidance, and certification prep.
                        </p>
                    </motion.div>

                    {/* Learning Paths Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {learningPaths.map((path, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedPath(path)}
                            >
                                {path.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg z-10">
                                        <Sparkles size={12} className="inline mr-1" />
                                        Most Popular
                                    </div>
                                )}

                                <div className={`relative h-full rounded-[2rem] overflow-hidden ${path.popular ? 'border-2 border-pink-500/50' : 'border border-zinc-800'} bg-zinc-900/40 backdrop-blur-xl shadow-2xl group-hover:shadow-pink-500/20 transition-all duration-500`}>
                                    {/* Image Header */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={path.image}
                                            alt={path.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${path.gradient} opacity-60`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>

                                        {/* Icon */}
                                        <div className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20`}>
                                            <path.icon size={28} className="text-white" />
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-black text-white mb-2">
                                            {path.title}
                                        </h3>
                                        <p className={`text-sm font-bold mb-4 bg-gradient-to-r ${path.gradient} bg-clip-text text-transparent`}>
                                            {path.subtitle}
                                        </p>
                                        <p className="text-zinc-400 mb-6 leading-relaxed">
                                            {path.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-3 mb-6">
                                            {path.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                                    <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${path.gradient} flex items-center justify-center shrink-0`}>
                                                        <ChevronRight size={12} className="text-white" />
                                                    </div>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Duration Badge */}
                                        <div className="mb-6 px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700 text-center">
                                            <p className="text-xs text-zinc-500 mb-1">Typical Timeline</p>
                                            <p className="text-sm font-bold text-white">{path.duration}</p>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsModalOpen(true);
                                            }}
                                            className={`w-full py-4 rounded-2xl font-bold transition-all ${path.popular
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-500/50'
                                                : 'bg-zinc-800 text-white hover:bg-zinc-700'
                                                } group-hover:scale-105 transition-transform`}
                                        >
                                            Start Your Journey
                                            <ChevronRight size={18} className="inline ml-2" />
                                        </button>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${path.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-pink-500/50 transition-all backdrop-blur-xl text-center group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 mx-auto mb-3 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                    <benefit.icon size={24} />
                                </div>
                                <p className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                                    {benefit.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center text-zinc-500 text-sm"
                    >
                        ✨ All paths include: 45-min sessions • Minimum 4 classes/month • Free trial lesson
                        <br />
                        <span className="text-pink-400">Contact us for detailed pricing based on your goals</span>
                    </motion.p>
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

export default PriceSection;