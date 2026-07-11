import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, PhoneCall, Droplet } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  currentPage,
  setCurrentPage,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Before & After', id: 'before-after' },
    { label: 'Blog', id: 'blog' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'glass-dark py-4 shadow-2xl'
            : 'glass-light py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-dark-navy group-hover:scale-110 transition-all duration-300 shadow-md">
            <Droplet className="w-6 h-6 fill-current animate-pulse-slow" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-dark-navy rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-dark-navy dark:text-white flex items-center gap-1">
            Flow<span className="text-primary glow-text-yellow">Fix</span>
            <span className="text-xs uppercase font-semibold bg-primary/20 dark:bg-primary/10 text-primary px-1.5 py-0.5 rounded-md ml-1">
              Plumbing
            </span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-semibold tracking-wide transition-colors relative py-1 cursor-pointer ${
                currentPage === item.id
                  ? 'text-primary'
                  : 'text-dark-navy/70 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full shadow-[0_0_8px_#F5C518]"></span>
              )}
            </button>
          ))}
          
          {/* Agent Dashboard Toggle Button */}
          <button
            onClick={() => handleNavClick('agent-center')}
            className={`text-sm font-semibold tracking-wide px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
              currentPage === 'agent-center'
                ? 'bg-primary text-dark-navy border-primary shadow-lg shadow-primary/20'
                : 'text-dark-navy/70 dark:text-gray-300 border-dark-navy/20 dark:border-gray-700 hover:border-primary hover:text-primary'
            }`}
          >
            Agent Center
          </button>
        </div>

        {/* Right CTA / Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-dark-navy/10 dark:border-gray-800 hover:bg-dark-navy/5 dark:hover:bg-white/5 transition-all text-dark-navy dark:text-gray-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Emergency CTA */}
          <a
            href="tel:+18005553569"
            className="flex items-center gap-2 bg-primary text-dark-navy font-bold py-2.5 px-5 rounded-2xl shadow-[0_4px_20px_rgba(245,197,24,0.3)] hover:scale-105 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 fill-current animate-bounce" />
            <span>24/7 Dispatch</span>
          </a>
        </div>

        {/* Mobile Toggle / Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-dark-navy/10 dark:border-gray-800 hover:bg-dark-navy/5 dark:hover:bg-white/5 transition-all text-dark-navy dark:text-gray-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-dark-navy/5 dark:bg-white/5 text-dark-navy dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-blue shadow-2xl border-t border-dark-navy/10 dark:border-white/10 py-6 px-6 flex flex-col gap-4 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-semibold py-2 transition-all cursor-pointer ${
                currentPage === item.id
                  ? 'text-primary pl-2 border-l-2 border-primary'
                  : 'text-dark-navy/80 dark:text-gray-300 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('agent-center')}
            className={`text-left text-base font-semibold py-2 transition-all cursor-pointer ${
              currentPage === 'agent-center' ? 'text-primary pl-2 border-l-2 border-primary' : 'text-dark-navy/80 dark:text-gray-300 hover:text-primary'
            }`}
          >
            Agent Center
          </button>
          
          <a
            href="tel:+18005553569"
            className="flex items-center justify-center gap-2 bg-primary text-dark-navy font-bold py-3 rounded-2xl mt-4 shadow-lg text-center"
          >
            <PhoneCall className="w-5 h-5 fill-current animate-bounce" />
            <span>Call Now 24/7</span>
          </a>
        </div>
      )}
    </nav>
  );
}
