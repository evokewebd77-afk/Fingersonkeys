import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Music2, BookOpenCheck, X } from "lucide-react";

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
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    qualification: "",
    countryCode: "+91",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://damnart-ai-guladab.n8n-wsk.com/webhook/FINGER-ONKEYS", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`,
          service_inquiry: activeService?.title || "General",
          source: "Services Section",
          submittedAt: new Date().toISOString()
        })
      });
      alert("Enrollment submitted successfully!");
      setShowForm(false);
      setFormData({ name: "", age: "", email: "", qualification: "", countryCode: "+91", phone: "", course: "", message: "" });
    } catch (error) {
      alert("Failed to submit. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter font-[var(--font-brand)]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-[var(--font-brand)] tracking-tighter">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-4 rounded-full mx-auto"></div>
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
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-pink-500/60 shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:border-pink-500/20 hover:shadow-none transition-all duration-500 text-left overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Animated Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-0 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-pink-500 border border-zinc-800 flex items-center justify-center text-white scale-110 shadow-[0_0_20px_rgba(236,72,153,0.6)] group-hover:scale-100 group-hover:bg-zinc-900 group-hover:text-pink-500 group-hover:shadow-none transition-all duration-300">
                  <service.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-4 text-pink-500 font-semibold group-hover:gap-2 transition-all">
                  Explore →
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-100 group-hover:opacity-0 transition-opacity duration-500`}></div>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Tailwind Input Style & Hide Scrollbar */}
      <style>
        {`
          .svc-input {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 14px 16px;
            border-radius: 16px;
            color: white;
            outline: none;
            transition: all 0.2s;
            font-weight: 500;
            font-size: 14px;
            width: 100%;
            box-sizing: border-box;
          }
          .svc-input::placeholder {
            color: #52525b;
          }
          .svc-input:focus {
            border-color: rgba(236, 72, 153, 0.5);
            background: rgba(255, 255, 255, 0.08);
          }
          .svc-scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .svc-scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>

    {/* DETAIL POPUP — rendered via portal at body level */}
    {createPortal(
      <AnimatePresence>
        {activeService && !showForm && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] overflow-y-auto"
            onClick={() => setActiveService(null)}
          >
            <div className="min-h-full flex items-center justify-center p-3 sm:p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg bg-zinc-950 border border-pink-500/20 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl my-4"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-3xl sm:rounded-t-[2.5rem]"></div>

                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center z-20"
                >
                  <X size={20} />
                </button>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-5 mt-6">
                  <activeService.icon size={30} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 uppercase tracking-tighter font-[var(--font-brand)]">
                  {activeService.title}
                </h3>

                <p className="text-zinc-400 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  {activeService.description}
                </p>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-base sm:text-lg shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest font-[var(--font-brand)]"
                >
                  Enroll Now
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}

    {/* STUDENT FORM POPUP — rendered via portal at body level */}
    {createPortal(
      <AnimatePresence>
        {showForm && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] overflow-y-auto"
            onClick={() => {
              setShowForm(false);
              setActiveService(null);
            }}
          >
            <div className="min-h-full flex items-center justify-center p-3 sm:p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl bg-zinc-950 border border-pink-500/20 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-10 shadow-2xl my-4"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-3xl sm:rounded-t-[2.5rem]"></div>

                <button
                  onClick={() => {
                    setShowForm(false);
                    setActiveService(null);
                  }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center z-20"
                >
                  <X size={20} />
                </button>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 mt-6 uppercase italic tracking-tight font-[var(--font-brand)]">
                  Student <span className="text-pink-500">Portal</span>
                </h3>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="svc-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    className="svc-input"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="svc-input sm:col-span-2"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <div className="flex gap-2 sm:col-span-2">
                    <select
                      className="svc-input !w-[110px] !px-2 text-center appearance-none cursor-pointer shrink-0"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    >
                      <option value="+91" className="bg-zinc-900">🇮🇳 +91</option>
                      <option value="+1" className="bg-zinc-900">🇺🇸 +1</option>
                      <option value="+44" className="bg-zinc-900">🇬🇧 +44</option>
                      <option value="+61" className="bg-zinc-900">🇦🇺 +61</option>
                      <option value="+971" className="bg-zinc-900">🇦🇪 +971</option>
                      <option value="+65" className="bg-zinc-900">🇸🇬 +65</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Contact No."
                      className="svc-input !flex-1"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Qualification / Specialization"
                    className="svc-input sm:col-span-2"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  />

                  <select
                    className="svc-input sm:col-span-2 appearance-none cursor-pointer"
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    <option value="" className="bg-zinc-900">Select Course *</option>
                    <option value="Piano" className="bg-zinc-900">Piano</option>
                    <option value="Graded Exams" className="bg-zinc-900">Graded Exams</option>
                    <option value="Performance Training" className="bg-zinc-900">Performance Training</option>
                  </select>

                  <textarea
                    placeholder="Any Message"
                    rows="2"
                    className="svc-input sm:col-span-2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="sm:col-span-2 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-base sm:text-lg shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest font-[var(--font-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Enrollment"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}

    </>
  );
};

export default ServicesSection;
