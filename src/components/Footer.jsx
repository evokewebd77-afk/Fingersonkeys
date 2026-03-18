import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Linkedin, MessageCircle, X as XIcon, Phone } from 'lucide-react';
import logoImg from '../assets/gallery/Fingers on keys detailed logo.png';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t-0 pt-20 pb-10 px-4 relative z-10">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 pr-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                                <img src={logoImg} alt="Fingers on Keys Logo" className="relative w-12 h-12 object-contain rounded-xl" />
                            </div>
                            <div className="flex flex-col leading-tight gap-[2px]">
                                <h3 className="text-[18px] font-black text-white uppercase font-[var(--font-brand)] tracking-[0.18em] flex items-center">
                                    Fingers
                                    <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent px-1.5">On</span>
                                    Keys
                                </h3>
                                <span className="text-[7px] font-bold tracking-[0.42em] text-pink-400/70 uppercase whitespace-nowrap">An Online Piano Academy</span>
                            </div>
                        </div>
                        <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
                            Elite 1-on-1 piano education focused on master skills and international certifications. Learn at your own pace from the comfort of home.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Instagram, href: 'https://www.instagram.com/fingers_onkeys?igsh=c25pMTJjYzlybmQy', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
                                { Icon: Youtube, href: 'https://www.youtube.com/@Fingers-OnKeys', color: 'hover:bg-red-600' },
                                { Icon: XIcon, href: 'https://x.com/fingers_onkeys?s=21', color: 'hover:bg-zinc-800' },
                                { Icon: Facebook, href: 'https://www.facebook.com/share/187QtV47s5/?mibextid=wwXIfr', color: 'hover:bg-[#1877F2]' },
                                { Icon: MessageCircle, href: 'https://wa.me/919555827199', color: 'hover:bg-[#25D366]' },
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-transparent transition-all duration-300 ${social.color}`}>
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
                                <a href="mailto:info@fingers-onkeys.com" className="hover:text-white transition-colors font-bold tracking-wider">info@fingers-onkeys.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
                    <p>© 2015 - {new Date().getFullYear()} FINGERS ON KEYS - An Online Piano Academy. All Rights Reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-pink-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-pink-500 transition-colors">Terms of Service</Link>
                        <Link to="/complaints" className="hover:text-pink-500 transition-colors">Complaints</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
