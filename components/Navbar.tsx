import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleNavClick = (link: string) => {
    setMobileMenuOpen(false);
    if (link.startsWith('#')) {
      if (!isHome) {
        window.location.href = '/' + link;
      } else {
        const element = document.querySelector(link);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      } print:hidden`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-2 bg-white/5 border border-white/10 rounded-lg group-hover:border-primary/50 transition-colors duration-300">
              <Code2 className="text-primary" size={24} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">EBAD FURQAN</span>
            <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-0.5">Software Engineer</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <React.Fragment key={item.label}>
              {item.link.startsWith('#') ? (
                <button
                  onClick={() => handleNavClick(item.link)}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ) : (
                <Link
                  to={item.link}
                  className="ml-4 px-5 py-2 text-sm font-medium text-black bg-primary rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-gray-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {items.map((item) => (
             <React.Fragment key={item.label}>
             {item.link.startsWith('#') ? (
               <button
                 onClick={() => handleNavClick(item.link)}
                 className="text-left text-lg font-medium text-gray-300 hover:text-primary py-3 border-b border-gray-800/50"
               >
                 {item.label}
               </button>
             ) : (
               <Link
                 to={item.link}
                 onClick={() => setMobileMenuOpen(false)}
                 className="text-left text-lg font-bold text-primary py-3"
               >
                 {item.label} <span className="text-gray-500 font-normal ml-2">→</span>
               </Link>
             )}
           </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;