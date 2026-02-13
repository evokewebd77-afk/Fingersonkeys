import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BlogModal from './BlogModal';

import studentMasteryImg from '../assets/gallery/student_mastery.png';
import classInteractionImg from '../assets/gallery/class_interaction.png';
import onlineSessionImg from '../assets/gallery/online_session.png';

const blogs = [
    {
        title: 'The Art of Sight Reading and Why It Matters',
        date: 'Oct 24, 2025',
        category: 'Technique',
        image: studentMasteryImg,
        fullContent: [
            "Sight reading is the ability to read and perform a musical piece for the first time without prior practice. It's like reading a book aloud – you understand the symbols and translate them into performance instantly.",
            "For pianists, mastering sight reading opens up a world of musical possibilities. It allows you to explore vast repertoires without the frustration of spending weeks on a single page. It also makes collaborating with other musicians much easier.",
            "The key to improving is consistent practice. Spend 10-15 minutes every day reading something new, even if it's much simpler than your current level. Focus on keeping a steady rhythm, even if you hit a wrong note.",
            "At FingersOnTheKeys, we integrate sight reading into every lesson, ensuring our students become versatile musicians who can pick up any score and play."
        ]
    },
    {
        title: 'Understanding Harmony: A Modern Approach',
        date: 'Nov 12, 2025',
        category: 'Theory',
        image: classInteractionImg,
        fullContent: [
            "Harmony is the foundation of musical emotion. While melody gives us a tune, harmony provides the context, depth, and resonance that moves our hearts.",
            "Modern harmony isn't just about old rules; it's about understanding how intervals and chords create tension and release. From classical progressions to jazz substitutions, harmony is a language of color.",
            "We teach our students to visualize harmony on the keyboard, understanding how chords are built and how they lead into one another. This knowledge is essential for both performance and composition.",
            "By mastering harmony, you gain the freedom to improvise and even rearrange your favorite songs with your unique musical voice."
        ]
    },
    {
        title: 'Setting Up Your First Home Studio',
        date: 'Dec 05, 2025',
        category: 'Production',
        image: onlineSessionImg,
        fullContent: [
            "In today's digital age, every musician should have a space to capture their creativity. Setting up a home studio doesn't have to be expensive or overwhelming.",
            "The essentials include a reliable computer, a Digital Audio Workstation (DAW), a good pair of studio monitors or headphones, and of course, your instrument connection.",
            "Acoustics play a huge role. Even simple solutions like curtains or bookshelves can help dampen reflections and make your recordings sound more professional.",
            "Join our production workshops to learn how to turn your practice space into a creative powerhouse, allowing you to record, mix, and share your music with the world."
        ]
    }
];

const BlogSection = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section id="blogs" className="py-24 px-4 relative z-10 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
                            Latest from the <span className="text-pink-500">Blog</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedBlog(blog)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] mb-6 h-64 border border-zinc-800 group-hover:border-pink-500/30 transition-all shadow-lg">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-zinc-900/20 transition-colors"></div>
                                <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black border border-white/10 text-pink-400 uppercase tracking-widest">
                                    {blog.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] text-zinc-500 mb-2 font-black uppercase tracking-widest">
                                <span>{blog.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors leading-snug font-[var(--font-brand)]">
                                {blog.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <button
                        onClick={() => window.scrollTo({ top: document.getElementById('blogs').offsetTop - 100, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-black uppercase text-xs tracking-widest"
                    >
                        View all posts <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>

            <BlogModal
                blog={selectedBlog}
                isOpen={!!selectedBlog}
                onClose={() => setSelectedBlog(null)}
            />
        </section>
    );
};

export default BlogSection;
