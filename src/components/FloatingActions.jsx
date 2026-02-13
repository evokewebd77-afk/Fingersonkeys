import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={scrollToTop}
                        className="w-14 h-14 bg-zinc-900 border border-zinc-800 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-zinc-800 transition-all group"
                        title="Back to Top"
                    >
                        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* WhatsApp Floating Icon */}
            <motion.a
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                href="https://wa.me/919555827199"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all group relative border-2 border-white/20"
                title="Chat on WhatsApp"
            >
                <div className="absolute inset-0 bg-[#25D366] rounded-2xl animate-ping opacity-20 group-hover:hidden"></div>
                <Phone size={28} fill="currentColor" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800 pointer-events-none">
                    Chat with us
                </div>
            </motion.a>
        </div>
    );
};

export default FloatingActions;
