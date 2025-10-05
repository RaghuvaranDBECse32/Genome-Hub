import { useState, useMemo } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import KnowledgeCard from '../components/KnowledgeCard';
import spaceBiologyData from '../data/spaceBiologyData.json';

export default function Challenge() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(spaceBiologyData.map((item) => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredData = useMemo(() => {
    return spaceBiologyData.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-space flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#FFE81F] mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#FFE81F] text-glow">
                Space Biology Research
              </h1>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore cutting-edge research from NASA GeneLab, ISRO, and international space agencies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search research topics, keywords, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-[#00C8FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFE81F] focus:ring-2 focus:ring-[#FFE81F]/20 transition-all"
              />
            </div>

            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-[#00C8FF] flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-[#FFE81F] text-black'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-[#00C8FF]/20 hover:text-[#00C8FF] border border-gray-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredData.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">
                No research found. Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-6"
              >
                <p className="text-gray-400">
                  Showing <span className="text-[#FFE81F] font-semibold">{filteredData.length}</span> research{' '}
                  {filteredData.length === 1 ? 'item' : 'items'}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((item, index) => (
                  <KnowledgeCard key={item.id} {...item} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
