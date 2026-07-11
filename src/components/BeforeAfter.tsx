import React, { useState, useRef, useEffect } from 'react';
import { Eye, Sliders, CheckCircle } from 'lucide-react';

interface GalleryCategory {
  id: string;
  name: string;
  beforeTitle: string;
  afterTitle: string;
}

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100
  const [activeCategory, setActiveCategory] = useState('faucet');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const categories: GalleryCategory[] = [
    { id: 'faucet', name: 'Faucet Install', beforeTitle: 'Leaking, Corroded Faucet', afterTitle: 'Modern Chrome Faucet' },
    { id: 'piping', name: 'Piping Overhaul', beforeTitle: 'Rusty Iron Pipes', afterTitle: 'Premium Copper Setup' },
    { id: 'drain', name: 'Drain Cleaning', beforeTitle: 'Grease Clogged Drain', afterTitle: 'Cleared Hydro-Jetted Pipe' },
  ];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  // SVGs representing the plumbing problems (Before) and solutions (After)
  const renderFaucetSVG = (isAfter: boolean) => (
    <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="300" height="200" className={isAfter ? 'fill-blue-500/10' : 'fill-amber-500/5'} />
      {/* Wall Connection */}
      <rect x="20" y="70" width="15" height="40" rx="3" className="fill-gray-400 dark:fill-gray-600" />
      {/* Pipe stem */}
      <rect x="35" y="80" width="60" height="20" className={isAfter ? 'fill-gray-300 dark:fill-gray-500' : 'fill-amber-800'} />
      
      {/* Faucet body */}
      <path
        d="M95 80 H140 C155 80 155 120 140 120 H120"
        className={isAfter ? 'stroke-gray-300 dark:stroke-gray-500' : 'stroke-amber-800'}
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <g className={isAfter ? '' : 'rotate-12 transform origin-[110px_70px]'}>
        <rect x="100" y="55" width="20" height="15" className="fill-primary" />
        <rect x="90" y="45" width="40" height="10" rx="2" className="fill-dark-navy dark:fill-white" />
      </g>
      
      {/* Spout opening */}
      <rect x="120" y="115" width="20" height="10" className="fill-gray-400 dark:fill-gray-600" />

      {/* Water flow */}
      {isAfter ? (
        // Clear streaming water
        <g>
          <path d="M130 125 V190" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
          <path d="M128 125 V190" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          {/* Sparkles */}
          <circle cx="160" cy="140" r="2" fill="#F5C518" className="animate-ping" />
          <circle cx="110" cy="170" r="3" fill="#F5C518" />
        </g>
      ) : (
        // Dripping dirty water
        <g>
          <circle cx="130" cy="135" r="5" fill="#92400E" className="animate-bounce" />
          <circle cx="130" cy="165" r="4" fill="#92400E" />
          <path d="M127 125 V132" stroke="#92400E" strokeWidth="4" />
          {/* rust spots on faucet */}
          <circle cx="80" cy="90" r="3" fill="#B45309" />
          <circle cx="115" cy="95" r="2" fill="#B45309" />
          <circle cx="140" cy="92" r="3" fill="#B45309" />
          {/* Puddle */}
          <ellipse cx="130" cy="190" rx="30" ry="8" fill="#92400E" opacity="0.4" />
        </g>
      )}
    </svg>
  );

  const renderPipingSVG = (isAfter: boolean) => (
    <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" className={isAfter ? 'fill-teal-500/10' : 'fill-red-500/5'} />
      {isAfter ? (
        // Clean Copper Setup
        <g>
          <path d="M30 40 H270" stroke="#D97706" strokeWidth="12" strokeLinecap="round" />
          <path d="M100 40 V160 H200 V40" stroke="#D97706" strokeWidth="12" strokeLinecap="round" />
          {/* Shiny joints */}
          <circle cx="100" cy="40" r="10" fill="#F5C518" />
          <circle cx="100" cy="160" r="10" fill="#F5C518" />
          <circle cx="200" cy="160" r="10" fill="#F5C518" />
          <circle cx="200" cy="40" r="10" fill="#F5C518" />
          {/* Pressure gauge */}
          <circle cx="150" cy="100" r="20" fill="#FFFFFF" stroke="#071B34" strokeWidth="3" />
          <path d="M150 100 L160 90" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <text x="142" y="105" fontSize="6" fill="#000" fontWeight="bold">PSI</text>
        </g>
      ) : (
        // Corroded iron pipes
        <g>
          <path d="M30 40 H270" stroke="#4B5563" strokeWidth="12" strokeLinecap="round" />
          <path d="M100 40 V160 H200 V40" stroke="#4B5563" strokeWidth="12" strokeLinecap="round" />
          {/* Rust stains */}
          <path d="M60 46 Q70 55 80 46" stroke="#92400E" strokeWidth="4" />
          <path d="M106 70 Q112 85 106 100" stroke="#92400E" strokeWidth="3" />
          {/* Water spray leak */}
          <path d="M200 110 Q230 115 250 105" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.7" className="animate-pulse" />
          <path d="M200 110 Q230 105 240 95" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Puddle */}
          <ellipse cx="200" cy="190" rx="40" ry="6" fill="#3B82F6" opacity="0.3" />
        </g>
      )}
    </svg>
  );

  const renderDrainSVG = (isAfter: boolean) => (
    <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" className={isAfter ? 'fill-blue-500/10' : 'fill-amber-500/5'} />
      {/* Pipe Outer Boundary */}
      <path d="M20 100 H280" stroke="#9CA3AF" strokeWidth="50" />
      <path d="M20 100 H280" stroke="#1F2937" strokeWidth="46" />

      {isAfter ? (
        // Hydro-jetted clear pipe
        <g>
          {/* Rushing clean water */}
          <path d="M20 100 H280" stroke="#3B82F6" strokeWidth="30" strokeDasharray="30 10" className="animate-water-flow" />
          <path d="M20 95 H280" stroke="#60A5FA" strokeWidth="8" opacity="0.5" />
          {/* Water wave vectors */}
          <circle cx="100" cy="100" r="3" fill="#FFFFFF" />
          <circle cx="180" cy="92" r="2" fill="#FFFFFF" />
        </g>
      ) : (
        // Clogged Pipe
        <g>
          {/* Gunk inside */}
          <rect x="80" y="80" width="140" height="40" rx="10" fill="#78350F" opacity="0.9" />
          <circle cx="100" cy="100" r="15" fill="#451A03" />
          <circle cx="150" cy="95" r="12" fill="#451A03" />
          <circle cx="190" cy="105" r="14" fill="#451A03" />
          {/* Trapped dirty liquid */}
          <path d="M20 100 H80" stroke="#78350F" strokeWidth="20" opacity="0.5" />
          <circle cx="50" cy="105" r="3" fill="#451A03" />
          <circle cx="70" cy="95" r="2" fill="#451A03" />
        </g>
      )}
    </svg>
  );

  const getActiveSVG = (category: string, isAfter: boolean) => {
    switch (category) {
      case 'faucet':
        return renderFaucetSVG(isAfter);
      case 'piping':
        return renderPipingSVG(isAfter);
      case 'drain':
        return renderDrainSVG(isAfter);
      default:
        return renderFaucetSVG(isAfter);
    }
  };

  const getCategoryTitles = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId) || categories[0];
  };

  return (
    <section id="before-after" className="py-24 bg-gray-50 dark:bg-dark-blue relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Service Visuals</h2>
          <p className="text-3xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Before & After Comparison Slider
          </p>
          <p className="text-sm text-dark-navy/60 dark:text-gray-400 mt-2">
            Drag the yellow slider handle left or right to see our clean plumbing craftsmanship.
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary text-dark-navy shadow-md shadow-primary/20'
                  : 'bg-white dark:bg-dark-card border border-dark-navy/10 dark:border-white/5 text-dark-navy dark:text-gray-300 hover:border-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Visual Slider Frame */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-dark-navy/10 dark:border-white/15 bg-white dark:bg-dark-card aspect-[3/2] max-w-3xl mx-auto select-none">
          {/* Comparison Container */}
          <div
            ref={containerRef}
            onMouseDown={handleStartDrag}
            onTouchStart={handleStartDrag}
            className="relative w-full h-full cursor-ew-resize overflow-hidden"
          >
            {/* AFTER IMAGE (Background) */}
            <div className="absolute inset-0 w-full h-full">
              {getActiveSVG(activeCategory, true)}
              <div className="absolute bottom-4 right-4 bg-green-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>FlowFix Fix</span>
              </div>
              <div className="absolute top-4 right-4 text-xxs font-bold text-dark-navy/40 dark:text-white/40 uppercase tracking-widest">
                {getCategoryTitles(activeCategory).afterTitle}
              </div>
            </div>

            {/* BEFORE IMAGE (Foreground, Width clipped by slider position) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden border-r border-white/40 z-10"
              style={{ width: `${sliderPos}%` }}
            >
              {/* Force children to render full width even when parent width is clipped */}
              <div className="absolute inset-0 w-[768px] sm:w-[768px] md:w-[768px] lg:w-[768px] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
                {getActiveSVG(activeCategory, false)}
              </div>
              <div className="absolute bottom-4 left-4 bg-red-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                <Eye className="w-3.5 h-3.5" />
                <span>Before</span>
              </div>
              <div className="absolute top-4 left-4 text-xxs font-bold text-white/50 uppercase tracking-widest">
                {getCategoryTitles(activeCategory).beforeTitle}
              </div>
            </div>

            {/* SLIDER HANDLER */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary border-4 border-white dark:border-dark-navy shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <Sliders className="w-4 h-4 text-dark-navy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
