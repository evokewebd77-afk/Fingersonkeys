import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Music2, BookOpenCheck } from "lucide-react";

const services = [
  {
    title: "Graded Examinations",
    description:
      "Comprehensive preparation for Trinity, ABRSM, RCM, LCM, and RSL exams with expert mentorship.",
    icon: GraduationCap,
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Performance & Stage",
    description:
      "Elite training for stage performances and national & international competitions.",
    icon: Award,
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Piano & Aural Mastery",
    description:
      "Develop finger technique, strength, and expressive touch with expert-led sessions.",
    icon: Music2,
    color: "from-indigo-500/20 to-pink-500/20",
  },
  {
    title: "Digital Music Certification",
    description:
      "Earn global certifications from home through digital music exams.",
    icon: BookOpenCheck,
    color: "from-pink-500/20 to-indigo-500/20",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="services" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)] tracking-tighter italic">
            Our <span className="text-pink-500 font-[var(--font-brand)] tracking-tighter italic">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            From beginner to certified musician — we guide every step.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveService(service)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 text-left overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Animated Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300">
                  <service.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-pink-500 font-semibold group-hover:gap-4 transition-all">
                  Explore →
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.button>
          ))}
        </div>

        {/* DETAIL POPUP */}
        {activeService && !showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-zinc-900 rounded-3xl p-8 max-w-lg w-full relative border border-pink-500/40 shadow-2xl"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-pink-500"
              >
                ✕
              </button>

              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4">
                <activeService.icon size={30} />
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                {activeService.title}
              </h3>

              <p className="text-zinc-400 mb-6">
                {activeService.description}
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="w-full py-3 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
              >
                Enroll Now
              </button>
            </motion.div>
          </div>
        )}

        {/* STUDENT FORM POPUP */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-zinc-900 rounded-3xl p-8 max-w-xl w-full relative border border-pink-500/40 shadow-2xl"
            >
              <button
                onClick={() => {
                  setShowForm(false);
                  setActiveService(null);
                }}
                className="absolute top-4 right-4 text-white text-xl hover:text-pink-500"
              >
                ✕
              </button>

              <h3 className="text-2xl font-black text-white mb-6">
                Student Enrollment Form
              </h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Student Name" className="input" />
                <input type="number" placeholder="Age" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <input type="tel" placeholder="Phone" className="input" />

                <select className="input md:col-span-2">
                  <option>Select Course</option>
                  <option>Piano</option>
                  <option>Graded Exams</option>
                  <option>Performance Training</option>
                </select>

                <textarea
                  placeholder="Any Message"
                  rows="3"
                  className="input md:col-span-2"
                ></textarea>

                <button
                  type="submit"
                  className="md:col-span-2 py-3 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
                >
                  Submit Enrollment
                </button>
              </form>
            </motion.div>
          </div>
        )}

      </div>

      {/* Tailwind Input Style */}
      <style>
        {`
          .input {
            background: #18181b;
            border: 1px solid #3f3f46;
            padding: 12px;
            border-radius: 10px;
            color: white;
            outline: none;
          }
          .input:focus {
            border-color: #ec4899;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesSection;
