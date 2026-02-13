import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import GalleryModal from './GalleryModal';

import performanceImg from '../assets/gallery/performance.png';
import studentMasteryImg from '../assets/gallery/student_mastery.png';
import onlineSessionImg from '../assets/gallery/online_session.png';
import graduationImg from '../assets/gallery/graduation.png';
import classInteractionImg from '../assets/gallery/class_interaction.png';
import studioPianoImg from '../assets/gallery/studio_piano.png';

const galleryItems = [
    {
        type: 'image',
        title: 'Performance at Annual Concert',
        image: performanceImg,
        description: 'Our students showcase their hard work and talent at our annual prestigious concert. This image captures the intensity and focus of a solo performance on our premium grand piano.'
    },
    {
        type: 'video',
        title: 'Student Mastery Showcase',
        image: studentMasteryImg,
        description: 'Watch our advanced students learn from world-renowned pianists. This masterclass focused on technical precision and emotional expression in Romantic era compositions.'
    },
    {
        type: 'image',
        title: 'Online Session Highlights',
        image: onlineSessionImg,
        description: 'Our digital classroom in action. We use high-definition multi-camera setups to ensure our online students get the best possible perspective on technique and fingering.'
    },
    {
        type: 'image',
        title: 'Graduation Ceremony 2024',
        image: graduationImg,
        description: 'A proud moment for our students and teachers alike. This celebration marks the completion of our primary curriculum and the beginning of a lifelong musical journey.'
    },
    {
        type: 'video',
        title: 'Class Interaction',
        image: classInteractionImg,
        description: 'A compilation of monthly progress highlights from our youngest prodigies. Witness the rapid growth and joy of learning at FingersOnTheKeys.'
    },
    {
        type: 'image',
        title: 'Studio Piano Session',
        image: studioPianoImg,
        description: 'Take a look at the heart of our academy. Our meticulously maintained grand piano provides the perfect touch and tone for every student who steps into our studio.'
    },
];

const GallerySection = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="gallery" className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pink-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-[var(--font-brand)] tracking-tighter italic">
                            The <span className="text-pink-500">Gallery</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-pink-600 mt-4 rounded-full"></div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 text-sm md:text-base max-w-sm text-right mt-6 md:mt-0 font-medium uppercase tracking-widest leading-loose"
                    >
                        Visual highlights from our world-class music community
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedItem(item)}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 group-hover:border-pink-500/30 transition-all duration-500 shadow-2xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="w-16 h-16 rounded-3xl bg-pink-500/80 backdrop-blur-sm flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:bg-pink-500 transition-all duration-500">
                                            <Play size={24} fill="currentColor" className="ml-1" />
                                        </div>
                                    </div>
                                )}

                                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-pink-600 text-white p-2 rounded-xl shadow-lg shadow-pink-600/20">
                                            {item.type === 'video' ? <Play size={14} fill="currentColor" /> : <ImageIcon size={14} />}
                                        </span>
                                        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">{item.type}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2 leading-none uppercase tracking-tighter font-[var(--font-brand)] italic group-hover:text-pink-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="h-6 md:h-0 md:group-hover:h-6 overflow-hidden transition-all duration-500 flex items-center gap-2 text-pink-500 font-black text-[10px] uppercase tracking-widest">
                                        Click to view details <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <GalleryModal
                item={selectedItem}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </section>
    );
};

export default GallerySection;
