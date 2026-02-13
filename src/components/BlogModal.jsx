import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, Clock } from 'lucide-react';

const BlogModal = ({ blog, isOpen, onClose }) => {
    if (!blog) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-4xl max-h-full bg-zinc-950 border border-zinc-800 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-3xl flex flex-col"
                    >
                        {/* Header Image */}
                        <div className="relative h-64 md:h-96 w-full flex-shrink-0">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 text-white transition-colors bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 z-50"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide">
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-500 text-xs font-bold uppercase tracking-widest border border-pink-500/20">
                                    {blog.category}
                                </span>
                                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                    <Calendar size={16} />
                                    <span>{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                    <Clock size={16} />
                                    <span>5 min read</span>
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                                {blog.title}
                            </h2>

                            <div className="prose prose-invert max-w-none">
                                {blog.fullContent.map((paragraph, idx) => (
                                    <p key={idx} className="text-zinc-400 text-lg leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default BlogModal;
