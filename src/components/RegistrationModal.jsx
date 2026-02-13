import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, GraduationCap, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose, type = 'student' }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        specialization: '',
        experience: '',
        age: '',
        phone: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        const webhookUrl = type === 'teacher'
            ? 'https://damnart-ai-guladab.n8n-wsk.com/webhook/FINGER-ONKEYS(tutor)'
            : 'https://damnart-ai-guladab.n8n-wsk.com/webhook/FINGER-ONKEYS';

        try {
            console.log('Submitting form to:', webhookUrl);
            const payload = {
                ...formData,
                type,
                submittedAt: new Date().toISOString()
            };
            console.log('Payload:', payload);

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                setStatus('success');
                setMessage(type === 'teacher' ? 'Application sent successfully!' : 'Registration successful!');
                setFormData({
                    fullName: '',
                    email: '',
                    specialization: '',
                    experience: '',
                    age: '',
                    phone: ''
                });
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setMessage('');
                }, 2000);
            } else {
                const errorText = await response.text();
                console.error('Submission failed:', response.status, response.statusText, errorText);
                throw new Error(`Server returned ${response.status}: ${errorText || response.statusText}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            // Display the actual error message to help with debugging
            setMessage(error.message || 'Something went wrong. Please try again.');

            // Auto-hide error after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        }
    };
    return createPortal(
        <AnimatePresence mode="wait">
            {isOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center p-4"
                    style={{ position: 'fixed', overflowY: 'auto' }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onClose();
                        }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg bg-zinc-950 border border-pink-500/20 rounded-[2.5rem] p-8 md:p-10 shadow-3xl overflow-hidden z-10 my-8"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-10 text-center relative z-10">
                            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-pink-500 border border-pink-500/20">
                                {type === 'teacher' ? <GraduationCap size={32} /> : <User size={32} />}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 uppercase italic leading-none font-[var(--font-brand)]">
                                {type === 'teacher' ? 'Join as ' : 'Student '}
                                <span className="text-pink-500">{type === 'teacher' ? 'Instructor' : 'Portal'}</span>
                            </h2>
                            <p className="text-zinc-500 text-sm">
                                {type === 'teacher'
                                    ? 'Share your musical expertise with students worldwide.'
                                    : 'Access your lessons, materials, and progress tracking.'}
                            </p>
                        </div>

                        <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="relative group">
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.08] transition-all placeholder:text-zinc-600 font-medium"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.08] transition-all placeholder:text-zinc-600 font-medium"
                                    />
                                </div>
                                {type === 'teacher' ? (
                                    <>
                                        <div className="relative group">
                                            <input
                                                required
                                                type="text"
                                                name="specialization"
                                                value={formData.specialization}
                                                onChange={handleChange}
                                                placeholder="Specialization (e.g., Classical Piano, Jazz)"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.08] transition-all placeholder:text-zinc-600 font-medium"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                required
                                                type="text"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                placeholder="Experience (Years)"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.08] transition-all placeholder:text-zinc-600 font-medium"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex gap-4">
                                        <input
                                            required
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            placeholder="Age"
                                            className="w-1/3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.08] transition-all placeholder:text-zinc-600 font-medium"
                                        />
                                        <input
                                            required
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone"
                                            className="w-2/3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.08] transition-all placeholder:text-zinc-600 font-medium"
                                        />
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`w-full py-5 rounded-2xl font-black text-white text-lg shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest mt-6 flex items-center justify-center gap-3 font-[var(--font-brand)] ${status === 'success' ? 'bg-green-600' : 'bg-gradient-to-r from-pink-600 to-purple-600'
                                    } ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Processing...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle2 size={18} />
                                        Success!
                                    </>
                                ) : (
                                    <>
                                        {type === 'teacher' ? 'Apply Now' : 'Join Now'}
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-500 text-xs text-center mt-2 flex items-center justify-center gap-1">
                                    <AlertCircle size={14} />
                                    {message}
                                </p>
                            )}

                            {status === 'success' && (
                                <p className="text-green-500 text-xs text-center mt-2">
                                    {message}
                                </p>
                            )}

                            <p className="text-[10px] text-zinc-600 text-center mt-4 uppercase tracking-tighter">
                                By clicking, you agree to our terms of service and privacy policy.
                            </p>
                        </form>

                        {/* Background Decorative Element */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default RegistrationModal;
