import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Zap } from 'lucide-react';

const lessons = [
    {
        title: 'Piano Mastery',
        description: 'From beginner chords to advanced jazz improvisation. Master the keys with our comprehensive curriculum.',
        icon: Music,
        level: 'All Levels',
        color: 'bg-pink-500/10',
        iconColor: 'text-pink-500'
    },
    {
        title: 'Music Production',
        description: 'Learn to produce professional tracks. Mixing, mastering, and sound design fundamentals.',
        icon: Zap,
        level: 'Intermediate',
        color: 'bg-purple-500/10',
        iconColor: 'text-purple-500' // Slight variation for depth
    },
    {
        title: 'Vocal Training',
        description: 'Find your voice with expert coaching. Pitch, breath control, and performance techniques.',
        icon: Mic,
        level: 'Beginner',
        color: 'bg-pink-500/10',
        iconColor: 'text-pink-400'
    }
];

const Lessons = () => {
    return (
        <section id="lessons" className="py-24 px-4 relative z-10 bg-zinc-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Music Lessons</span>
                    </h2>
                    <div className="w-24 h-1 bg-zinc-800 mx-auto mb-6 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-pink-500"></div>
                    </div>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Expert-led courses designed to take your musical skills to the next dimension.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {lessons.map((lesson, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 rounded-2xl hover:border-pink-500/50 hover:bg-zinc-800 transition-all group shadow-xl hover:shadow-pink-900/10"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${lesson.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <lesson.icon className={`${lesson.iconColor}`} size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">{lesson.title}</h3>
                            <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                                {lesson.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-700/50">
                                <span className="text-xs font-semibold px-3 py-1 bg-zinc-700/50 rounded-full text-zinc-300">
                                    {lesson.level}
                                </span>
                                <button className="text-pink-400 text-sm font-semibold hover:text-pink-300 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                                    Learn more &rarr;
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Lessons;
