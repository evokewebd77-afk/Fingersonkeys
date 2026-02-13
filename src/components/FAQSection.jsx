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
        answer: "Online classes will be conducted through the Google meet app."
    },

];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
                        Common <span className="text-pink-500">Queries</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Everything you need to know about starting your musical journey with us.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-800/20 border border-zinc-800 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-colors"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-pink-500 text-white rotate-180' : 'text-zinc-400'}`}>
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
