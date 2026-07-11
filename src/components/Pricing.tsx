import { Check, ShieldAlert } from 'lucide-react';

interface PricePlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  isPopular?: boolean;
  isEmergency?: boolean;
  features: string[];
  ctaText: string;
}

export default function Pricing() {

  const plans: PricePlan[] = [
    {
      name: 'Basic',
      price: '$89',
      period: 'Call-out Fee',
      desc: 'Perfect for basic inspections and minor drain unblocking diagnostics.',
      features: [
        'Single Point Diagnostic',
        'Standard Business Hours',
        '30-Day Work Warranty',
        'Basic Written Repair Quote',
        'No emergency dispatch priority',
      ],
      ctaText: 'Book Inspection',
    },
    {
      name: 'Standard',
      price: '$179',
      period: 'Standard Repair Start',
      desc: 'Covers standard leaks, tap fittings, and water filter replacements.',
      isPopular: true,
      features: [
        'Multi-Point Leak Scan',
        'Standard Business Hours',
        '90-Day Work Warranty',
        'Detailed Digital Inspection Report',
        '10% Discount on Additional Parts',
        'Medium dispatch priority',
      ],
      ctaText: 'Book Standard Fix',
    },
    {
      name: 'Premium',
      price: '$299',
      period: 'Complete System Service',
      desc: 'Deep sewer jetting, hot water maintenance, or whole-house checks.',
      features: [
        'Whole-house Pipe scan',
        'Extended Business Hours (up to 8 PM)',
        '1-Year Structural Warranty',
        'Priority Technician Routing',
        '15% Discount on Additional Parts',
        'High dispatch priority',
      ],
      ctaText: 'Book Premium Service',
    },
    {
      name: 'Emergency Fix',
      price: '$249',
      period: 'Priority Response Start',
      desc: 'Immediate dispatch for burst pipes, flooding, or gas line safety concerns.',
      isEmergency: true,
      features: [
        'Guaranteed <30 Mins Dispatch',
        'Available 24/7/365',
        'Emergency Detection Routing',
        'Immediate Damage Mitigation',
        'Full Safety Clearance Certificate',
        'Highest dispatch priority',
      ],
      ctaText: 'Dispatch Plumber Now',
    },
  ];

  const comparisonFeatures = [
    { name: 'Average Response ETA', basic: '2-4 Hours', standard: '1-2 Hours', premium: '< 1 Hour', emergency: '15-30 Mins' },
    { name: 'Weekend/Holiday Dispatch', basic: 'No', standard: 'Yes (with surcharge)', premium: 'Yes', emergency: 'Yes (included)' },
    { name: 'Parts Discount', basic: '0%', standard: '10%', premium: '15%', emergency: '0%' },
    { name: 'Inspection Scope', basic: 'Single Issue', standard: 'Multi-Point', premium: 'Whole House', emergency: 'Emergency Site Only' },
    { name: 'Warranty Period', basic: '30 Days', standard: '90 Days', premium: '1 Year', emergency: '180 Days' },
    { name: 'AI Cost Estimator Access', basic: 'Yes', standard: 'Yes', premium: 'Yes', emergency: 'Yes' },
    { name: 'After-Hours Surcharges', basic: 'Yes', standard: 'Yes', premium: 'No', emergency: 'No' },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-dark-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Service Rates</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Transparent Pricing Plans With No Hidden Fees
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, idx) => {
            const isEmergency = plan.isEmergency;
            const isPopular = plan.isPopular;

            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  isEmergency
                    ? 'border-red-500 bg-red-500/5 dark:bg-red-500/10 shadow-lg'
                    : isPopular
                    ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-2xl scale-102 lg:scale-105'
                    : 'border-dark-navy/10 dark:border-white/10 bg-white dark:bg-dark-card shadow-md'
                }`}
              >
                {/* Popular or Emergency Badge */}
                {isPopular && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-extrabold bg-primary text-dark-navy px-2 py-1 rounded-md">
                    Most Popular
                  </span>
                )}
                {isEmergency && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-extrabold bg-red-500 text-white px-2 py-1 rounded-md flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> Urgent
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-dark-navy dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-xxs sm:text-xs text-dark-navy/60 dark:text-gray-400 mb-4 line-clamp-2">{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6 border-b border-dark-navy/10 dark:border-white/10 pb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white">{plan.price}</span>
                    <span className="text-xs text-dark-navy/50 dark:text-gray-400 font-semibold">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-dark-navy/80 dark:text-gray-300">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-103 cursor-pointer ${
                    isEmergency
                      ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_15px_rgba(239,68,68,0.3)]'
                      : isPopular
                      ? 'bg-primary hover:bg-primary/90 text-dark-navy shadow-[0_4px_15px_rgba(245,197,24,0.3)]'
                      : 'bg-dark-navy dark:bg-white/10 hover:bg-dark-navy/90 dark:hover:bg-white/15 text-white dark:text-white border border-dark-navy/10 dark:border-white/10'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-dark-navy/10 dark:border-white/10 bg-white dark:bg-dark-card shadow-lg">
          <div className="p-6 bg-gray-50 dark:bg-dark-blue border-b border-dark-navy/10 dark:border-white/10">
            <h3 className="text-lg font-bold text-dark-navy dark:text-white">Plan Comparison Matrix</h3>
            <p className="text-xs text-dark-navy/50 dark:text-gray-400">Review exact technical features side-by-side</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-navy/10 dark:border-white/10 text-xs font-bold text-dark-navy/60 dark:text-gray-400 bg-gray-50/50 dark:bg-dark-blue/50">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Basic</th>
                  <th className="p-4">Standard</th>
                  <th className="p-4">Premium</th>
                  <th className="p-4">Emergency</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-dark-navy/5 dark:border-white/5 last:border-none text-xs text-dark-navy/80 dark:text-gray-300 hover:bg-gray-50/20 dark:hover:bg-white/2"
                  >
                    <td className="p-4 font-bold text-dark-navy dark:text-white">{row.name}</td>
                    <td className="p-4">{row.basic}</td>
                    <td className="p-4 font-semibold text-primary">{row.standard}</td>
                    <td className="p-4">{row.premium}</td>
                    <td className="p-4 font-semibold text-red-500">{row.emergency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
