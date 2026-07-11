import { useEffect, useState } from 'react';
import { ShieldCheck, Clock, Award, PhoneCall, Calendar } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
  onEmergencyCall: () => void;
}

export default function Hero({ onBookNow, onEmergencyCall }: HeroProps) {
  // Counters for statistics
  const [repairs, setRepairs] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [eta, setEta] = useState(60);

  useEffect(() => {
    const repairsInterval = setInterval(() => {
      setRepairs((prev) => {
        if (prev >= 15240) {
          clearInterval(repairsInterval);
          return 15240;
        }
        return prev + 240;
      });
    }, 20);

    const satInterval = setInterval(() => {
      setSatisfaction((prev) => {
        if (prev >= 99) {
          clearInterval(satInterval);
          return 99;
        }
        return prev + 2;
      });
    }, 30);

    const etaInterval = setInterval(() => {
      setEta((prev) => {
        if (prev <= 15) {
          clearInterval(etaInterval);
          return 15;
        }
        return prev - 2;
      });
    }, 40);

    return () => {
      clearInterval(repairsInterval);
      clearInterval(satInterval);
      clearInterval(etaInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-dark-navy dark:via-dark-navy dark:to-dark-blue"
    >
      {/* Floating Animated Liquid Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 dark:bg-teal-500/5 rounded-full filter blur-3xl animate-blob [animation-delay:4s]"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#f1f1f1_1px,transparent_1px)] dark:bg-[radial-gradient(#14355e_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-dark-navy dark:text-primary font-semibold text-sm mb-6 border border-primary/20 animate-pulse">
            <Clock className="w-4 h-4 text-primary animate-spin-slow" />
            <span>Emergency Dispatch Active: Average ETA 15 Mins</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-dark-navy dark:text-white mb-6">
            Fast, Reliable <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-amber-500 glow-text-yellow">
              Plumbing Services
            </span> <br />
            Available 24/7
          </h1>

          {/* Subheading */}
          <p className="text-lg text-dark-navy/70 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Emergency plumbing, leak repairs, drain cleaning, installations, and maintenance by certified professionals. Licensed, bonded, and ready to fix your flow.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
            <button
              onClick={onBookNow}
              className="group flex items-center justify-center gap-2 bg-primary text-dark-navy font-extrabold px-8 py-4 rounded-2xl shadow-[0_4px_25px_rgba(245,197,24,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-dark-navy group-hover:scale-110 transition-all" />
              <span>Book Online Now</span>
            </button>
            <button
              onClick={onEmergencyCall}
              className="group flex items-center justify-center gap-2 bg-dark-navy dark:bg-white/10 hover:bg-dark-navy/90 dark:hover:bg-white/15 text-white border border-dark-navy/20 dark:border-white/10 font-bold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-primary group-hover:animate-bounce" />
              <span>Emergency 24/7 Call</span>
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl border-t border-dark-navy/10 dark:border-white/10 pt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-dark-navy dark:text-white mb-1">
                {(repairs / 1000).toFixed(1)}k+
              </div>
              <div className="text-xs sm:text-sm text-dark-navy/60 dark:text-gray-400">Repairs Done</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-dark-navy dark:text-white mb-1">
                {satisfaction}%
              </div>
              <div className="text-xs sm:text-sm text-dark-navy/60 dark:text-gray-400">Rating Score</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-dark-navy dark:text-white mb-1 text-primary">
                {eta}m
              </div>
              <div className="text-xs sm:text-sm text-dark-navy/60 dark:text-gray-400">Average ETA</div>
            </div>
          </div>
        </div>

        {/* Hero Visual Area */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Main Visual Frame */}
          <div className="relative w-full aspect-square max-w-[460px] rounded-3xl overflow-hidden glass-light dark:glass-dark border border-dark-navy/10 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl">
            {/* Top stats overlay */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2 bg-white/90 dark:bg-dark-blue/90 px-3 py-1.5 rounded-xl border border-dark-navy/5 dark:border-white/5 shadow-md">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-dark-navy dark:text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 bg-primary text-dark-navy px-3 py-1.5 rounded-xl font-bold text-xs shadow-md">
                <Award className="w-4 h-4" />
                <span>Top Rated 2026</span>
              </div>
            </div>

            {/* Premium Generated Plumber Mascot */}
            <div className="absolute inset-0 flex items-center justify-center p-4 select-none pointer-events-none z-0">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background decorative circles */}
                <div className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/10 dark:from-primary/10 dark:to-blue-500/5 animate-pulse-slow"></div>
                <img
                  src="/plumber_hero_image.jpg"
                  alt="Professional Plumber with Wrench"
                  className="w-[85%] h-[85%] object-cover rounded-2xl shadow-xl border-4 border-white dark:border-dark-navy animate-float relative z-10"
                />
              </div>
            </div>

            {/* Bottom floating cards */}
            <div className="flex gap-3 justify-end items-center z-10">
              <div className="glass-light dark:glass-dark border border-dark-navy/5 dark:border-white/5 rounded-2xl p-3 flex items-center gap-2 shadow-lg backdrop-blur-md animate-float">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-dark-navy/50 dark:text-gray-400 font-medium">Service Guarantee</div>
                  <div className="text-xs font-bold text-dark-navy dark:text-white">100% Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Floating Statistics Badge */}
          <div className="absolute -left-6 bottom-12 glass-light dark:glass-dark rounded-2xl p-4 shadow-xl border border-dark-navy/5 dark:border-white/5 max-w-[170px] backdrop-blur-md animate-float-reverse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold">
                24h
              </div>
              <div>
                <div className="text-xs font-extrabold text-dark-navy dark:text-white">Always Open</div>
                <div className="text-[10px] text-dark-navy/60 dark:text-gray-400">Weekends & Holidays</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
