import React from "react";
import { motion } from "framer-motion";
import {
    Piano,
    FileText,
    GraduationCap,
    BarChart3,
    Mic2,
    Headphones,
    BookOpenCheck,
} from "lucide-react";
import studentImg from "../assets/gallery/student_mastery.png";

const features = [
    {
        icon: Piano,
        title: "4 Private Classes Every Month",
        desc: "Each student gets four one-on-one piano classes every month. Lessons are planned based on the student's level and learning speed.",
        accent: "pink",
    },
    {
        icon: FileText,
        title: "Practice Guidance After Every Class",
        desc: "After each lesson, students receive simple notes about what to practice and how to improve before the next class.",
        accent: "purple",
    },
    {
        icon: GraduationCap,
        title: "Exam Preparation Support",
        desc: "Students preparing for music exams receive proper training, practice tests, and feedback to help them perform well.",
        accent: "indigo",
    },
    {
        icon: BarChart3,
        title: "Regular Progress Updates",
        desc: "Every three months, students get a clear report showing their improvement and what they should work on next.",
        accent: "pink",
    },
    {
        icon: BookOpenCheck,
        title: "Periodic Music Learning Material",
        desc: "Students receive music-related resources to improve their listening skills and understand music better.",
        accent: "purple",
    },
    {
        icon: Mic2,
        title: "Performance Opportunities",
        desc: "Students can take part in two online performances every year to build confidence and get stage experience.",
        accent: "indigo",
    },
];

const accentMap = {
    pink: {
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        text: "text-pink-400",
        glow: "shadow-[0_0_30px_rgba(236,72,153,0.2)] group-hover:shadow-none",
        iconBg: "bg-pink-500",
        dot: "bg-pink-500",
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:shadow-none",
        iconBg: "bg-purple-500",
        dot: "bg-purple-500",
    },
    indigo: {
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        glow: "shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:shadow-none",
        iconBg: "bg-indigo-500",
        dot: "bg-indigo-500",
    },
};

const PianoExperienceSection = () => {
    return (
        <section className="py-16 px-4 relative z-10 overflow-hidden">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_50%),radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-zinc-950/90 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">

                {/* ── Section Header ── */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
                            What You Get
                        </span>
                    </div>
                    <h2 className="text-6xl md:text-5xl font-black uppercase tracking-tighter font-[var(--font-brand)] ">
                        <span className="text-white">Your Piano</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x bg-[length:200%_auto] py-2">Learning Program</span>
                    </h2>
                    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        At Fingers on Keys, we don't just teach piano lessons. We guide students step by step so they can learn with{" "}
                        <span className="text-purple-400 font-semibold">confidence and consistency</span>.
                    </p>
                </motion.div>

                {/* ── Clean 3×2 Feature Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        const colors = accentMap[feature.accent];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className={`group relative p-6 rounded-[1.5rem] bg-zinc-900/50 border border-pink-500/50 ${colors.glow} transition-all duration-400 backdrop-blur-sm hover:border-pink-500/20`}
                            >
                                {/* Subtle corner accent */}
                                <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-bl-[3rem] opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none`} />

                                <div className="relative z-10">
                                    {/* Icon + Number row */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg scale-110 group-hover:scale-100 transition-transform duration-300`}>
                                            <Icon size={22} className="text-white" />
                                        </div>
                                        <span className="text-zinc-700 text-3xl font-black tracking-tighter">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-pink-300 font-bold text-base mb-2 group-hover:text-white transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div className={`mt-4 h-0.5 w-full group-hover:w-0 ${colors.iconBg} rounded-full transition-all duration-500`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PianoExperienceSection;
