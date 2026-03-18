import React from "react";
import { motion } from "framer-motion";

const PromotionBanner = () => {
    const bannerText = "Admission Open! CLASSES WILL START FROM 1 MAY 2026";
    const separator = " • ";

    return (
        <div className="relative w-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 py-4 overflow-hidden z-20 border-y border-white/20 shadow-[0_0_30px_rgba(236,72,153,0.4)] banner-container">
            <div className="flex whitespace-nowrap">
                <div className="flex shrink-0 items-center animate-marquee">
                    <div className="flex items-center text-white font-extrabold uppercase tracking-[0.25em] text-lg md:text-xl">
                        {[...Array(10)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span className="px-8">{bannerText}</span>
                                <span className="text-pink-300 opacity-50">{separator}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex shrink-0 items-center animate-marquee">
                    <div className="flex items-center text-white font-extrabold uppercase tracking-[0.25em] text-lg md:text-xl">
                        {[...Array(10)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span className="px-8">{bannerText}</span>
                                <span className="text-pink-300 opacity-50">{separator}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 120s linear infinite;
                }
                .banner-container:hover .animate-marquee {
                    animation-play-state: paused;
                }
                `}
            </style>
        </div>
    );
};

export default PromotionBanner;
