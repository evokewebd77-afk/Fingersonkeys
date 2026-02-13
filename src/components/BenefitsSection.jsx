import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Zap, Sparkles } from "lucide-react";

const benefits = [
    {
        title: "Cognitive Excellence",
        description: "Boost memory, focus, and brain power through piano.",
        longDesc:
            "Learning piano activates both hemispheres of the brain, strengthening neural connections and improving memory, attention span, and problem-solving ability. Over time, students develop faster information processing, stronger logical thinking, and improved academic performance.",
        icon: Brain,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
    {
        title: "Emotional Intelligence",
        description: "Express emotions and build confidence through music.",
        longDesc:
            "Piano training allows students to express emotions creatively while developing empathy and emotional balance. Regular practice reduces stress, improves self-awareness, and builds confidence through musical progress and performance.",
        icon: Heart,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Focus & Discipline",
        description: "Develop patience, discipline, and concentration.",
        longDesc:
            "Consistent piano practice teaches discipline, time management, and long-term focus. Students become more organized, responsible, and self-motivated, skills that help both in academics and personal life.",
        icon: Zap,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        title: "Aural Mastery",
        description: "Train your ear for pitch and rhythm.",
        longDesc:
            "Piano education sharpens listening skills and musical awareness. Students learn to recognize pitch, rhythm, and harmony with accuracy, improving sight-reading, improvisation, and musical expression.",
        icon: Sparkles,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
    },
];

const FlipCard = ({ benefit }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <div className="perspective">
            <motion.div
                onHoverStart={() => setIsFlipped(true)}
                onHoverEnd={() => setIsFlipped(false)}
                onClick={() => setIsFlipped(!isFlipped)}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[280px] cursor-pointer preserve-3d"
            >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 shadow-xl group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                    <div className="relative">
                        <div
                            className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}
                        >
                            <benefit.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            {benefit.title}
                        </h3>
                        <p className="text-zinc-400 text-sm">{benefit.description}</p>
                        <p className="mt-6 text-pink-400 text-sm font-semibold animate-pulse">
                            Hover to flip →
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-pink-500/40 shadow-2xl flex flex-col justify-center group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-[2.5rem] blur-lg"></div>
                    <div className="relative">
                        <h3 className="text-xl font-bold text-white mb-4">
                            {benefit.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {benefit.longDesc}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const BenefitsSection = () => {
    return (
        <section className="py-28 px-4 bg-zinc-950/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-6  font-[var(--font-brand)] tracking-tighter italic">
                    MUSIC &  IT's <span className="text-pink-500">  BENEFITS</span>
                </h2>
                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
                    Piano training shapes the mind, emotions, and musical ability for life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {benefits.map((benefit, index) => (
                        <FlipCard key={index} benefit={benefit} />
                    ))}
                </div>
            </div>

            {/* CUSTOM CSS */}
            <style>
                {`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}
            </style>
        </section>
    );
};

export default BenefitsSection;
