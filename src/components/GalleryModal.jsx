import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon, Music2, Share2, ZoomIn } from 'lucide-react';

const GalleryModal = ({ item, isOpen, onClose }) => {
    if (!item) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:py-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        className="relative w-full max-w-6xl max-h-full bg-zinc-950 border border-white/5 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-3xl flex flex-col md:flex-row"
                    >
                        {/* Close Button - Global Position */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 z-50 shadow-xl"
                        >
                            <X size={22} />
                        </button>

                        {/* Media Section */}
                        <div className="w-full md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
                            {item.type === 'video' ? (
                                <div className="relative w-full h-full aspect-video flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
                                        alt=""
                                    />
                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12 text-center">
                                        <div className="w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-2xl shadow-pink-500/40 mb-6 group cursor-pointer hover:scale-110 transition-transform">
                                            <Play size={40} fill="currentColor" className="ml-2" />
                                        </div>
                                        <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tighter">Preview Video</h4>
                                        <p className="text-zinc-500 text-sm max-w-xs">Full high-definition student performance showcase from our 2024 annual concert.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-full relative group">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain md:object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/20 to-transparent md:hidden"></div>
                                </div>
                            )}

                            {/* Floating Action Bar (Desktop only) */}
                            <div className="absolute top-6 left-6 hidden md:flex items-center gap-3">
                                <span className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                                    {item.type === 'video' ? <Play size={12} fill="currentColor" /> : <ImageIcon size={12} />}
                                    {item.type}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-8 md:p-14 overflow-y-auto scrollbar-hide relative bg-zinc-950 flex flex-col justify-center">


                            <div className="mb-10">
                                <div className="flex items-center gap-3 text-pink-500 mb-6 md:mb-8 font-black uppercase text-[10px] tracking-[0.3em]">
                                    <Music2 size={16} />
                                    <span>Experience</span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-[var(--font-brand)] leading-[0.9] italic">
                                    {item.title}
                                </h2>

                                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                                    {item.description || "Glimpses of our vibrant musical community and student achievements at FingersOnTheKeys. Every performance is a testament to dedication and passion."}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-auto">
                                <button className="flex-1 sm:flex-none px-8 py-5 bg-pink-600 hover:bg-pink-500 text-white font-black uppercase tracking-widest text-[12px] rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 font-[var(--font-brand)]">
                                    {item.type === 'video' ? 'Play Full Video' : 'View Original'}
                                    <ZoomIn size={18} />
                                </button>
                                <button className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Decorative Edge */}
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(236,72,153,0.3)]"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default GalleryModal;
