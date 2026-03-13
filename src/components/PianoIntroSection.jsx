import React from "react";
import { motion } from "framer-motion";
import { Wifi, Music, Music2, Sparkles } from "lucide-react";
import onlineSession from "../assets/gallery/WhatsApp Image 2026-02-24 at 10.58.38 AM.jpeg";

const PianoIntroSection = () => {
    return (
        <section className="py-16 px-4 relative z-10 overflow-hidden bg-zinc-950">
            {/* ── Background Elements ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Mesh Gradient / Atmosphere */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-600/[0.07] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-purple-600/[0.07] rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-indigo-600/[0.03] rounded-full blur-[140px]" />

                {/* Floating Background Icons */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 10, 0], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[8%] text-pink-500"
                >
                    <Music size={120} strokeWidth={0.5} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 40, 0], rotate: [0, -15, 0], opacity: [0.03, 0.08, 0.03] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[20%] right-[10%] text-purple-500"
                >
                    <Music2 size={160} strokeWidth={0.5} />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* ── LEFT: Image block ── */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Corner accent glows */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/20 blur-2xl rounded-full" />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full" />

                    {/* Pink border glow frame */}
                    <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-transparent blur-sm" />

                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(236,72,153,0.15)] group">
                        <img
                            src={onlineSession}
                            alt="Online piano lesson setup with Yamaha piano and video call"
                            className="w-full h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Gradient overlay bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                        {/* Live badge */}
                        <div className="absolute top-5 left-5">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex items-center gap-2 bg-zinc-950/90 backdrop-blur-xl border border-pink-500/30 px-5 py-2.5 rounded-full shadow-2xl"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse shadow-[0_0_10px_#ec4899]" />
                                <span className="text-pink-400 text-xs font-black tracking-widest uppercase">LIVE CLASSES</span>
                            </motion.div>
                        </div>

                        {/* Bottom caption card */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center gap-5 shadow-2xl"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center shrink-0 border border-white/5">
                                    <Wifi className="text-pink-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm tracking-tight">Real-Time, 1-on-1 Learning</p>
                                    <p className="text-zinc-400 text-xs font-medium">Interactive sessions with your dedicated teacher</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: Text block ── */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-10"
                >
                    <div className="space-y-6">
                        {/* Eyebrow label */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/30 bg-pink-500/5 backdrop-blur-sm">
                            <Sparkles className="text-pink-500" size={14} />
                            <span className="text-pink-400 text-[10px] font-black tracking-[0.3em] uppercase">Online Piano Academy</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-6xl md:text-5xl font-black uppercase leading-[1.05] tracking-tighter font-[var(--font-brand)] italic">
                            <span className="text-white drop-shadow-2xl">Learn Piano</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x bg-[length:200%_auto] py-2">Online</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-6xl md:text-5xl block mt-2">From Your Home</span>
                        </h2>

                        {/* Divider */}
                        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />
                    </div>

                    {/* Body */}
                    <div className="space-y-6">
                        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
                            Why waste time commuting to a music academy or tutor's place when you can master the piano with{" "}
                            <span className="text-pink-400 font-bold underline decoration-pink-500/30 underline-offset-4 decoration-2">highly qualified teachers in India</span> — right from your home.
                        </p>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Our online piano lessons are ideal for students who want to take piano learning seriously and progress with expert guidance in a distraction-free environment.
                        </p>
                    </div>

                    {/* Micro Features / Highlights */}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">Global Reach</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">Expert Tutors</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">Exam Prep</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">Live 1-on-1</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PianoIntroSection;
