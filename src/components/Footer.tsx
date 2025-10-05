import { Rocket, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-[#FFE81F]/30 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-[#FFE81F]" />
            <span className="text-sm text-gray-400">
              Genome Hub © 2024 | NASA Space Apps Challenge
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.nasa.gov/genelab/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00C8FF] hover:text-[#FFE81F] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">NASA GeneLab</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00C8FF] hover:text-[#FFE81F] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
