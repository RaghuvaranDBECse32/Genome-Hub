import { motion } from 'framer-motion';
import { Users, Github, Mail, Linkedin, ExternalLink, Code, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Developers() {
  const techStack = [
    'React + TypeScript',
    'Three.js',
    'Framer Motion',
    'Tailwind CSS',
    'React Router',
    'NASA Open APIs',
  ];

  const features = [
    '3D Space Visualization',
    'Real-time Search Engine',
    'Interactive Quiz System',
    'Responsive LCARS Design',
    'NASA/ISRO Data Integration',
    'Smooth Animations',
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
              <Users className="w-8 h-8 text-[#FFE81F] mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#FFE81F] text-glow">
                Genome Hub
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              Built for NASA Space Apps Challenge 2025
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/80 border border-[#00C8FF]/30 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFE81F] to-[#00C8FF] rounded-full flex items-center justify-center text-3xl font-bold text-black">
                  GH
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-white">Raghuvaran D</h2>
                  <p className="text-[#00C8FF]">Full Stack Developer</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Passionate about space exploration and creating immersive web experiences.
                Developed Genome Hub to make space biology research accessible to everyone.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/RaghuvaranDBECse32/Genome-Hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-[#FFE81F]/20 border border-gray-700 hover:border-[#FFE81F] rounded-lg text-gray-300 hover:text-[#FFE81F] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="raghuvarandamodaran2002@gmail.com"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-[#00C8FF]/20 border border-gray-700 hover:border-[#00C8FF] rounded-lg text-gray-300 hover:text-[#00C8FF] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/raghuvaran-damodaran-57b971239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-[#00C8FF]/20 border border-gray-700 hover:border-[#00C8FF] rounded-lg text-gray-300 hover:text-[#00C8FF] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gray-900/80 border border-[#FFE81F]/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-[#FFE81F] mr-2" />
                  <h3 className="text-xl font-bold text-white">Technology Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#00C8FF]/20 border border-[#00C8FF]/30 rounded-full text-sm text-[#00C8FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/80 border border-[#00C8FF]/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Rocket className="w-6 h-6 text-[#FFE81F] mr-2" />
                  <h3 className="text-xl font-bold text-white">Key Features</h3>
                </div>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#00C8FF] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-[#FFE81F]/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#FFE81F] mb-4">About This Project</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Genome Hub is a Space Biology Knowledge Engine designed to make NASA and ISRO's
              groundbreaking research accessible to researchers, students, and space enthusiasts
              worldwide. By combining modern web technologies with space agency data, we've created
              an immersive platform that transforms complex scientific information into an engaging,
              easy-to-explore experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFE81F] mb-2">12+</div>
                <div className="text-gray-400">Research Topics</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00C8FF] mb-2">15</div>
                <div className="text-gray-400">Quiz Questions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFE81F] mb-2">100%</div>
                <div className="text-gray-400">Open Source</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/RaghuvaranDBECse32/Genome-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#FFE81F] text-black font-semibold rounded-lg hover:bg-[#00C8FF] hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.spaceappschallenge.org/2025/find-a-team/genome-hub/?tab=project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border-2 border-[#00C8FF] text-[#00C8FF] font-semibold rounded-lg hover:bg-[#00C8FF]/10 transition-all"
              >
                <span>NASA Space Apps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
