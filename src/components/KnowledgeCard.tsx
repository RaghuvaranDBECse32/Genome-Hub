import { ExternalLink, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface KnowledgeCardProps {
  title: string;
  category: string;
  description: string;
  source: string;
  year: number;
  url: string;
  tags: string[];
  index: number;
}

export default function KnowledgeCard({
  title,
  category,
  description,
  source,
  year,
  url,
  tags,
  index,
}: KnowledgeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-[#00C8FF]/30 rounded-lg p-6 hover:border-[#FFE81F] transition-all group hover:shadow-lg hover:shadow-[#00C8FF]/20"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#FFE81F]/20 text-[#FFE81F] rounded-full border border-[#FFE81F]/30">
          {category}
        </span>
        <span className="text-xs text-gray-500">{year}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFE81F] transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#00C8FF] font-medium">{source}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-xs text-[#FFE81F] hover:text-white transition-colors"
        >
          <span>Learn More</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="flex items-center space-x-1 text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded"
          >
            <Tag className="w-3 h-3" />
            <span>{tag}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
