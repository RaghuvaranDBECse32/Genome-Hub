import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Dna } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space">
      <ThreeScene />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Dna className="w-24 h-24 text-[#FFE81F]" strokeWidth={1.5} />
            </motion.div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-glow lcars-gold">
            GENOME HUB
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-[#00C8FF] mb-2 font-light"
          >
            Space Biology Knowledge Engine
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Explore NASA and ISRO's groundbreaking research in space biology.
            Discover how life adapts beyond Earth's boundaries.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate('/challenge')}
            className="group relative px-8 py-4 bg-[#FFE81F] text-black font-bold text-lg rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#FFE81F]/50 transition-all"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Enter Genome Hub</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-[#00C8FF]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>

          <button
            onClick={() => navigate('/presentation')}
            className="px-8 py-4 border-2 border-[#00C8FF] text-[#00C8FF] font-semibold text-lg rounded-lg hover:bg-[#00C8FF]/10 hover:border-[#FFE81F] hover:text-[#FFE81F] transition-all"
          >
            View Presentation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {[
            {
              title: 'Search & Discover',
              description: 'Access curated space biology research from NASA GeneLab and ISRO',
            },
            {
              title: 'Interactive Learning',
              description: 'Test your knowledge with quizzes about space biology',
            },
            {
              title: '3D Visualization',
              description: 'Immersive experience with stunning space-themed graphics',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
              className="p-6 bg-black/40 backdrop-blur-sm border border-[#00C8FF]/30 rounded-lg hover:border-[#FFE81F]/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#FFE81F] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
