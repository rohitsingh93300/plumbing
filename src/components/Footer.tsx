import { useState } from 'react';
import { Droplet, Phone, Mail, Send, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-dark-navy text-white relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Decorative background plumbing pipe */}
      <div className="absolute right-0 top-0 w-32 h-32 opacity-5 border-t-8 border-r-8 border-primary rounded-tr-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Company Info & Socials */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary text-dark-navy flex items-center justify-center font-bold">
              <Droplet className="w-5 h-5 fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Flow<span className="text-primary">Fix</span> Plumbing
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            Premium residential & commercial plumbing services available 24/7. Trusted trade craftsmanship combined with high-speed automated AI dispatch.
          </p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.5.5-1 1-1h2V2h-3C10.5 2 9 3.5 9 5.5V8z"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.56v-.07c-.88.39-1.83.65-2.82.77 1.02-.61 1.8-1.58 2.17-2.73-.95.57-2 .98-3.13 1.2-1.89-2.01-4.96-2.07-6.92-.12a4.912 4.912 0 00-1.44 3.48c0 .38.04.76.12 1.13-3.97-.2-7.49-2.1-9.85-5a4.912 4.912 0 001.52 6.57c-.77-.02-1.51-.23-2.16-.6v.06c0 2.38 1.69 4.39 3.93 4.84-.74.2-1.52.23-2.28.08.66 2.05 2.56 3.46 4.7 3.5-2.22 1.74-4.97 2.69-7.79 2.68-.5 0-.99-.03-1.48-.09 2.87 1.84 6.22 2.82 9.64 2.82 11.57 0 17.89-9.59 17.89-17.89v-.82c.99-.71 1.85-1.6 2.53-2.61z"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-primary">Sitemap</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing Rates</a></li>
            <li><a href="#before-after" className="hover:text-primary transition-colors">Gallery</a></li>
          </ul>
        </div>

        {/* Legal & Contacts */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-primary">Contact Desk</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+18005553569" className="hover:text-primary transition-colors font-semibold text-white">+1 (800) 555-3569</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:support@flowfix.com" className="hover:text-primary transition-colors">support@flowfix.com</a>
            </li>
            <li className="flex items-center gap-2 bg-red-500/10 text-red-400 p-2 rounded-xl border border-red-500/15 w-fit">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>License: #L-9281-A</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-primary">Maintenance Newsletter</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Get quarterly water-saving upgrades tips and preventive plumbing checks.
          </p>
          
          {subscribed ? (
            <div className="text-xs text-green-400 font-bold bg-green-500/10 p-3 rounded-xl border border-green-500/15">
              🎉 Subscribed! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-primary flex-grow"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-primary text-dark-navy flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom info */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} FlowFix Plumbing LLC. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Accessibility Compliancy</a>
        </div>
      </div>
    </footer>
  );
}
