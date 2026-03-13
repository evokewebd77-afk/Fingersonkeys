import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/gallery/Fingers on keys detailed logo.png';
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
        { title: 'Pricing', href: '#pricing' },

        { title: 'Blogs', href: '#blogs' },
        {
            title: 'Services',
            href: '#services',
            dropdown: [
                { title: 'Our Programs', href: '#services' },
                { title: 'Professional Ebooks', href: '#ebooks' },
                { title: 'Admission Process', href: '#admission' },
                { title: 'Student Reviews', href: '#reviews' },
            ]
        },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-pink-500/20 shadow-xl shadow-pink-500/5' : 'bg-gradient-to-b from-zinc-950/60 to-transparent backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-[72px]">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="relative w-12 h-12 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                            <img src={logoImg} alt="Fingers on Keys Logo" className="relative w-12 h-12 object-contain rounded-xl" />
                        </div>
                        <div className="flex flex-col leading-tight gap-[2px]">
                            <span className="text-[15px] md:text-[18px] font-black tracking-[0.12em] md:tracking-[0.18em] flex items-center font-[var(--font-brand)] uppercase">
                                <span className="text-white">Fingers</span>
                                <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent px-1.5">
                                    On
                                </span>
                                <span className="text-white">Keys</span>
                            </span>
                            <span className="text-[7px] md:text-[7.5px] font-bold tracking-[0.28em] md:tracking-[0.42em] text-pink-400/70 uppercase whitespace-nowrap">
                                An Online Piano Academy
                            </span>
                        </div>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-4 xl:space-x-8">
                            {navLinks.map((link) => (
                                <div
                                    key={link.title}
                                    className="relative group"
                                    onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
                                    onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
                                >
                                    <a
                                        href={link.href}
                                        className="text-zinc-300 hover:text-pink-400 hover:-translate-y-0.5 transition-all duration-200 px-2 py-2 rounded-md text-[12px] xl:text-[14px] font-black uppercase tracking-[0.15em] xl:tracking-[0.2em] font-[var(--font-brand)] flex items-center gap-1 shrink-0 whitespace-nowrap"
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
                                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl text-[10px] xl:text-[12px] font-black uppercase tracking-widest transition-all border border-pink-500/20 font-[var(--font-brand)] hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-pink-500/30 shrink-0 whitespace-nowrap"
                            >
                                Student Login
                            </button>
                            <button
                                onClick={() => openModal('teacher')}
                                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl text-[10px] xl:text-[12px] font-black uppercase tracking-widest transition-all border border-pink-500/20 font-[var(--font-brand)] hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-purple-500/30 shrink-0 whitespace-nowrap"
                            >
                                Join As Faculty
                            </button>


                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
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
                        className="lg:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-pink-500/20 overflow-hidden shadow-2xl shadow-pink-500/10 origin-top"
                    >
                        <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
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
                                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black uppercase tracking-widest text-[12px] px-4 py-4 rounded-xl transition-all border border-pink-500/20 font-[var(--font-brand)] hover:shadow-lg hover:shadow-pink-500/30"
                                >
                                    Student Login
                                </button>
                                <button
                                    onClick={() => openModal('teacher')}
                                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black uppercase tracking-[0.1em] text-[12px] px-4 py-4 rounded-xl transition-all border border-pink-500/20 shadow-lg font-[var(--font-brand)] hover:shadow-purple-500/30"
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
