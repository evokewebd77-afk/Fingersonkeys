import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Download, CheckCircle2, Star } from 'lucide-react';

const EbookModal = ({ book, isOpen, onClose }) => {
    if (!book) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:py-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        className="relative w-full max-w-5xl max-h-full bg-zinc-950 border border-zinc-800 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-3xl flex flex-col md:flex-row"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 text-white transition-colors bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 z-50 md:hidden shaodw-xl"
                        >
                            <X size={22} />
                        </button>

                        {/* Left: Enhanced Book Cover Preview */}
                        <div className="w-full md:w-2/5 relative h-72 md:h-auto flex-shrink-0 group overflow-hidden bg-zinc-900">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-zinc-950/20 to-zinc-950`}></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-[2px]">
                                <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/30">
                                    <BookOpen className="text-pink-500" size={40} />
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight font-[var(--font-brand)] mb-2">
                                    {book.title}
                                </h3>
                                <p className="text-pink-300 font-bold tracking-widest text-[10px] uppercase">{book.author}</p>
                            </div>
                        </div>

                        {/* Right: Content & Detailed Info */}
                        <div className="flex-1 overflow-y-auto p-8 md:p-14 scrollbar-hide relative">
                            <button
                                onClick={onClose}
                                className="hidden md:flex absolute top-10 right-10 text-zinc-400 hover:text-white transition-colors bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-2 text-pink-500 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                <span className="text-xs font-bold text-zinc-400 ml-2">4.9 / 5.0 (2.4k Reviews)</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase font-[var(--font-brand)] leading-none">
                                Inside the <span className="text-pink-500">Guide</span>
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">Core Focus</h4>
                                    <p className="text-zinc-400 text-lg leading-relaxed">
                                        {book.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">What you'll learn</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {book.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-zinc-300">
                                                <CheckCircle2 size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Instant Digital Download</p>
                                    <p className="text-3xl font-black text-white">{book.price}</p>
                                </div>
                                <button className="w-full sm:w-auto px-10 py-5 bg-pink-600 hover:bg-pink-500 text-white font-black uppercase tracking-widest text-[14px] rounded-2xl shadow-2xl shadow-pink-500/20 transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group font-[var(--font-brand)]">
                                    <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                                    Get Your Copy
                                </button>
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default EbookModal;
