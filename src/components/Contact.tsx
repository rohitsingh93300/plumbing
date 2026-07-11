import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: 'leak',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submittal
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', issue: 'leak', message: '' });
    }
  };

  const contactInfos = [
    { icon: <Phone className="w-5 h-5 text-primary" />, label: 'Emergency Line', val: '+1 (800) 555-3569', sub: 'Available 24/7/365' },
    { icon: <Mail className="w-5 h-5 text-primary" />, label: 'Email Desk', val: 'support@flowfix.com', sub: 'Response within 2 hours' },
    { icon: <Clock className="w-5 h-5 text-primary" />, label: 'Business Hours', val: 'Mon - Sun, 24 Hours', sub: 'No weekend surcharge' },
    { icon: <MapPin className="w-5 h-5 text-primary" />, label: 'Headquarters', val: '802 Flowline Blvd, Suite A', sub: 'Austin, TX 78701' },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Get in Touch</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white leading-tight">
            Schedule a Licensed Plumber Today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="glass-light dark:glass-dark rounded-2xl p-4 border border-dark-navy/5 dark:border-white/5 flex gap-3 items-start shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-dark-navy/40 dark:text-gray-400">{info.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-dark-navy dark:text-white mt-0.5">{info.val}</div>
                    <div className="text-[10px] text-dark-navy/50 dark:text-gray-500 mt-0.5">{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Interactive SVG Map */}
            <div className="rounded-3xl border border-dark-navy/10 dark:border-white/10 overflow-hidden shadow-lg h-60 relative bg-gray-50 dark:bg-dark-blue flex items-center justify-center">
              {/* Map Title overlay */}
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-dark-navy/90 border border-dark-navy/5 dark:border-white/5 px-2.5 py-1 rounded-lg text-xxs font-extrabold text-dark-navy dark:text-white z-10 shadow">
                Local Coverage Grid Map
              </div>

              {/* Vector Map Illustration */}
              <svg className="w-full h-full text-dark-navy opacity-80" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Grid streets */}
                <path d="M0 40 H300" stroke="rgba(245,197,24,0.15)" strokeWidth="8" />
                <path d="M0 100 H300" stroke="rgba(245,197,24,0.15)" strokeWidth="12" />
                <path d="M0 160 H300" stroke="rgba(245,197,24,0.15)" strokeWidth="8" />
                
                <path d="M60 0 V200" stroke="rgba(245,197,24,0.15)" strokeWidth="8" />
                <path d="M150 0 V200" stroke="rgba(245,197,24,0.15)" strokeWidth="14" />
                <path d="M240 0 V200" stroke="rgba(245,197,24,0.15)" strokeWidth="8" />

                {/* Buildings / Neighborhood blocks */}
                <rect x="10" y="10" width="40" height="20" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="70" y="10" width="70" height="20" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="160" y="10" width="70" height="20" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="250" y="10" width="40" height="20" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />

                <rect x="10" y="50" width="40" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="70" y="50" width="70" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="160" y="50" width="70" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="250" y="50" width="40" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />

                <rect x="10" y="110" width="40" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="70" y="110" width="70" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="160" y="110" width="70" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />
                <rect x="250" y="110" width="40" height="40" rx="3" className="fill-dark-navy/5 dark:fill-white/5" />

                {/* Central office headquarters marker */}
                <circle cx="150" cy="100" r="8" fill="#F5C518" className="animate-ping" opacity="0.5" />
                <circle cx="150" cy="100" r="5" fill="#F5C518" stroke="#ffffff" strokeWidth="1.5" />
                <text x="162" y="104" fontSize="8" fill="#F5C518" fontWeight="bold" className="glow-text-yellow">FlowFix HQ</text>

                {/* Active technician truck icons */}
                <g className="animate-float">
                  <circle cx="240" cy="60" r="4" fill="#3B82F6" />
                  <line x1="240" y1="60" x2="255" y2="60" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 1" />
                  <text x="248" y="55" fontSize="5" fill="#3B82F6" fontWeight="semibold">T-04</text>
                </g>
                <g className="animate-float-reverse">
                  <circle cx="60" cy="140" r="4" fill="#3B82F6" />
                  <line x1="60" y1="140" x2="45" y2="140" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 1" />
                  <text x="35" y="135" fontSize="5" fill="#3B82F6" fontWeight="semibold">T-09</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Contact / Booking Form */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-dark-card border border-dark-navy/10 dark:border-white/10 rounded-3xl p-8 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy dark:text-white mb-2">Request Submitted Successfully!</h3>
                <p className="text-sm text-dark-navy/70 dark:text-gray-400 max-w-sm mb-6">
                  The **Lead Qualification Agent** is processing your details. Our dispatch team will call you within 5 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-dark-navy font-bold py-2.5 px-6 rounded-xl text-xs hover:scale-103 transition-transform cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-dark-navy/60 dark:text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-dark-blue border border-dark-navy/10 dark:border-white/10 rounded-2xl py-3 px-4 text-sm text-dark-navy dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-dark-navy/60 dark:text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white dark:bg-dark-blue border border-dark-navy/10 dark:border-white/10 rounded-2xl py-3 px-4 text-sm text-dark-navy dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-dark-navy/60 dark:text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-dark-blue border border-dark-navy/10 dark:border-white/10 rounded-2xl py-3 px-4 text-sm text-dark-navy dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-extrabold text-dark-navy/60 dark:text-gray-400 mb-2">
                      Plumbing Issue Category
                    </label>
                    <select
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="w-full bg-white dark:bg-dark-blue border border-dark-navy/10 dark:border-white/10 rounded-2xl py-3.5 px-4 text-sm text-dark-navy dark:text-white focus:outline-none focus:border-primary"
                    >
                      <option value="leak">Active Leak Repair</option>
                      <option value="drain">Clogged Drain / Sewer</option>
                      <option value="heater">Water Heater Maintenance</option>
                      <option value="install">New Fixture Installation</option>
                      <option value="emergency">Emergency / Burst Pipe</option>
                      <option value="commercial">Commercial Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-dark-navy/60 dark:text-gray-400 mb-2">
                    Issue Details (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your issue so our Technician Dispatch Agent can assign the ideal specialist..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-dark-blue border border-dark-navy/10 dark:border-white/10 rounded-2xl py-3 px-4 text-sm text-dark-navy dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-dark-navy font-extrabold py-4 rounded-2xl shadow-[0_4px_15px_rgba(245,197,24,0.3)] hover:scale-102 transition-transform cursor-pointer"
                >
                  <Send className="w-4.5 h-4.5" />
                  <span>Request Callback & Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
