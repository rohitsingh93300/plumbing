import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BeforeAfter from './components/BeforeAfter';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import AgentDashboard from './components/AgentDashboard';
import Testimonials from './components/Testimonials';


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  // Sync dark mode class with HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#071B34';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  // Cursor glow tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = document.getElementById('app-container');
      if (el) {
        el.style.setProperty('--x', `${e.clientX}px`);
        el.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+18005553569';
  };

  return (
    <div
      id="app-container"
      className="relative min-h-screen cursor-glow bg-white dark:bg-dark-navy text-dark-navy dark:text-gray-100 transition-colors duration-500"
    >
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Pages Switch Router */}
      <div className="pt-20">
        {currentPage === 'home' && (
          <div>
            <Hero onBookNow={() => setCurrentPage('contact')} onEmergencyCall={handleEmergencyCall} />
            
            {/* Quick Services Preview */}
            <section className="py-20 bg-gray-50 dark:bg-dark-blue/30 border-t border-b border-dark-navy/5 dark:border-white/5">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Service Preview</h2>
                <p className="text-3xl font-bold text-dark-navy dark:text-white mb-12">Licensed Plumbing Repairs Built to Last</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                  <div className="bg-white dark:bg-dark-card border border-dark-navy/5 dark:border-white/10 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-extrabold text-md text-dark-navy dark:text-white mb-2">Leak Detection & Repair</h3>
                    <p className="text-xs text-dark-navy/70 dark:text-gray-400">Electronic slab searches, pinhole repair, and anti-corrosive copper supply piping.</p>
                  </div>
                  <div className="bg-white dark:bg-dark-card border border-dark-navy/5 dark:border-white/10 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-extrabold text-md text-dark-navy dark:text-white mb-2">Hydro-Jet Drain Clean</h3>
                    <p className="text-xs text-dark-navy/70 dark:text-gray-400">CCTV fiber inspections and heavy grease extraction slicing root intrusions cleanly.</p>
                  </div>
                  <div className="bg-white dark:bg-dark-card border border-dark-navy/5 dark:border-white/10 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-extrabold text-md text-dark-navy dark:text-white mb-2">Water Heaters</h3>
                    <p className="text-xs text-dark-navy/70 dark:text-gray-400">Calibrating gas safety valves, heating element maintenance, and tankless swaps.</p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="bg-primary text-dark-navy font-bold py-3 px-8 rounded-xl text-xs hover:scale-105 transition-all shadow-md shadow-primary/20 cursor-pointer"
                >
                  Explore All 10 Services
                </button>
              </div>
            </section>

            {/* Before & After Comparison Slider */}
            <BeforeAfter />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Accordion */}
            <FAQ />

            {/* Emergency Service Banner */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-6 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Experiencing a Piping Emergency?</h2>
                <p className="text-sm text-white/90 mb-8 max-w-xl mx-auto">
                  Our Emergency Detection Agent is active. Licensed plumbers are dispatched within 15 minutes for burst lines, gas leaks, and primary sewer backups.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:+18005553569"
                    className="bg-white text-red-700 font-extrabold px-8 py-3.5 rounded-xl text-xs shadow-lg hover:scale-105 transition-transform"
                  >
                    Call Dispatch Now: (800) 555-3569
                  </a>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="border border-white/30 hover:border-white text-white font-bold px-8 py-3.5 rounded-xl text-xs transition-colors"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && <About />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'agent-center' && <AgentDashboard />}
      </div>

      {/* Footer */}
      <Footer />

      {/* Conversational chatbot widget */}
      <ChatWidget />


    </div>
  );
}
