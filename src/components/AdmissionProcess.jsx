import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    PhoneCall,
    Video,
    CalendarCheck,
    PlayCircle,
    BadgeCheck,
    ClipboardList,
} from "lucide-react";
import classImg from "../assets/gallery/online_session.png";
import RegistrationModal from "./RegistrationModal";

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Register for a Callback",
        desc: "Submit your details via our website form or WhatsApp. We will contact you to schedule a short introductory call.",
        color: "from-pink-500 to-rose-500",
        glow: "rgba(236,72,153,0.4)",
    },
    {
        number: "02",
        icon: PhoneCall,
        title: "Pre-Consultation Phone Call",
        badge: "5 mins",
        desc: "A quick conversation to understand your goals, preferences, and availability.",
        color: "from-purple-500 to-pink-500",
        glow: "rgba(168,85,247,0.4)",
    },
    {
        number: "03",
        icon: Video,
        title: "Parent Video Consultation Session",
        badge: "45 mins",
        desc: "A detailed discussion with the Founder to explore your child's interests and take you through our programme, curriculum and policies.",
        color: "from-indigo-500 to-purple-500",
        glow: "rgba(99,102,241,0.4)",
    },
    {
        number: "04",
        icon: CalendarCheck,
        title: "Slot Availability Check",
        desc: "We align your preferred schedule with our available slots. If unavailable, you're added to our waitlist and notified as soon as a slot opens.",
        color: "from-pink-500 to-purple-500",
        glow: "rgba(236,72,153,0.4)",
    },
    {
        number: "05",
        icon: PlayCircle,
        title: "Student Demo Session",
        badge: "30 mins",
        desc: "If a slot is available, we arrange a one-on-one demo session with the teacher so you can experience our teaching approach firsthand.",
        color: "from-rose-500 to-pink-500",
        glow: "rgba(244,63,94,0.4)",
    },
    {
        number: "06",
        icon: BadgeCheck,
        title: "Admission & Onboarding",
        desc: "Upon confirmation, your child's learning journey begins with their dedicated teacher. Welcome to Fingers on Keys!",
        color: "from-purple-500 to-indigo-500",
        glow: "rgba(168,85,247,0.4)",
    },
];

const AdmissionProcess = () => {
    const [activeStep, setActiveStep] = useState(null);
    const [showForm, setShowForm] = useState(false);

    return (
        <section id="admission" className="pt-12 pb-16 px-4 relative z-10 overflow-hidden bg-zinc-900/60">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* ── Section Header ── */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-pink-500" />
                        <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">
                            Enrolment Journey
                        </span>
                    </div>
                    <h2 className="text-6xl md:text-5xl font-black uppercase tracking-tighter font-[var(--font-brand)]">
                        <span className="text-white">How Our Admission</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x bg-[length:200%_auto] py-2">Process Works</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-4 mb-6 rounded-full mx-auto"></div>
                    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        At Fingers on Keys, every student deserves a thoughtful beginning. Our admission process ensures each student is placed in the{" "}
                        <span className="text-pink-400 font-semibold">right learning environment</span>.
                    </p>
                </motion.div>

                {/* ── Main Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                    {/* LEFT — Steps */}
                    <div className="space-y-5">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const isActive = activeStep === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    onClick={() => setActiveStep(isActive ? null : i)}
                                    className={`group relative p-5 rounded-2xl border cursor-pointer transition-all duration-400
                    ${isActive
                                            ? "bg-zinc-900 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.15)]"
                                            : "bg-zinc-900/40 border-zinc-800 hover:border-pink-500/30 hover:bg-zinc-900/70"}`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Step number + icon */}
                                        <div className="flex flex-col items-center gap-2 shrink-0">
                                            <div
                                                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-all duration-300`}
                                                style={{ boxShadow: isActive ? `0 0 20px ${step.glow}` : "none" }}
                                            >
                                                <Icon size={22} className="text-white" />
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div className={`w-0.5 h-4 rounded-full transition-all duration-300 ${isActive ? "bg-pink-500" : "bg-zinc-700"}`} />
                                            )}
                                        </div>

                                        {/* Text */}
                                        <div className="pt-1 flex-1">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <span className="text-xs font-black text-zinc-600 tracking-widest">{step.number}</span>
                                                <h3 className={`font-bold text-base transition-colors duration-300 ${isActive ? "text-pink-400" : "text-white group-hover:text-pink-300"}`}>
                                                    {step.title}
                                                </h3>
                                                {step.badge && (
                                                    <span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
                                                        {step.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <motion.p
                                                initial={false}
                                                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden text-zinc-400 text-sm leading-relaxed mt-2"
                                            >
                                                {step.desc}
                                            </motion.p>
                                            {!isActive && (
                                                <p className="text-zinc-500 text-sm mt-1 line-clamp-1">{step.desc}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT — Image stretched to full height */}
                    <motion.div
                        className="relative lg:sticky lg:top-28"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Glow border */}
                        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-transparent blur-sm" />

                        <div className="relative rounded-[2.5rem] overflow-hidden border border-pink-500/20 shadow-[0_0_60px_rgba(236,72,153,0.12)] group h-full min-h-[600px]">
                            <img
                                src={classImg}
                                alt="Parent and child at piano — a warm consultation moment"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                            />
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                            {/* Top badge */}
                            <div className="absolute top-5 left-5">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                    className="flex items-center gap-2 bg-zinc-900/85 backdrop-blur-md border border-pink-500/30 px-4 py-2 rounded-full"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                                    <span className="text-pink-400 text-sm font-bold tracking-wide">1-on-1 Sessions</span>
                                </motion.div>
                            </div>

                            {/* Bottom info */}
                            <div className="absolute bottom-5 left-5 right-5 space-y-3">
                                <div className="bg-zinc-900/85 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4">
                                    <p className="text-white font-bold text-sm mb-1">One-on-One Parent Video Consultation</p>
                                    <p className="text-zinc-400 text-xs">with the Founder — understanding your child's needs</p>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { val: "6", label: "Simple Steps" },
                                        { val: "45m", label: "Consult Session" },
                                        { val: "Free", label: "Demo Class" },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-zinc-900/85 backdrop-blur-md border border-white/10 rounded-xl px-3 py-3 text-center">
                                            <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{stat.val}</div>
                                            <div className="text-zinc-400 text-xs">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        onClick={() => setShowForm(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-lg shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer"
                    >
                        Start Your Admission
                        <span className="text-xl">→</span>
                    </motion.button>
                    <p className="mt-4 text-zinc-500 text-sm">Free demo class • No obligation • Takes 2 minutes</p>
                </motion.div>

                {/* Student Registration Modal */}
                <RegistrationModal
                    isOpen={showForm}
                    onClose={() => setShowForm(false)}
                    type="enquiry"
                />
            </div>
        </section>
    );
};

export default AdmissionProcess;
