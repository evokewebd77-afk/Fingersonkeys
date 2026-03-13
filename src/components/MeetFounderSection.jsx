import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    GraduationCap,
    Globe2,
    Music,
    Sparkles,
    BookOpen,
    X,
    ChevronRight,
} from "lucide-react";
import founderMainImg from "../assets/gallery/image.png";
import founderModalImg from "../assets/gallery/WhatsApp Image 2026-02-24 at 4.43.02 PM.jpeg";

const stats = [
    { value: "10+", label: "Years Experience", icon: Music },
    { value: "Grade 8", label: "Trinity London", icon: GraduationCap },
    { value: "Japan", label: "Crystal Piano", icon: Globe2 },
    { value: "KPMG", label: "Former Auditor", icon: BookOpen },
];

const MeetFounderSection = () => {
    const [showProfile, setShowProfile] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (showProfile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showProfile]);

    return (
        <>
            <section className="py-16 px-4 relative z-10 overflow-hidden bg-zinc-950">
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/[0.04] rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
                            <Sparkles size={14} className="text-purple-400" />
                            <span className="text-purple-400 text-xs font-bold tracking-[0.3em] uppercase">
                                The Visionary
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-5xl font-black uppercase tracking-tighter font-[var(--font-brand)] text-white">
                            Meet the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                                Founder
                            </span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-4 rounded-full mx-auto"></div>
                    </motion.div>

                    {/* Main Layout — Image Left, Content Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                        {/* LEFT — Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Outer glow */}
                            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-indigo-500/10 blur-xl" />

                            {/* Image container */}
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.12)]">
                                <img
                                    src={founderMainImg}
                                    alt="Jaspreet Kaur performing on piano"
                                    className="w-full h-[500px] md:h-[580px] object-cover object-center"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                                {/* Name overlay on image */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-white font-black text-3xl md:text-4xl uppercase italic tracking-tight font-[var(--font-brand)] mb-1">
                                        Jaspreet Kaur
                                    </h3>
                                    <p className="text-pink-400 text-xs font-bold tracking-[0.3em] uppercase">
                                        Founder & Piano Faculty
                                    </p>

                                    {/* Stats bar */}
                                    <div className="flex flex-wrap gap-3 mt-5">
                                        {stats.map((s, i) => {
                                            const Icon = s.icon;
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + i * 0.08 }}
                                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
                                                >
                                                    <Icon size={13} className="text-pink-400" />
                                                    <span className="text-white font-bold text-xs">{s.value}</span>
                                                    <span className="text-zinc-400 text-[10px]">{s.label}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Know More Button — below image */}
                            <motion.button
                                onClick={() => setShowProfile(true)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-black text-sm uppercase tracking-[0.2em] font-[var(--font-brand)] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow cursor-pointer border border-white/10"
                            >
                                <Sparkles size={14} />
                                Know More
                                <ChevronRight size={16} />
                            </motion.button>
                        </motion.div>

                        {/* RIGHT — Bio & Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="space-y-6"
                        >
                            {/* Bio */}
                            <p className="text-zinc-300 text-base md:text-lg leading-[1.85] font-light">
                                Jaspreet Kaur is a Delhi-India based western classical pianist, vocalist, and founder of{" "}
                                <span className="text-pink-400 font-semibold">Fingers On Keys</span>. With over a decade of experience spanning performance, teaching, and composition, she brings a rare combination of formal musical rigour and heartfelt artistic expression.
                            </p>

                            <p className="text-zinc-500 text-sm leading-[1.9]">
                                Her mission is fourfold — to make western classical music accessible to all, nurture performance-ready musicians, build lasting confidence through music, and weave Indian musical traditions into western classical learning.
                            </p>

                            {/* Journey Cards */}
                            <div className="space-y-4 pt-2">
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="group relative bg-zinc-900/40 border border-white/[0.06] rounded-2xl p-5 hover:border-purple-500/20 transition-all overflow-hidden"
                                >
                                    <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-start gap-4 pl-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center shrink-0 group-hover:bg-purple-500/25 transition-colors">
                                            <Globe2 size={18} className="text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1.5">Corporate Roots</h4>
                                            <p className="text-zinc-500 text-xs leading-relaxed">
                                                A postgraduate in Commerce, Jaspreet built her early career as an Audit Associate at KPMG on United Kingdom Insurance portfolios. The precision she honed translates into her meticulous teaching methodology.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="group relative bg-zinc-900/40 border border-white/[0.06] rounded-2xl p-5 hover:border-pink-500/20 transition-all overflow-hidden"
                                >
                                    <div className="absolute left-0 top-0 w-1 h-full bg-pink-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-start gap-4 pl-3">
                                        <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center shrink-0 group-hover:bg-pink-500/25 transition-colors">
                                            <Award size={18} className="text-pink-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1.5">International Stage</h4>
                                            <p className="text-zinc-500 text-xs leading-relaxed">
                                                Performed at the Indian Hamamatsu Festival in Japan — she had the rare honour of performing on Japan's only Crystal Piano, reserved for the most accomplished musicians.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Closing */}
                            <div className="bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-transparent border border-white/[0.06] rounded-2xl p-5">
                                <p className="text-zinc-400 text-sm leading-[1.8]">
                                    Beyond the classroom, Jaspreet pursues songwriting, composition, and music production — blending classical depth with contemporary sensibilities. Her artistic curiosity makes her not just a teacher, but a{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                                        lifelong musician who leads entirely by example
                                    </span>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Profile Modal — rendered via Portal to escape overflow-hidden */}
            {
                ReactDOM.createPortal(
                    <AnimatePresence>
                        {showProfile && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                                onClick={() => setShowProfile(false)}
                            >
                                {/* Backdrop */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                                {/* Modal Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 40, scale: 0.95 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative w-[95vw] max-w-6xl h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl shadow-purple-500/10"
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShowProfile(false)}
                                        className="sticky top-5 float-right mr-5 mt-5 z-10 w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all cursor-pointer"
                                    >
                                        <X size={18} />
                                    </button>

                                    {/* Header */}
                                    <div className="relative p-8 pb-6 border-b border-white/[0.06]">
                                        <div className="flex items-center gap-5">
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                                                <img src={founderModalImg} alt="Jaspreet Kaur" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight font-[var(--font-brand)]">
                                                    Jaspreet Kaur
                                                </h3>
                                                <p className="text-pink-400 text-xs font-bold tracking-[0.3em] uppercase mt-1">
                                                    Founder & Piano Faculty
                                                </p>
                                                <p className="text-zinc-500 text-xs mt-1">
                                                    Teaching Qualifications: Grade 8 Piano (Trinity)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-8 space-y-5">
                                        <p className="text-zinc-300 text-sm leading-[1.9]">
                                            Jaspreet Kaur is a Delhi-India based western classical pianist, vocalist, and founder of <span className="text-pink-400 font-semibold">Fingers On Keys</span>. With over a decade of experience spanning performance, teaching, and composition, Jaspreet brings to her students a rare combination of formal musical rigour and heartfelt artistic expression. Her mission is fourfold — to make western classical music accessible to all, to nurture performance-ready musicians, to build lasting confidence through music, and to weave the rich heritage of Indian musical traditions into the tapestry of western classical learning.
                                        </p>

                                        <p className="text-zinc-400 text-sm leading-[1.9]">
                                            Jaspreet's relationship with music began in childhood, nurtured by an innate curiosity that drew her across genres — from the soulful cadences of Indian classical music to the structured elegance of western styles and the vibrancy of contemporary pop. This early immersion across styles gave her a uniquely versatile musical ear, one that continues to inform both her playing and her teaching philosophy.
                                        </p>

                                        <div className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <BookOpen size={16} className="text-purple-400" />
                                                <h4 className="text-white font-bold text-sm">Corporate Roots</h4>
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-[1.9]">
                                                A postgraduate in Commerce, Jaspreet built her early career in the corporate world, working as an Audit Associate at KPMG on United Kingdom Insurance client portfolios. The precision, analytical rigour, and discipline she honed during those years have since translated seamlessly into her approach to music, where structure, attention to detail, and a deep respect for the craft are hallmarks of everything she does. Choosing to transform passion into profession, she left the corporate world to dedicate herself fully to music and has not looked back since.
                                            </p>
                                        </div>

                                        <div className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Globe2 size={16} className="text-pink-400" />
                                                <h4 className="text-white font-bold text-sm">International Recognition</h4>
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-[1.9]">
                                                Jaspreet's artistry has earned her recognition on prestigious international stages. She performed at the <span className="text-white font-semibold">Indian Hamamatsu Festival</span> in Japan and at the iconic <span className="text-white font-semibold">Act City Hamamatsu</span> — one of Japan's foremost concert venues. Most notably, she had the rare distinction of performing on Japan's only <span className="text-white font-semibold">Crystal Piano</span>, an honour reserved for only the most accomplished musicians. Beyond performance, she has competed in and won music competitions, collaborated with fellow artists, and contributed written work on music — reflecting the depth and breadth of her engagement with the art form.
                                            </p>
                                        </div>

                                        <div className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Music size={16} className="text-indigo-400" />
                                                <h4 className="text-white font-bold text-sm">Teaching at Fingers On Keys</h4>
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-[1.9]">
                                                At Fingers On Keys, Jaspreet teaches Piano to students across all age groups — from young beginners discovering their first notes to advanced learners preparing for professional performances. Her curriculum is thoughtfully designed to honour Western classical traditions while drawing meaningful connections to Indian musical sensibilities, making the learning journey both globally informed and deeply personal. Through her teaching, she aspires to build not just skilled musicians but confident, expressive individuals who find joy and meaning in every note they play.
                                            </p>
                                        </div>

                                        <p className="text-zinc-400 text-sm leading-[1.9]">
                                            Beyond the classroom and the concert stage, Jaspreet's creative spirit continues to evolve. She actively pursues songwriting, music composition, and music production — blending classical depth with contemporary sensibilities to craft work that is distinctly her own. Her boundless artistic curiosity and commitment to musical excellence make her not just a teacher, but a{" "}
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                                                lifelong musician who leads entirely by example
                                            </span>.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )
            }
        </>
    );
};

export default MeetFounderSection;
