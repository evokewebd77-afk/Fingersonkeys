import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, CheckCircle, Mail, Phone, MessageCircle, FileText, Clock, Shield } from 'lucide-react';

const ComplaintsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        complaintType: '',
        description: '',
        resolution: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send to a backend/email service
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
                <div className="max-w-5xl mx-auto px-4 py-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors mb-8">
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                                <AlertCircle size={24} className="text-pink-500" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black">Complaints</h1>
                        </div>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            We take all concerns seriously. Use the form below to raise your issue and we'll respond within 5 working days.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-10"
                >
                    {/* Policy Overview */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                                <Shield size={20} className="text-pink-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Our Complaints Policy</h2>
                        </div>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Fingers on Keys is committed to providing high-quality online piano education. We value your feedback and recognise that things can sometimes go wrong. Our complaints process ensures every concern is dealt with fairly, consistently, and promptly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { icon: Clock, label: 'Acknowledgement', value: 'Within 2 working days' },
                                { icon: FileText, label: 'Full Response', value: 'Within 5 working days' },
                                { icon: CheckCircle, label: 'Resolution', value: 'Confirmed in writing' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                                    <Icon size={18} className="text-pink-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">{label}</p>
                                        <p className="text-white font-semibold text-sm mt-1">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Two-column layout: Form + Contact */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Complaint Form */}
                        <div className="lg:col-span-2">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-10 rounded-2xl bg-green-500/10 border border-green-500/30 text-center"
                                >
                                    <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Complaint Received</h3>
                                    <p className="text-zinc-400 mb-6">
                                        Thank you for reaching out. We have received your complaint and will acknowledge it within 2 working days.
                                    </p>
                                    <p className="text-zinc-500 text-sm">Reference ID: FOK-{Date.now().toString().slice(-6)}</p>
                                </motion.div>
                            ) : (
                                <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                                    <h2 className="text-2xl font-bold text-white mb-6">Raise a Complaint</h2>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-zinc-300 mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-zinc-300 mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-zinc-300 mb-2">Phone Number</label>
                                                <div className="flex gap-2">
                                                    <select
                                                        name="countryCode"
                                                        value={formData.countryCode}
                                                        onChange={handleChange}
                                                        className="w-[35%] bg-zinc-800 border border-zinc-700 rounded-xl px-2 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none text-center font-semibold"
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
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="00000 00000"
                                                        className="w-[65%] bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-zinc-300 mb-2">Complaint Type *</label>
                                                <select
                                                    name="complaintType"
                                                    required
                                                    value={formData.complaintType}
                                                    onChange={handleChange}
                                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                                                >
                                                    <option value="" disabled>Select type…</option>
                                                    <option value="teaching">Teaching Quality</option>
                                                    <option value="scheduling">Scheduling / Cancellation</option>
                                                    <option value="billing">Billing / Payment</option>
                                                    <option value="technical">Technical Issues</option>
                                                    <option value="conduct">Staff Conduct</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-300 mb-2">Full Description *</label>
                                            <textarea
                                                name="description"
                                                required
                                                rows={5}
                                                value={formData.description}
                                                onChange={handleChange}
                                                placeholder="Please describe your complaint in detail, including dates and any relevant information…"
                                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-300 mb-2">Desired Resolution</label>
                                            <textarea
                                                name="resolution"
                                                rows={3}
                                                value={formData.resolution}
                                                onChange={handleChange}
                                                placeholder="What outcome would you consider a satisfactory resolution?"
                                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black uppercase tracking-widest text-sm px-6 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-pink-500/30"
                                        >
                                            Submit Complaint
                                        </button>
                                    </form>
                                </section>
                            )}
                        </div>

                        {/* Sidebar: Contact Details */}
                        <div className="space-y-5">
                            <section className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                                <h3 className="text-lg font-bold text-white mb-5">Contact Us Directly</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                                            <a href="mailto:jaspreetnihongo@gmail.com" className="text-zinc-300 hover:text-pink-400 transition-colors text-sm font-semibold break-all">
                                                jaspreetnihongo@gmail.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                                            <Phone size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                                            <a href="tel:+919555827199" className="text-zinc-300 hover:text-pink-400 transition-colors text-sm font-semibold">
                                                +91 95558 27199
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 group">
                                        <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                                            <MessageCircle size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</p>
                                            <a href="https://wa.me/919555827199" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-pink-400 transition-colors text-sm font-semibold">
                                                +91 95558 27199
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            <section className="p-6 rounded-2xl bg-pink-500/5 border border-pink-500/20">
                                <h3 className="text-base font-bold text-white mb-3">What happens next?</h3>
                                <ol className="space-y-3 text-sm text-zinc-400">
                                    {[
                                        'We acknowledge your complaint within 2 working days.',
                                        'A member of our team investigates your complaint.',
                                        'We respond with our findings and proposed resolution.',
                                        'If unresolved, the matter is escalated to senior management.',
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ComplaintsPage;
