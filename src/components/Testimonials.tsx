import { useEffect, useState } from 'react';
import { Star, MessageSquare, Play } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatarInitials: string;
}

export default function Testimonials() {
  const reviews: Review[] = [
    { name: 'Marcus Vance', role: 'Homeowner, Austin', text: 'FlowFix dispatched a plumber within 15 minutes of my call! Dave solved a kitchen pipe burst quickly and cleaned up fully. Truly agency-level service.', rating: 5, date: '1 day ago', avatarInitials: 'MV' },
    { name: 'Elena Rostova', role: 'Property Manager', text: 'I use FlowFix standard contracts for all 12 of my rental properties. Their AI booking agent makes coordination seamless, and pricing is flat-rate.', rating: 5, date: '3 days ago', avatarInitials: 'ER' },
    { name: 'Kenji Sato', role: 'Restaurant Owner', text: 'Grease trap backup occurred during Saturday dinner rush. Dispatcher dispatched emergency truck T-04 instantly. Resolved in under an hour. Outstanding!', rating: 5, date: '1 week ago', avatarInitials: 'KS' },
    { name: 'Sarah Jenkins', role: 'Homeowner, West Lake', text: 'The cost estimator was down-to-the-penny accurate. Dave explained the issue and fitted the new water heater with full warranty certification.', rating: 5, date: '2 weeks ago', avatarInitials: 'SJ' },
  ];

  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-blue relative overflow-hidden">
      {/* Decorative droplets background */}
      <div className="absolute top-10 left-10 opacity-5 dark:opacity-2 text-primary">
        <MessageSquare className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Testimonials</h2>
          <p className="text-3xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Loved By Over 15,000 Happy Clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Auto-scrolling Review Carousel */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[300px]">
            {/* Active Card */}
            <div className="bg-white dark:bg-dark-card border border-dark-navy/10 dark:border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-500 transform scale-100">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(reviews[activeReviewIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-md sm:text-lg italic text-dark-navy dark:text-gray-100 leading-relaxed mb-6 font-medium">
                "{reviews[activeReviewIdx].text}"
              </blockquote>

              <div className="flex items-center gap-4 border-t border-dark-navy/10 dark:border-white/10 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-primary text-dark-navy font-bold flex items-center justify-center text-sm shadow-md">
                  {reviews[activeReviewIdx].avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-dark-navy dark:text-white">{reviews[activeReviewIdx].name}</div>
                  <div className="text-xxs uppercase tracking-wider text-dark-navy/50 dark:text-gray-400 mt-0.5">{reviews[activeReviewIdx].role}</div>
                </div>
                <span className="ml-auto text-xxs text-dark-navy/30 dark:text-white/20 font-semibold">{reviews[activeReviewIdx].date}</span>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex gap-2 mt-6 justify-center lg:justify-start">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeReviewIdx === idx ? 'bg-primary w-6 shadow-[0_0_8px_#F5C518]' : 'bg-dark-navy/20 dark:bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Right: Google Rating & Video Reviews Preview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Google review box */}
            <div className="bg-white dark:bg-dark-card border border-dark-navy/10 dark:border-white/10 rounded-3xl p-6 shadow-md flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-amber-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shrink-0">
                G
              </div>
              <div>
                <div className="text-md font-extrabold text-dark-navy dark:text-white">Google Rating</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-sm font-black text-primary">4.9</span>
                  <div className="flex gap-0.5 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xxs text-dark-navy/40 dark:text-gray-400 font-bold ml-1">(1,820 Reviews)</span>
                </div>
              </div>
            </div>

            {/* Video reviews section */}
            <div className="bg-white dark:bg-dark-card border border-dark-navy/10 dark:border-white/10 rounded-3xl p-6 shadow-md">
              <h3 className="text-sm font-extrabold text-dark-navy dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Play className="w-4 h-4 text-primary fill-current" /> Video Testimonials
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Video Card 1 */}
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/20 to-blue-500/10 border border-dark-navy/5 dark:border-white/5 cursor-pointer flex flex-col justify-between p-4 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-7 h-7 rounded-full bg-primary text-dark-navy flex items-center justify-center shadow-md self-end group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <div>
                    <div className="text-xxs font-extrabold text-dark-navy dark:text-white">Dave's Project</div>
                    <div className="text-[9px] text-dark-navy/50 dark:text-gray-400 mt-0.5">Emergency Pipe Repair</div>
                  </div>
                </div>

                {/* Video Card 2 */}
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-primary/10 border border-dark-navy/5 dark:border-white/5 cursor-pointer flex flex-col justify-between p-4 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-7 h-7 rounded-full bg-primary text-dark-navy flex items-center justify-center shadow-md self-end group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <div>
                    <div className="text-xxs font-extrabold text-dark-navy dark:text-white">Sarah's Kitchen</div>
                    <div className="text-[9px] text-dark-navy/50 dark:text-gray-400 mt-0.5">Water Heater Setup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
