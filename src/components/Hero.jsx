import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Music2, Mic2, Star, Circle, Plus } from 'lucide-react';
import Background from './Background';
import RegistrationModal from './RegistrationModal';
const FloatingElement = ({ children, delay = 0, duration = 10, x = "0%", y = "0%", scale = 1 }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none z-0"
        style={{ left: x, top: y, scale }}
    >
        {children}
    </motion.div>
);

const Hero = () => {
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    const [regType, setRegType] = useState('student');

    const openModal = (type) => {
        setRegType(type);
        setIsRegModalOpen(true);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
            <Background />

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElement x="10%" y="20%" delay={0} duration={12} scale={1.5}>
                    <Music className="text-pink-500/20" size={48} />
                </FloatingElement>
                <FloatingElement x="85%" y="15%" delay={2} duration={15} scale={1.2}>
                    <Music2 className="text-purple-500/20" size={56} />
                </FloatingElement>
                <FloatingElement x="15%" y="75%" delay={5} duration={18} scale={0.8}>
                    <Mic2 className="text-indigo-500/20" size={40} />
                </FloatingElement>
                <FloatingElement x="80%" y="80%" delay={3} duration={14} scale={1.3}>
                    <Star className="text-pink-400/10" size={32} />
                </FloatingElement>
                <FloatingElement x="50%" y="10%" delay={1} duration={20} scale={1}>
                    <Circle className="text-white/5" size={100} strokeWidth={1} />
                </FloatingElement>
            </div>

            <div className="max-w-7xl mx-auto z-10 perspective-[1000px] relative">
                {/* Subtle Glow Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/5 blur-[120px] rounded-full -z-10"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT — Existing Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, y: 50 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block mb-8 px-6 py-2 rounded-full border border-pink-500/30 bg-zinc-900/40 text-pink-300 text-xs md:text-sm font-bold tracking-[0.3em] shadow-[0_0_30px_rgba(236,72,153,0.2)] backdrop-blur-xl uppercase"
                        >
                            ⚡ Evolution of Piano Mastery
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]   ">
                            MASTER<br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x bg-[length:200%_auto] py-2 font-[var(--font-brand)]">
                                THE KEYS
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500/50 via-transparent to-indigo-500/50 blur-sm"></div>
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-zinc-300 mb-6 max-w-3xl leading-relaxed font-light">
                            Join the world's most immersive music learning platform. <span className="text-pink-400 font-semibold underline decoration-pink-500/30 underline-offset-4"><br></br>Where Beginners Become Confident Pianists.</span>
                        </p>
                        <p className="text-sm md:text-lg text-zinc-400 mb-12 max-w-2xl font-medium italic opacity-80">
                            Don't have a piano? No worries, begin without an instrument and avail free consultation on purchasing the correct piano once you are sure!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 md:gap-8">
                            <motion.button
                                onClick={() => openModal('enquiry')}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236,72,153,0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-black text-white text-base md:text-lg shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all border border-white/20 relative overflow-hidden group uppercase tracking-widest font-[var(--font-brand)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Piano Journey
                                </span>
                                {/* Shine Sweep Effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.button>

                            <motion.button
                                onClick={() => openModal('teacher')}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 md:px-8 py-4 md:py-5 bg-black/20 border border-zinc-700/50 rounded-full font-black text-base md:text-lg text-white hover:border-pink-500/50 transition-all backdrop-blur-md flex items-center gap-3 relative group overflow-hidden uppercase tracking-widest font-[var(--font-brand)]"
                            >
                                <span className="relative z-10">Join as Piano Faculty</span>
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center relative z-10 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <Plus size={20} strokeWidth={3} />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* RIGHT — Inline Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block max-w-md ml-auto"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-pink-500/15 via-purple-500/5 to-transparent blur-sm" />
                            <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-[0_0_40px_rgba(236,72,153,0.06)]">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-[2rem]" />

                                <h3 className="text-white font-black text-lg uppercase tracking-tight font-[var(--font-brand)] mb-1">
                                    Book a <span className="text-pink-400">FREE</span> 45 min
                                </h3>
                                <p className="text-zinc-400 text-sm mb-6">Parent Consultation & 30 min Demo Class</p>

                                <form
                                    className="space-y-3"
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        const fd = new FormData(e.target);
                                        const data = Object.fromEntries(fd.entries());
                                        try {
                                            await fetch('https://damnart-ai-guladab.n8n-wsk.com/webhook/FINGER-ONKEYS(hero)', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ ...data, phone: `${data.countryCode} ${data.phone}`, type: 'student', submittedAt: new Date().toISOString() }),
                                            });
                                            e.target.reset();
                                            alert('Booking submitted! We will contact you shortly.');
                                        } catch {
                                            alert('Something went wrong. Please try again.');
                                        }
                                    }}
                                >
                                    <div>
                                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">Full Name</label>
                                        <input name="fullName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-zinc-600" />
                                    </div>
                                    <div>
                                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">Email</label>
                                        <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-zinc-600" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">Phone</label>
                                            <div className="flex gap-2">
                                                <select name="countryCode" className="w-24 bg-white/5 border border-white/10 rounded-xl px-1 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all appearance-none text-center shrinks-0">
                                                    <option value="+91" className="text-black">🇮🇳 +91</option>
                                                    <option value="+1" className="text-black">🇺🇸 +1</option>
                                                    <option value="+44" className="text-black">🇬🇧 +44</option>
                                                    <option value="+61" className="text-black">🇦🇺 +61</option>
                                                    <option value="+971" className="text-black">🇦🇪 +971</option>
                                                    <option value="+65" className="text-black">🇸🇬 +65</option>
                                                    <option value="+60" className="text-black">🇲🇾 +60</option>
                                                    <option value="+64" className="text-black">🇳🇿 +64</option>
                                                    <option value="+49" className="text-black">🇩🇪 +49</option>
                                                    <option value="+33" className="text-black">🇫🇷 +33</option>
                                                    <option value="+81" className="text-black">🇯🇵 +81</option>
                                                    <option value="+31" className="text-black">🇳🇱 +31</option>
                                                    <option value="+41" className="text-black">🇨🇭 +41</option>
                                                    <option value="+46" className="text-black">🇸🇪 +46</option>
                                                    <option value="+34" className="text-black">🇪🇸 +34</option>
                                                    <option value="+39" className="text-black">🇮🇹 +39</option>
                                                    <option value="+966" className="text-black">🇸🇦 +966</option>
                                                    <option value="+27" className="text-black">🇿🇦 +27</option>
                                                </select>
                                                <input name="phone" required type="tel" className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-zinc-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">Student's Age</label>
                                            <input name="age" required type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-zinc-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">Your Time Zone</label>
                                        <input name="timezone" type="text" placeholder="CST/EST/PST/IST/AEST/etc." className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-zinc-600" />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all mt-2 font-[var(--font-brand)]"
                                    >
                                        Book Session
                                    </motion.button>
                                </form>
                                <p className="text-zinc-600 text-[10px] text-center mt-4">
                                    Your information is safe with us. We will <span className="font-bold text-zinc-500">never share it</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
            >
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold">Dive In</div>
                <div className="w-1 h-12 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/3 bg-pink-500"
                    />
                </div>
            </motion.div>

            {/* Registration Modal */}
            <RegistrationModal
                isOpen={isRegModalOpen}
                onClose={() => setIsRegModalOpen(false)}
                type={regType}
            />
        </section>
    );
};

export default Hero;

