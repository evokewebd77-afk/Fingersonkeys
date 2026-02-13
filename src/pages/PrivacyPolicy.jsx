import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
                                <Shield size={24} className="text-pink-500" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black">Privacy Policy</h1>
                        </div>
                        <p className="text-zinc-400 text-lg">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-invert max-w-none"
                >
                    <div className="space-y-12">
                        {/* Introduction */}
                        <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                            <p className="text-zinc-300 leading-relaxed">
                                Fingers on Keys ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online music education platform and services.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                                    <UserCheck size={20} className="text-pink-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-pink-400 mb-3">Personal Information</h3>
                                    <ul className="space-y-2 text-zinc-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Name, email address, phone number</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Age and date of birth (for students)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Parent/guardian information (for minors)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Payment information (processed securely through third-party providers)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-pink-400 mb-3">Learning Information</h3>
                                    <ul className="space-y-2 text-zinc-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Lesson recordings and session notes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Progress reports and assessment results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Practice logs and performance metrics</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-pink-400 mb-3">Technical Information</h3>
                                    <ul className="space-y-2 text-zinc-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>IP address, browser type, and device information</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Usage data and platform analytics</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-500 mt-1">•</span>
                                            <span>Cookies and similar tracking technologies</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                                    <Eye size={20} className="text-pink-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                            </div>

                            <ul className="space-y-3 text-zinc-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To provide and maintain our music education services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To process payments and manage subscriptions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To personalize your learning experience</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To communicate with you about lessons, schedules, and updates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To improve our platform and develop new features</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To prepare students for international music examinations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">✓</span>
                                    <span>To send promotional communications (with your consent)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                                    <Lock size={20} className="text-pink-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Data Security</h2>
                            </div>

                            <p className="text-zinc-300 leading-relaxed mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="space-y-2 text-zinc-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Encrypted data transmission (SSL/TLS)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Secure servers and regular security audits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Limited access to personal information</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Regular staff training on data protection</span>
                                </li>
                            </ul>
                        </section>

                        {/* Your Rights */}
                        <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                            <p className="text-zinc-300 leading-relaxed mb-4">You have the right to:</p>
                            <ul className="space-y-2 text-zinc-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Access and receive a copy of your personal data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Request correction of inaccurate data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Request deletion of your personal data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Withdraw consent for data processing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-500 mt-1">•</span>
                                    <span>Object to processing of your data</span>
                                </li>
                            </ul>
                        </section>

                        {/* Children's Privacy */}
                        <section className="p-8 rounded-2xl bg-pink-500/5 border border-pink-500/20">
                            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                            <p className="text-zinc-300 leading-relaxed">
                                We take the privacy of children seriously. For students under 18, we require parental consent before collecting personal information. Parents have the right to review, modify, or delete their child's information at any time.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-zinc-300 leading-relaxed mb-4">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                            </p>
                            <div className="space-y-2 text-zinc-300">
                                <p><strong className="text-pink-400">Email:</strong> hello@fingersonkeys.com</p>
                                <p><strong className="text-pink-400">Phone:</strong> +91 95558 27199</p>
                                <p><strong className="text-pink-400">WhatsApp:</strong> +91 95558 27199</p>
                            </div>
                        </section>

                        {/* Updates */}
                        <section className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800 text-center">
                            <p className="text-zinc-400 text-sm">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
