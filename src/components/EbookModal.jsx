import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Download, CheckCircle2, Star, ArrowLeft, Send, CheckCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://damnart-ai-guladab.n8n-wsk.com/webhook/finger-onkeys(e-books)';

const EbookModal = ({ book, isOpen, onClose }) => {
    const [showForm, setShowForm] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+91', phone: '' });

    if (!book) return null;

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setShowForm(false);
            setSubmitted(false);
            setFormData({ name: '', email: '', countryCode: '+91', phone: '' });
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'ebook_request',
                    book: book.title,
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                }),
            });
        } catch (_) { }
        setSubmitting(false);
        setSubmitted(true);
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:py-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        className="relative w-full max-w-5xl max-h-full bg-zinc-950 border border-zinc-800 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-3xl flex flex-col md:flex-row"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-5 right-5 text-white transition-colors bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 z-50 md:hidden"
                        >
                            <X size={22} />
                        </button>

                        {/* Left: Book Cover */}
                        <div className="w-full md:w-2/5 relative h-72 md:h-auto flex-shrink-0 group overflow-hidden bg-zinc-900">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-zinc-950/20 to-zinc-950`}></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-[2px]">
                                <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/30">
                                    <BookOpen className="text-pink-500" size={40} />
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight font-[var(--font-brand)] mb-2">
                                    {book.title}
                                </h3>
                                <p className="text-pink-300 font-bold tracking-widest text-[10px] uppercase">{book.author}</p>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 overflow-y-auto p-8 md:p-14 scrollbar-hide relative">
                            <button
                                onClick={handleClose}
                                className="hidden md:flex absolute top-10 right-10 text-zinc-400 hover:text-white transition-colors bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            <AnimatePresence mode="wait">
                                {/* ── Detail View ── */}
                                {!showForm && (
                                    <motion.div
                                        key="detail"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="flex items-center gap-2 text-pink-500 mb-6">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                            <span className="text-xs font-bold text-zinc-400 ml-2">4.9 / 5.0 (2.4k Reviews)</span>
                                        </div>

                                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase font-[var(--font-brand)] leading-none">
                                            Inside the <span className="text-pink-500">Guide</span>
                                        </h2>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">Core Focus</h4>
                                                <p className="text-zinc-400 text-lg leading-relaxed">{book.description}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">What you'll learn</h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {book.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-zinc-300">
                                                            <CheckCircle2 size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                            <div>
                                                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Price</p>
                                                <p className="text-3xl font-black text-white">{book.price}</p>
                                            </div>
                                            <button
                                                onClick={() => setShowForm(true)}
                                                className="w-full sm:w-auto px-10 py-5 bg-pink-600 hover:bg-pink-500 text-white font-black uppercase tracking-widest text-[14px] rounded-2xl shadow-2xl shadow-pink-500/20 transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group font-[var(--font-brand)]"
                                            >
                                                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                                                Get Your Copy
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* ── Request Form View ── */}
                                {showForm && (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 30 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {!submitted ? (
                                            <>
                                                <button
                                                    onClick={() => setShowForm(false)}
                                                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-semibold mb-8 transition-colors"
                                                >
                                                    <ArrowLeft size={16} /> Back to Details
                                                </button>

                                                <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase font-[var(--font-brand)]">
                                                    Request <span className="text-pink-500">Your Copy</span>
                                                </h2>
                                                <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                                                    Fill in your details and we'll get in touch with you shortly for <span className="text-pink-400 font-semibold">"{book.title}"</span>.
                                                </p>

                                                <form onSubmit={handleSubmit} className="space-y-5">
                                                    <div>
                                                        <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2 block">Full Name *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            placeholder="Your name"
                                                            value={formData.name}
                                                            onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                                            className="w-full bg-zinc-900 border border-zinc-700 focus:border-pink-500 rounded-xl px-5 py-4 text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2 block">Email Address *</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            placeholder="you@email.com"
                                                            value={formData.email}
                                                            onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                                            className="w-full bg-zinc-900 border border-zinc-700 focus:border-pink-500 rounded-xl px-5 py-4 text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2 block">Phone Number *</label>
                                                        <div className="flex gap-2">
                                                            <select
                                                                value={formData.countryCode}
                                                                onChange={e => setFormData(p => ({ ...p, countryCode: e.target.value }))}
                                                                className="w-[30%] bg-zinc-900 border border-zinc-700 focus:border-pink-500 rounded-xl px-2 py-4 text-white text-sm outline-none transition-colors appearance-none text-center"
                                                            >
                                                                <option value="+91">🇮🇳 +91</option>
                                                                <option value="+1">🇺🇸 +1</option>
                                                                <option value="+44">🇬🇧 +44</option>
                                                                <option value="+61">🇦🇺 +61</option>
                                                                <option value="+971">🇦🇪 +971</option>
                                                                <option value="+65">🇸🇬 +65</option>
                                                                <option value="+60">🇲🇾 +60</option>
                                                                <option value="+64">🇳🇿 +64</option>
                                                                <option value="+49">🇩🇪 +49</option>
                                                                <option value="+33">🇫🇷 +33</option>
                                                                <option value="+81">🇯🇵 +81</option>
                                                                <option value="+31">🇳🇱 +31</option>
                                                                <option value="+41">🇨🇭 +41</option>
                                                                <option value="+46">🇸🇪 +46</option>
                                                                <option value="+34">🇪🇸 +34</option>
                                                                <option value="+39">🇮🇹 +39</option>
                                                                <option value="+966">🇸🇦 +966</option>
                                                                <option value="+27">🇿🇦 +27</option>
                                                            </select>
                                                            <input
                                                                type="tel"
                                                                required
                                                                placeholder="00000 00000"
                                                                value={formData.phone}
                                                                onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                                                className="w-[70%] bg-zinc-900 border border-zinc-700 focus:border-pink-500 rounded-xl px-5 py-4 text-white text-sm outline-none transition-colors placeholder:text-zinc-600"
                                                            />
                                                        </div>
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        disabled={submitting}
                                                        className="w-full py-5 bg-pink-600 hover:bg-pink-500 disabled:opacity-60 text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-2xl shadow-pink-500/20 transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-95"
                                                    >
                                                        <Send size={18} />
                                                        {submitting ? 'Sending...' : 'Send Request'}
                                                    </button>
                                                </form>
                                            </>
                                        ) : (
                                            /* ── Success State ── */
                                            <div className="flex flex-col items-center justify-center text-center h-full py-16">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: 'spring', stiffness: 200 }}
                                                    className="w-24 h-24 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-8"
                                                >
                                                    <CheckCircle size={48} className="text-pink-500" />
                                                </motion.div>
                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter font-[var(--font-brand)] mb-4">
                                                    Request Sent!
                                                </h3>
                                                <p className="text-zinc-400 max-w-xs leading-relaxed mb-8">
                                                    Thanks <span className="text-pink-400 font-semibold">{formData.name}</span>! We've received your request for <span className="text-pink-400 font-semibold">"{book.title}"</span> and will contact you soon.
                                                </p>
                                                <button
                                                    onClick={handleClose}
                                                    className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-all"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default EbookModal;
