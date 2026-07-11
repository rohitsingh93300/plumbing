import { useState } from 'react';
import {
  Wrench,
  Flame,
  ShieldAlert,
  Droplet,
  ShowerHead,
  Building,
  Home,
  Waves,
  Hammer,
  ChevronRight,
  TrendingDown
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  details: string[];
  icon: React.ReactNode;
  fillLevel: number; // For the liquid water-fill height simulation
}

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: 'leak-repair',
      title: 'Leak Repair',
      desc: 'Accurate thermal leak detection and structural pipe repairs.',
      details: ['Under-slab pipe scanning', 'Wall & ceiling pipe repair', 'Copper repiping', 'Electronic water leak sensors'],
      icon: <Droplet className="w-6 h-6" />,
      fillLevel: 80
    },
    {
      id: 'drain-cleaning',
      title: 'Drain Cleaning',
      desc: 'Clearing stubborn blocks with hydro-jetting technology.',
      details: ['CCTV sewer pipeline diagnostics', 'Eco-friendly chemical clearers', 'Hydro-jet root slicing', 'Sump pump pipe cleaning'],
      icon: <Waves className="w-6 h-6" />,
      fillLevel: 95
    },
    {
      id: 'pipe-installation',
      title: 'Pipe Installation',
      desc: 'Installing reliable copper, PEX, and PVC pipelines.',
      details: ['Cross-linked polyethylene layouts', 'Anti-corrosive copper supply', 'Drain waste vent hookups', 'Code-compliance pipe sizing'],
      icon: <Hammer className="w-6 h-6" />,
      fillLevel: 75
    },
    {
      id: 'bathroom-plumbing',
      title: 'Bathroom Plumbing',
      desc: 'Expert shower, toilet, tub, and faucet installations.',
      details: ['Thermostatic mixer valve installs', 'Low-flow dual flush toilets', 'Hidden leak diagnostics', 'Vanity sink installations'],
      icon: <ShowerHead className="w-6 h-6" />,
      fillLevel: 85
    },
    {
      id: 'kitchen-plumbing',
      title: 'Kitchen Plumbing',
      desc: 'Garbage disposal, dishwasher and filtration setups.',
      details: ['Multi-stage RO water filter systems', 'Heavy duty food disposals', 'Ice-maker supply connections', 'Dishwasher safety loop installs'],
      icon: <Wrench className="w-6 h-6" />,
      fillLevel: 70
    },
    {
      id: 'water-heater-repair',
      title: 'Water Heater Repair',
      desc: 'Fixing standard tanks and tankless heating systems.',
      details: ['Tankless heat exchanger cleaning', 'Heating element replacement', 'Thermal relief safety valves', 'Gas valve calibration'],
      icon: <Flame className="w-6 h-6" />,
      fillLevel: 90
    },
    {
      id: 'emergency-plumbing',
      title: 'Emergency Plumbing',
      desc: 'Burst pipes and main valve failures handled in minutes.',
      details: ['24/7 dispatcher standby', 'Main valve shutoff search', 'High-volume pump extraction', 'Temporary structural clamping'],
      icon: <ShieldAlert className="w-6 h-6" />,
      fillLevel: 100
    },
    {
      id: 'sewer-line-repair',
      title: 'Sewer Line Repair',
      desc: 'Trenchless line repair and root intrusions removal.',
      details: ['Pipe-bursting restoration', 'Epoxy relining without digging', 'Root block extraction', 'Septic tank connector pipes'],
      icon: <TrendingDown className="w-6 h-6" />,
      fillLevel: 88
    },
    {
      id: 'commercial-plumbing',
      title: 'Commercial Plumbing',
      desc: 'High-occupancy repairs, grease traps, and code testing.',
      details: ['Industrial backflow check kits', 'Large commercial grease trap clean', 'Urinal sensor installations', 'Heavy-duty water mains'],
      icon: <Building className="w-6 h-6" />,
      fillLevel: 65
    },
    {
      id: 'residential-plumbing',
      title: 'Residential Plumbing',
      desc: 'Full-service household maintenance and diagnostics.',
      details: ['Whole-home water pressure tune', 'Outdoor spigot restoration', 'Preventive inspections', 'Water softener installations'],
      icon: <Home className="w-6 h-6" />,
      fillLevel: 78
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark-blue relative overflow-hidden">
      {/* Decorative lines representing pipes */}
      <div className="absolute top-1/4 right-0 w-32 h-1 bg-primary/20 rounded-l-full"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-1 bg-blue-500/10 rounded-r-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Our Offerings</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Premium Solutions For Residential & Commercial Projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative overflow-hidden rounded-3xl border border-dark-navy/5 dark:border-white/5 bg-white dark:bg-dark-card p-8 flex flex-col justify-between shadow-md transition-all duration-500 min-h-[320px] group cursor-pointer hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Liquid fill animation in background on hover */}
                <div
                  className="absolute bottom-0 left-0 w-full bg-primary/10 dark:bg-primary/5 transition-all duration-700 ease-out z-0"
                  style={{
                    height: isHovered ? `${service.fillLevel}%` : '0%',
                  }}
                >
                  {isHovered && <div className="liquid-fill w-full h-full opacity-30"></div>}
                </div>

                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {/* Tiny water-meter readout on hover */}
                    <span className="text-[10px] uppercase font-bold text-dark-navy/30 dark:text-white/20 group-hover:text-primary/70 transition-colors">
                      Meter: {service.fillLevel}%
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dark-navy dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-dark-navy/70 dark:text-gray-300 mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                </div>

                {/* Expanded Bullet Details */}
                <div className="relative z-10">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isHovered ? 'max-h-40 opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1.5 border-t border-dark-navy/10 dark:border-white/10 pt-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-dark-navy/80 dark:text-gray-300">
                          <span className="w-1 h-1 bg-primary rounded-full shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:underline">
                      Explore Details
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
