import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Arjun Sharma",
        role: "Student, Grade 5 Trinity",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        text: "Online piano classes at Fingers on Keys have been life-changing. I was skeptical about online lessons, but the feedback is instant and my teacher is world-class.",
        rating: 5
    },
    {
        name: "Priya Varma",
        role: "Parent of 8-year-old",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        text: "My daughter started at age 6 and the progress has been phenomenal. The structured curriculum and Google Meet platform make it so easy to manage.",
        rating: 5
    },
    {
        name: "David Wilson",
        role: "Adult Learner",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        text: "The 1-on-1 sessions are focused and highly effective. I've already cleared my Grade 2 ABRSM exam within months of joining.",
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section id="reviews" className="py-24 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
                        Student <span className="text-pink-500">Reviews</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">Hear from our vibrant musical community and successful alumni.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-[2rem] bg-zinc-800/20 border border-zinc-800 hover:border-pink-500/30 transition-all group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-pink-500 text-pink-500" />
                                ))}
                            </div>
                            <Quote size={40} className="text-pink-500/20 mb-4 group-hover:text-pink-500/40 transition-colors" />
                            <p className="text-zinc-300 text-lg mb-8 leading-relaxed italic">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-500/30 shadow-lg shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-zinc-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
