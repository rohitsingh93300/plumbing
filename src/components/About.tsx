import { useState } from 'react';
import { Users, Award, Shield, HeartHandshake, CheckCircle, Calendar } from 'lucide-react';

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(3); // 2026

  const timelineData = [
    { year: '2012', title: 'FlowFix Founded', desc: 'Started with just one service truck and a vision for quality plumbing.' },
    { year: '2016', title: '10,000 Repairs', desc: 'Expanded our technician team and moved to a central dispatch center.' },
    { year: '2021', title: 'Statewide Award', desc: 'Won the Service Excellence Award for our emergency response rates.' },
    { year: '2026', title: 'AI Integration', desc: 'Launched FlowFix AI Agent networks for scheduling and diagnosis support.' },
  ];

  const stats = [
    { label: 'Licensed Technicians', value: '38+' },
    { label: 'Years of Experience', value: '14+' },
    { label: 'Service Awards Won', value: '12' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-navy relative overflow-hidden">
      {/* Light grid divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-navy/10 dark:via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">About FlowFix</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Crafting Trustworthy Solutions For Every Plumbing Dilemma
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Our Story (Large) */}
          <div className="md:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-8 border border-dark-navy/5 dark:border-white/10 flex flex-col justify-between shadow-lg relative overflow-hidden transition-all duration-300">
            {/* Watermark icon */}
            <div className="absolute -right-12 -bottom-12 opacity-5 text-dark-navy dark:text-white">
              <Users className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy dark:text-white">Our Humble Story</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                For over a decade, FlowFix Plumbing has served homeowners and commercial businesses with dedication. What began as a single-man operation with a toolbox has evolved into a premier tech-forward dispatch service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Today, our licensed technicians combine master trade craftsmanship with modern AI dispatch. This means we are always at the right place, at the right time, with the exact tools needed to get your pipes flowing cleanly again.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-dark-navy/10 dark:border-white/10 z-10">
              {stats.map((s, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-xxs sm:text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Mission (Small) */}
          <div className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-dark-navy/5 dark:border-white/10 flex flex-col justify-between shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark-navy dark:text-white mb-3">Our Core Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                To deliver clean, safe, and professional plumbing solutions quickly. We prioritize long-term repairs over temporary band-aids to secure your peace of mind.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-green-500 font-bold bg-green-500/10 py-1.5 px-3 rounded-xl w-fit">
              <CheckCircle className="w-4 h-4" />
              <span>Certified Integrity</span>
            </div>
          </div>

          {/* Card 3: Awards (Small) */}
          <div className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-dark-navy/5 dark:border-white/10 flex flex-col justify-between shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark-navy dark:text-white mb-3">Honors & Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>Licensed Contractor #92-A</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>PHCC National Member</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>A+ BBB Rating Certified</span>
                </li>
              </ul>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 italic mt-6">Updated: June 2026</div>
          </div>

          {/* Card 4: Timeline (Medium / Flex Column Span) */}
          <div className="md:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-8 border border-dark-navy/5 dark:border-white/10 shadow-lg flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy dark:text-white">Our Timeline</h3>
              </div>

              {/* Timeline Horizontal Line / Selectors */}
              <div className="grid grid-cols-4 relative mb-8 pt-4">
                {/* Horizontal bar */}
                <div className="absolute top-[35px] left-[12.5%] right-[12.5%] h-0.5 bg-dark-navy/10 dark:bg-white/10 z-0"></div>
                {/* Filled horizontal bar */}
                <div
                  className="absolute top-[35px] left-[12.5%] h-0.5 bg-primary transition-all duration-500 z-0"
                  style={{ width: `${(activeTimeline / 3) * 75}%` }}
                ></div>

                {timelineData.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTimeline(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer z-10"
                  >
                    <span className={`text-sm font-extrabold transition-colors ${activeTimeline === idx ? 'text-primary' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary'}`}>
                      {item.year}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all ${
                        activeTimeline === idx
                          ? 'bg-primary border-white dark:border-dark-navy scale-110 shadow-[0_0_10px_#F5C518]'
                          : 'bg-white dark:bg-dark-navy border-dark-navy/10 dark:border-white/10 hover:border-primary'
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Display active timeline details */}
            <div className="bg-dark-navy/[0.03] dark:bg-dark-navy/40 border border-dark-navy/5 dark:border-white/10 rounded-2xl p-5 min-h-[90px] transition-all duration-300">
              <h4 className="text-md font-bold text-dark-navy dark:text-primary mb-1">
                {timelineData[activeTimeline].title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {timelineData[activeTimeline].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
