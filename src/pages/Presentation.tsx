import { motion } from 'framer-motion';
import { Presentation as PresentationIcon, Download, ExternalLink, FileText, Video } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Presentation() {
  const slides = [
    { title: 'Title & Introduction', description: 'Genome Hub: Space Biology Knowledge Engine' },
    { title: 'Inspiration', description: 'Why bioscience in space matters for humanity' },
    { title: 'Problem Statement', description: 'Challenges in accessing NASA bioscience data' },
    { title: 'Objectives', description: 'Creating an accessible, interactive platform' },
    { title: 'Architecture', description: 'Frontend, backend, and data integration' },
    { title: 'Design & Theme', description: 'Star Trek LCARS-inspired UI' },
    { title: 'Key Features', description: 'Search, 3D visuals, quiz, and more' },
    { title: 'Technology Stack', description: 'React, Three.js, Framer Motion' },
    { title: 'Outcomes', description: 'Impact on research and education' },
    { title: 'Future Vision', description: 'AI summarization and mobile expansion' },
  ];

  return (
    <div className="min-h-screen bg-space flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <PresentationIcon className="w-8 h-8 text-[#FFE81F] mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#FFE81F] text-glow">
                Project Presentation
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              Comprehensive overview of Genome Hub's vision, architecture, and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/80 border border-[#00C8FF]/30 rounded-xl p-8"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6 border border-[#FFE81F]/20">
                <div className="text-center">
                  <Video className="w-16 h-16 text-[#FFE81F] mx-auto mb-4" />
                  <p className="text-gray-400">Presentation Video</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Embed your presentation video or slides here
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#FFE81F] text-black font-semibold rounded-lg hover:bg-[#00C8FF] hover:text-white transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Presentation (PPTX)</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[#00C8FF] text-[#00C8FF] font-semibold rounded-lg hover:bg-[#00C8FF]/10 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  <span>Download PDF Version</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/80 border border-[#FFE81F]/30 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-[#FFE81F] mb-6">Presentation Outline</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-[#00C8FF]/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00C8FF]/20 border border-[#00C8FF]/30 rounded-full flex items-center justify-center text-[#00C8FF] font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{slide.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gray-900/80 border border-[#00C8FF]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#FFE81F] mb-4">Data Sources</h3>
              <ul className="space-y-3">
                {[
                  { name: 'NASA GeneLab', url: 'https://genelab.nasa.gov/' },
                  { name: 'NASA OSDR', url: 'https://osdr.nasa.gov/' },
                  { name: 'ISRO Space Biology', url: 'https://www.isro.gov.in/' },
                  { name: 'Space Apps Challenge', url: 'https://www.spaceappschallenge.org/' },
                ].map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-[#00C8FF] hover:text-[#FFE81F] transition-colors group"
                    >
                      <span className="text-sm">{source.name}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/80 border border-[#FFE81F]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#FFE81F] mb-4">Project Goals</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00C8FF] mr-2">▸</span>
                  <span>Make space biology research accessible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C8FF] mr-2">▸</span>
                  <span>Provide interactive learning tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C8FF] mr-2">▸</span>
                  <span>Integrate NASA and ISRO datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C8FF] mr-2">▸</span>
                  <span>Create immersive user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00C8FF] mr-2">▸</span>
                  <span>Support educational outreach</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/80 border border-[#00C8FF]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#FFE81F] mb-4">Impact Areas</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-[#00C8FF]">Research</div>
                  <p className="text-xs text-gray-400">Accelerate discovery</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00C8FF]">Education</div>
                  <p className="text-xs text-gray-400">Inspire students</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00C8FF]">Public Engagement</div>
                  <p className="text-xs text-gray-400">Increase awareness</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
