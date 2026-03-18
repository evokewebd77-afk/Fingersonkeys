import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Globe, GraduationCap, X, ExternalLink } from 'lucide-react';

const ExamRecognition = () => {
  const [activeCert, setActiveCert] = useState(null);

  const certs = [
    {
      name: 'TRINITY',
      sub: 'Trinity College London',
      icon: Award,
      desc:
        'Trinity College London is an internationally respected examination board offering graded and diploma qualifications in music. It focuses on performance, technical work, and musical understanding, helping students build confidence and real-world musical skills.',
      url: 'https://www.trinitycollege.com/qualifications/music/grade-exams/piano/'
    },
    {
      name: 'ABRSM',
      sub: 'Associated Board of the Royal Schools of Music',
      icon: ShieldCheck,
      desc:
        'ABRSM is one of the world’s leading music examination boards, trusted in over 90 countries. Its structured syllabus strengthens technique, sight-reading, and aural skills while providing globally recognised certification.',
      url: 'https://www.abrsm.org/en-in/instruments/piano'
    },
    {
      name: 'LCM',
      sub: 'London College of Music',
      icon: GraduationCap,
      desc:
        'London College of Music offers flexible graded and diploma examinations with a strong focus on performance and musical expression. It supports students in developing technical excellence alongside artistic interpretation.',
      url: 'https://lcme.uwl.ac.uk/our-exams/piano/piano/'
    },
    {
      name: 'RSL',
      sub: 'Rockschool (RSL Awards)',
      icon: Globe,
      desc:
        'RSL Awards specialise in contemporary music qualifications, covering modern styles such as rock, pop, jazz, and music production. Their exams prepare students for professional pathways in today’s music industry.',
      url: 'https://www.rslawards.com/learn-piano//'
    }
  ];

  return (
    <section className="bg-zinc-950 py-16 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Globe size={14} /> Global Standards
          </div>
          <h2 className="text-6xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter font-[var(--font-brand)]">
            International <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Recognition</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-6 rounded-full mx-auto"></div>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Our curriculum prepares students for globally recognised music examinations and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              onClick={() => setActiveCert(cert)}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 0.98, border: "1px solid rgba(39, 39, 42, 0.5)", backgroundColor: "rgba(9, 9, 11, 0.4)", boxShadow: "none" }}
              className="cursor-pointer p-8 rounded-[2rem] bg-pink-500/5 border border-pink-500/50 transition-all group backdrop-blur-xl relative overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.1)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:text-zinc-500 group-hover:bg-zinc-800 transition-all border border-pink-500/20 group-hover:border-zinc-700/50 mb-6 mx-auto">
                <cert.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-wider">
                {cert.name}
              </h3>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold">
                {cert.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {/* MODAL */}
        {/* MODAL */}
        {createPortal(
          <AnimatePresence>
            {activeCert && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCert(null)}   // backdrop click = close
              >
                <motion.div
                  initial={{ scale: 0.85, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.85, y: 40 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onClick={(e) => e.stopPropagation()} // modal pe click = NOT close
                  className="relative max-w-xl w-full rounded-[2.5rem] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 shadow-2xl overflow-hidden"
                >
                  {/* Close */}
                  <button
                    onClick={() => setActiveCert(null)}
                    className="absolute top-6 right-6 text-zinc-400 hover:text-white z-20"
                  >
                    <X size={26} />
                  </button>

                  <div className="p-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-pink-500/10 text-pink-500 flex items-center justify-center border border-pink-500/20 shadow-inner">
                      <activeCert.icon size={40} />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2">
                      {activeCert.name}
                    </h3>

                    <p className="text-pink-400 mb-6 text-sm uppercase tracking-[0.3em]">
                      {activeCert.sub}
                    </p>

                    <p className="text-zinc-300 leading-relaxed mb-8">
                      {activeCert.desc}
                    </p>

                    <a
                      href={activeCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-pink-500/20"
                    >
                      Visit Official Website <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default ExamRecognition;
