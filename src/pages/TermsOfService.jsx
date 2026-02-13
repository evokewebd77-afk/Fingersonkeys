import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const TermsOfService = () => {
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
                                <FileText size={24} className="text-pink-500" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black">Terms of Service</h1>
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
                    className="space-y-12"
                >
                    {/* Introduction */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            By accessing or using Fingers on Keys' online music education platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    {/* Services Description */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">Services Provided</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Fingers on Keys offers:
                        </p>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Live 1-on-1 online piano lessons with qualified instructors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Preparation for internationally recognized music examinations (Trinity, ABRSM, RCM, LCM, RSL)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Performance training and stage preparation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Digital music certification programs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Practice resources and learning materials</span>
                            </li>
                        </ul>
                    </section>

                    {/* Student Obligations */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                                <CheckCircle size={20} className="text-pink-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Student Responsibilities</h2>
                        </div>

                        <ul className="space-y-3 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>Attend scheduled lessons on time or provide at least 24 hours notice for cancellations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>Maintain a stable internet connection and appropriate device for online lessons</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>Practice regularly between lessons as recommended by your instructor</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>Provide accurate information during registration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>Treat instructors and staff with respect</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>For students under 18, parental supervision during online lessons is recommended</span>
                            </li>
                        </ul>
                    </section>

                    {/* Payment Terms */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-pink-400 mb-3">Fees and Billing</h3>
                                <ul className="space-y-2 text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>Lesson fees are based on the selected program and grade level</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>Minimum commitment: 4 classes per month (45-minute sessions)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>Payment is due at the beginning of each billing cycle</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>Accepted payment methods: bank transfer, UPI, credit/debit cards</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-pink-400 mb-3">Refund Policy</h3>
                                <ul className="space-y-2 text-zinc-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>Full refund available if cancellation is made within 48 hours of the first lesson</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>After the first week, monthly fees are non-refundable</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-pink-500 mt-1">•</span>
                                        <span>Missed lessons without 24-hour notice are not refundable or reschedulable</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Cancellation & Rescheduling */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">Cancellation & Rescheduling</h2>
                        <ul className="space-y-3 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Students must provide at least 24 hours notice to cancel or reschedule a lesson</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Lessons cancelled with proper notice can be rescheduled within the same month</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Instructors reserve the right to cancel lessons due to emergencies with full credit provided</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>To discontinue lessons, provide 30 days written notice</span>
                            </li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            All content, including lesson materials, recordings, music sheets, and educational resources provided by Fingers on Keys, are protected by copyright and intellectual property laws.
                        </p>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Lesson recordings are for personal use only and may not be shared publicly</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Course materials may not be reproduced or distributed without permission</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Students retain copyright to their original musical compositions</span>
                            </li>
                        </ul>
                    </section>

                    {/* Prohibited Conduct */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                <XCircle size={20} className="text-red-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Prohibited Conduct</h2>
                        </div>

                        <p className="text-zinc-300 mb-4">Users may not:</p>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Share login credentials with others</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Record or distribute lesson content without permission</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Engage in harassment or inappropriate behavior</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Use the platform for any illegal purposes</span>
                            </li>
                        </ul>
                    </section>

                    {/* Liability Limitation */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                <AlertCircle size={20} className="text-yellow-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
                        </div>

                        <p className="text-zinc-300 leading-relaxed">
                            Fingers on Keys provides music education services to the best of our ability. However, we cannot guarantee specific results, examination outcomes, or career success. Our liability is limited to the fees paid for services during the current billing period.
                        </p>
                    </section>

                    {/* Examination Disclaimer */}
                    <section className="p-8 rounded-2xl bg-pink-500/5 border border-pink-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Examination Results Disclaimer</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            While we prepare students for internationally recognized music examinations, Fingers on Keys is not affiliated with examination boards (Trinity, ABRSM, RCM, LCM, RSL). Examination registration, fees, and results are the responsibility of the examining board. We cannot guarantee examination pass rates or specific grades.
                        </p>
                    </section>

                    {/* Termination */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            We reserve the right to suspend or terminate access to our services for:
                        </p>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Violation of these Terms of Service</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Non-payment of fees</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Inappropriate or abusive behavior</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>Fraudulent activity</span>
                            </li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <section className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            For questions regarding these Terms of Service, please contact us:
                        </p>
                        <div className="space-y-2 text-zinc-300">
                            <p><strong className="text-pink-400">Email:</strong> hello@fingersonkeys.com</p>
                            <p><strong className="text-pink-400">Phone:</strong> +91 95558 27199</p>
                            <p><strong className="text-pink-400">WhatsApp:</strong> +91 95558 27199</p>
                        </div>
                    </section>

                    {/* Updates Notice */}
                    <section className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800 text-center">
                        <p className="text-zinc-400 text-sm">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page. Continued use of our services after changes constitutes acceptance of the modified terms.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
