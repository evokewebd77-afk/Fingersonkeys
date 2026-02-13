import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';
import EbookModal from './EbookModal';

import performanceImg from '../assets/gallery/performance.png';
import graduationImg from '../assets/gallery/graduation.png';
import studioPianoImg from '../assets/gallery/studio_piano.png';

const ebooks = [
    {
        title: 'Piano Mastery: The Technical Guide',
        author: 'Sarah Jenkins',
        price: 'Free with Trial',
        image: performanceImg,
        color: 'from-pink-900/50',
        description: 'A comprehensive deep-dive into advanced piano techniques, finger independence, and expressive performance. Perfect for intermediate to advanced players looking to refine their sound.',
        features: [
            'Advanced Hanon & Czerny exercises',
            'Sustaining pedal mastery',
            'Dynamic control & Articulation',
            'Sight-reading acceleration tips'
        ]
    },
    {
        title: 'Harmonic Frontiers: Modern Jazz',
        author: 'Mike Ross',
        price: '$14.99',
        image: studioPianoImg,
        color: 'from-purple-900/50',
        description: 'Explore the world of jazz theory, from complex chord substitutions to innovative scales. This ebook breaks down the barriers of traditional harmony.',
        features: [
            'Modal improvisation techniques',
            'Re-harmonizing popular themes',
            'The Circle of Fifths unlocked',
            'Rhythmic displacement patterns'
        ]
    },
    {
        title: "The Composer's Handbook",
        author: 'Alex V.',
        price: '$19.99',
        image: graduationImg,
        color: 'from-indigo-900/50',
        description: 'Learn the secrets of orchestration and arrangement. Whether you compose for solo piano or full orchestra, this guide covers the essentials of modern composition.',
        features: [
            'Motific development secrets',
            'Orchestrational textures',
            'Melodic counterpoint rules',
            'Professional notation standards'
        ]
    }
];

const EbooksSection = () => {
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <section id="ebooks" className="py-24 px-4 relative z-10 bg-zinc-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
                        Professional <span className="text-pink-500">E-Books</span>
                    </h2>
                    <div className="w-16 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        In-depth guides to master your craft, available for instant digital download.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ebooks.map((book, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedBook(book)}
                            className="bg-zinc-800/10 backdrop-blur-sm border border-zinc-700/30 rounded-[2.5rem] p-6 group hover:border-pink-500/40 transition-all hover:bg-zinc-800/30 cursor-pointer shadow-xl"
                        >
                            {/* Modern Book Cover */}
                            <div className="w-full aspect-[3/4] rounded-2xl mb-8 shadow-2xl flex flex-col justify-between transform group-hover:rotate-y-6 transition-all duration-700 relative overflow-hidden group-hover:scale-[1.02]">
                                <img
                                    src={book.image}
                                    className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    alt={book.title}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${book.color} to-zinc-950/95 mix-blend-multiply`}></div>

                                <div className="absolute inset-4 border border-white/5 rounded-xl pointer-events-none group-hover:border-pink-500/20 transition-colors"></div>

                                <div className="relative z-10 p-8 pt-10">
                                    <div className="mb-4 inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-[8px] font-black text-pink-400 uppercase tracking-widest leading-none">Best Seller</div>
                                    <h3 className="text-2xl font-black text-white leading-[1.1] drop-shadow-2xl uppercase tracking-tighter font-[var(--font-brand)] italic">
                                        {book.title.split(':').map((part, i) => (
                                            <span key={i} className={i === 1 ? 'block text-pink-500 text-lg mt-1' : ''}>{part}</span>
                                        ))}
                                    </h3>
                                </div>
                                <div className="relative z-10 p-8 pb-10 text-center">
                                    <BookOpen className="text-pink-500/40 mx-auto mb-4 group-hover:text-pink-500 transition-colors" size={24} />
                                    <p className="text-zinc-400 font-black tracking-[0.2em] text-[10px] uppercase">{book.author}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-2 pb-2">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Price</span>
                                    <span className="text-2xl font-black text-white group-hover:text-pink-400 transition-colors tracking-tighter">{book.price}</span>
                                </div>
                                <button className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-pink-500 transition-all transform active:scale-95 shadow-lg shadow-pink-500/20">
                                    <Download size={16} /> Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <EbookModal
                book={selectedBook}
                isOpen={!!selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </section>
    );
};

export default EbooksSection;
