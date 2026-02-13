import React, { useState, useEffect } from 'react';
import { Menu, X, Music, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationModal from './RegistrationModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    // Modal State
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    const [regType, setRegType] = useState('student');

    const openModal = (type) => {
        setRegType(type);
        setIsRegModalOpen(true);
        setIsOpen(false);
    };



    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Gallery', href: '#gallery' },
        {
            title: 'Services',
            href: '#services',
            dropdown: [
                { title: 'Our Programs', href: '#services' },
                { title: 'Professional Ebooks', href: '#ebooks' },
                { title: 'Plans & Pricing', href: '#pricing' },
                { title: 'Student Reviews', href: '#reviews' },
                { title: 'Latest Blogs', href: '#blogs' },
            ]
        },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/90 backdrop-blur-md border-b border-pink-500/20 shadow-lg shadow-pink-500/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Enhanced with icon, gradient, and motion */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="bg-pink-500/10 p-2 rounded-xl group-hover:bg-pink-500/20 transition-all duration-300 ring-1 ring-pink-500/20 group-hover:ring-pink-500/40">
                            <Music className="text-pink-500 w-6 h-6 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                        </div>
                        <span className="text-sm md:text-xl font-bold tracking-[0.1em] md:tracking-[0.2em] flex items-center font-[var(--font-brand)] uppercase">
                            <span className="text-white drop-shadow-sm">Fingers</span>
                            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent px-1 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                                OnThe
                            </span>
                            <span className="text-white drop-shadow-sm">Keys</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-12 flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <div
                                    key={link.title}
                                    className="relative group"
                                    onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
                                    onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
                                >
                                    <a
                                        href={link.href}
                                        className="text-zinc-300 hover:text-pink-400 hover:-translate-y-0.5 transition-all duration-200 px-2 py-2 rounded-md text-[14px] font-black uppercase tracking-[0.2em] font-[var(--font-brand)] flex items-center gap-1"
                                    >
                                        {link.title}
                                        {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {link.dropdown && (
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-3 backdrop-blur-xl"
                                                >
                                                    <div className="space-y-1">
                                                        {link.dropdown.map((subItem) => (
                                                            <a
                                                                key={subItem.title}
                                                                href={subItem.href}
                                                                className="block px-4 py-3 rounded-xl text-[11px] font-bold text-zinc-400 hover:text-white hover:bg-pink-500/10 transition-all font-[var(--font-brand)] uppercase tracking-wider"
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={() => openModal('student')}
                                className="bg-zinc-800/50 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all border border-zinc-700 font-[var(--font-brand)] hover:scale-105 active:scale-95"
                            >
                                Student Login
                            </button>
                            <button
                                onClick={() => openModal('teacher')}
                                className="inline-flex items-center justify-center min-w-[190px] bg-pink-600 hover:bg-pink-500 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.1em] transition-all transform hover:scale-105 shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] border border-pink-500/20 font-[var(--font-brand)]"
                            >
                                Join as Piano Faculty
                            </button>


                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-300 hover:text-pink-400 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-b border-pink-500/20 overflow-hidden max-h-[85vh] overflow-y-auto"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.title}>
                                    {link.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                                className="w-full flex items-center justify-between text-zinc-300 hover:text-pink-400 px-4 py-4 rounded-xl text-[14px] font-black uppercase tracking-[0.2em] font-[var(--font-brand)] transition-all"
                                            >
                                                <span>{link.title}</span>
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isMobileDropdownOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-zinc-900/50 rounded-2xl mt-1 mx-2"
                                                    >
                                                        {link.dropdown.map((subItem) => (
                                                            <a
                                                                key={subItem.title}
                                                                href={subItem.href}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    const targetId = subItem.href.replace('#', '');
                                                                    const element = document.getElementById(targetId);
                                                                    if (element) {
                                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                                        setIsOpen(false);
                                                                    } else {
                                                                        window.location.href = subItem.href;
                                                                        setIsOpen(false);
                                                                    }
                                                                }}
                                                                className="block px-6 py-4 text-[11px] font-bold text-zinc-400 hover:text-pink-400 transition-all font-[var(--font-brand)] uppercase tracking-widest border-l-2 border-transparent hover:border-pink-500 relative z-10"
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-zinc-300 hover:text-pink-400 block px-4 py-4 rounded-xl text-[14px] font-black uppercase tracking-[0.2em] font-[var(--font-brand)] transition-all"
                                        >
                                            <span>{link.title}</span>
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 pb-6 px-2 space-y-3">
                                <button
                                    onClick={() => openModal('student')}
                                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-widest text-[12px] px-4 py-4 rounded-xl transition-colors border border-zinc-700 font-[var(--font-brand)]"
                                >
                                    Student Login
                                </button>
                                <button
                                    onClick={() => openModal('teacher')}
                                    className="w-full bg-pink-600 hover:bg-pink-500 text-white font-black uppercase tracking-[0.1em] text-[12px] px-4 py-4 rounded-xl transition-colors shadow-lg shadow-pink-500/20 font-[var(--font-brand)]"
                                >
                                    Join as Teacher
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Registration Modals */}
            <RegistrationModal
                isOpen={isRegModalOpen}
                onClose={() => setIsRegModalOpen(false)}
                type={regType}
            />
        </nav>
    );
};

export default Navbar;
