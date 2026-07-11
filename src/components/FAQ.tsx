import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'What is considered a plumbing emergency that warrants immediate dispatch?',
      a: 'Any issue that threatens structural flooding, gas safety, or health hazards is a critical emergency. This includes burst water mains, sewer backups into tubs/sinks, water heaters leaking gas or structural tanks splitting, and completely blocked single toilets in a household.',
    },
    {
      q: 'How do you calculate repair costs before starting a job?',
      a: 'Our Cost Estimator Agent calculates a baseline based on average parts, pipe diameter, and labour hours. When the plumber arrives, they confirm the scope and provide a binding flat-rate quote. We do not use sneaky hourly bills so there are no surprises.',
    },
    {
      q: 'Are your technicians fully licensed, bonded, and background-checked?',
      a: 'Yes, absolutely. Every single technician in our dispatch fleet is a certified master plumber, fully bonded, insured up to $2M, and has passed exhaustive federal safety checks. Your home is always in expert and safe hands.',
    },
    {
      q: 'What warranties do you offer on your plumbing repairs?',
      a: 'We stand by our work. Standard repairs carry a 90-day parts and labor warranty, while premium pipe overhauls and water heater installations include a 1 to 5-year structural warranty. If the fix fails under normal use, we return and repair it for free.',
    },
    {
      q: 'How does the automatic Technician Dispatch tracker work?',
      a: 'Once you book an appointment or report an emergency, our Dispatch Agent calculates the nearest technician. You receive a SMS text link showing their real-time GPS location, photo, credentials, and estimated ETA (down to the minute).',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-dark-blue relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">FAQ Support</h2>
          <p className="text-3xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Frequently Asked Plumbing Questions
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-dark-navy/10 dark:border-white/5 bg-white dark:bg-dark-card shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-dark-navy dark:text-white font-bold text-sm sm:text-base gap-4 cursor-pointer hover:bg-primary/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-dark-navy/40 dark:text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {/* Animated Dropdown container */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 border-t border-dark-navy/5 dark:border-white/5' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p className="p-5 text-xs sm:text-sm text-dark-navy/70 dark:text-gray-300 leading-relaxed bg-gray-50/50 dark:bg-dark-blue/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
