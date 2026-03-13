import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do online piano classes really work?",
        answer: "Yes! Online piano classes are highly effective. They enable comprehensive piano instruction, and all major global music exam boards now permanently offer online exams, allowing certification from anywhere."
    },
    {
        question: "What is the class duration and frequency?",
        answer: "Each class will be for 45 mins and there will be a minimum 4 classes per month."
    },
    {
        question: "Is this a piano or a keyboard class?",
        answer: "Our piano curriculum surpasses keyboard-based programs by delivering a fuller, more tactile learning experience. It builds essential hand technique, finger strength, and touch sensitivity for expressive playing. The piano's full-sized, weighted keys also mimic an acoustic instrument closely, deepening mastery of dynamics and musicianship."
    },
    {
        question: "How will the online classes be conducted?",
        answer: "Online classes will be conducted through the Google Meet app."
    },
    {
        question: "What kind of computer is needed for online lessons?",
        answer: "You'll need a computer or laptop equipped with both a webcam and a microphone. Using a mobile phone to connect for classes is not recommended."
    },
    {
        question: "What are the internet requirements for online piano lessons?",
        answer: "A stable and reliable high-speed internet connection is crucial for a successful online learning experience."
    },
    {
        question: "Is a Google account required for online piano lessons?",
        answer: "Yes, a Google account is necessary to access class materials and for communication with the academy."
    },
    {
        question: "Can I use a tablet instead of a computer for online lessons?",
        answer: "While tablets may work, our Academy recommends using a computer or laptop to ensure optimal functionality with lesson software and to better facilitate screen sharing and interactive learning."
    },
    {
        question: "What should I do if I have technical difficulties during an online lesson?",
        answer: "Contact the technical support team at your end. Having a backup device available can also minimize disruptions."
    },
    {
        question: "What are the key requirements for students enrolling at our Piano Academy?",
        answer: "Students must be at least 6 years old. For children 8 and under, a parent or guardian must be present during all class sessions. Students should be able to maintain focus throughout the class and communicate comfortably in English. Regular home practice is also essential."
    },
    {
        question: "What are the instrument requirements for students?",
        answer: "While an 88-key piano is ideal, if you don't have a piano we will guide you to purchase the correct one as per your level."
    },
    {
        question: "Is a free trial lesson available before enrollment?",
        answer: "Yes! We offer a free trial lesson so you can experience our teaching style and get comfortable before committing to enrollment. Contact us to book your trial session."
    },
    {
        question: "What are the other Course Options?",
        answer: (
            <div className="space-y-3">
                <p><span className="font-bold text-white">Weekly course (1× per week):</span> one lesson on a fixed day and time each week.</p>
                <p><span className="font-bold text-white">Intensive course (2× per week):</span> two weekly lessons for faster development and greater momentum.</p>
                <p><span className="font-bold text-white">Flexible lessons:</span> ad-hoc scheduling at a premium rate for those who require maximum flexibility.</p>
            </div>
        )
    },
    {
        question: "What are the Payments and Administration terms and conditions?",
        answer: (
            <div className="space-y-3">
                <p>• <span className="font-bold text-white">Monthly Payments:</span> Monthly payments via Direct Debit ensure simplicity and seamless continuity.</p>
                <p>• <span className="font-bold text-white">Course Withdrawal:</span> Four teaching weeks’ notice is required should you wish to stop your course.</p>
                <p>• <span className="font-bold text-white">Registration Fee:</span> A one-time registration fee to secure your place and set up your course will be chargeable (conveyed in counselling session).</p>
                <p>• <span className="font-bold text-white">Tutor Support:</span> Your tutor will create a personalised weekly practice plan and progress checkpoints, ensuring you always know what to focus on between lessons and how your skills are developing over time.</p>
            </div>
        )
    },
];


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-16 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)]">
                        Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Queries</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-4 rounded-full mx-auto"></div>
                    <p className="text-zinc-400 text-lg">
                        Everything you need to know about starting your musical journey with us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-start">
                    {/* Left Column — even indices (0,2,4,6,8,10) */}
                    <div className="space-y-4">
                        {faqs.filter((_, i) => i % 2 === 0).map((faq) => {
                            const index = faqs.indexOf(faq);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-zinc-800/20 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-colors"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                                    >
                                        <span className="text-lg font-bold text-white">{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center transition-all flex-shrink-0 ${activeIndex === index ? 'bg-pink-500 text-white rotate-180' : 'text-zinc-400'}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Column — odd indices (1,3,5,7,9,11) */}
                    <div className="space-y-4">
                        {faqs.filter((_, i) => i % 2 !== 0).map((faq) => {
                            const index = faqs.indexOf(faq);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-zinc-800/20 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-colors"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                                    >
                                        <span className="text-lg font-bold text-white">{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center transition-all flex-shrink-0 ${activeIndex === index ? 'bg-pink-500 text-white rotate-180' : 'text-zinc-400'}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
