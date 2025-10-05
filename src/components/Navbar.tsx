import { Link, useLocation } from 'react-router-dom';
import { Dna, FlaskConical, BrainCircuit, Users, Presentation } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/challenge', icon: FlaskConical, label: 'Challenge' },
    { path: '/quiz', icon: BrainCircuit, label: 'Quiz' },
    { path: '/developers', icon: Users, label: 'Team' },
    { path: '/presentation', icon: Presentation, label: 'Presentation' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#FFE81F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Dna className="w-8 h-8 text-[#FFE81F] group-hover:text-[#00C8FF] transition-colors" />
            <span className="text-xl font-bold text-[#FFE81F] group-hover:text-[#00C8FF] transition-colors">
              GENOME HUB
            </span>
          </Link>

          <div className="flex space-x-1">
            {links.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#FFE81F] text-black font-semibold'
                      : 'text-[#00C8FF] hover:bg-[#00C8FF]/10 hover:text-[#FFE81F]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
