import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Music, Linkedin, MessageCircle, X as XIcon, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 pt-20 pb-10 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 pr-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center text-white">
                                <Music size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight uppercase font-[var(--font-brand)] tracking-[0.2em] text-xl">
                                Fingers On <span className="text-pink-600">Keys</span>
                            </h3>
                        </div>
                        <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
                            Elite 1-on-1 piano education focused on master skills and international certifications. Learn at your own pace from the comfort of home.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                // { Icon: Instagram, href: '#' },
                                // { Icon: MessageCircle, href: 'https://wa.me/919555827199' },
                                // { Icon: Music, href: '#' },
                                // { Icon: Youtube, href: '#' },
                                { Icon: XIcon, href: '#' },
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b-2 border-pink-500 inline-block pb-1 uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li><a href="#about" className="hover:text-pink-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-pink-500 transition-colors"></span> About Us</a></li>
                            <li><a href="#services" className="hover:text-pink-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-pink-500 transition-colors"></span> Services</a></li>
                            <li><a href="#pricing" className="hover:text-pink-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-pink-500 transition-colors"></span> Pricing</a></li>
                            <li><a href="#faq" className="hover:text-pink-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-pink-500 transition-colors"></span> FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b-2 border-pink-500 inline-block pb-1 uppercase tracking-widest text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-zinc-400 mb-8">
                            <li className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <a href="tel:+919555827199" className="hover:text-white transition-colors font-bold tracking-wider">+91 95558 27199</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <MessageCircle size={18} />
                                </div>
                                <a href="https://wa.me/919555827199" className="hover:text-white transition-colors font-bold tracking-wider">+91 95558 27199</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 border border-pink-500/20 group-hover:bg-white group-hover:text-black transition-all">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:jaspreetnihongo@gmail.com" className="hover:text-white transition-colors font-bold tracking-wider">jaspreetnihongo@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} FINGERS ON KEYS. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-pink-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-pink-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
