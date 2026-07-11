import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Emergency', 'Preventive', 'Upgrades', 'Commercial'];

  const posts: BlogPost[] = [
    {
      title: 'How to Locate and Shut Off Your Main Water Valve',
      excerpt: 'In a burst pipe emergency, seconds count. Here is a step-by-step guide to finding your main valve and turning it off.',
      category: 'Emergency',
      date: 'July 10, 2026',
      author: 'Master Plumber Dave',
      readTime: '4 min read',
      slug: 'how-to-shut-off-main-water-valve'
    },
    {
      title: '5 Signs Your Water Heater is About to Fail',
      excerpt: 'Do not wait for a freezing shower. Watch out for these warning signs including rust colors, rumbling noises, and temperature fluctuations.',
      category: 'Upgrades',
      date: 'June 28, 2026',
      author: 'Tech Lead Sarah',
      readTime: '6 min read',
      slug: 'signs-water-heater-failure'
    },
    {
      title: 'Preventing Clogged Drains: What NOT to Wash Down the Sink',
      excerpt: 'Eggshells, coffee grounds, and grease form a solid clog. Learn simple kitchen habits to keep your pipes flowing clean.',
      category: 'Preventive',
      date: 'May 15, 2026',
      author: 'Drain Expert Mike',
      readTime: '3 min read',
      slug: 'prevent-clogged-drains'
    },
    {
      title: 'Commercial Backflow Testing: Why it is Legally Required',
      excerpt: 'Understand state safety codes on backflow prevention and how regular testing protects clean city drinking water.',
      category: 'Commercial',
      date: 'April 02, 2026',
      author: 'Compliance Inspector Ray',
      readTime: '5 min read',
      slug: 'commercial-backflow-testing'
    },
    {
      title: 'Eco-Friendly Plumbing Upgrades That Lower Water Bills',
      excerpt: 'Discover high-efficiency showerheads, dual-flush toilets, and tankless water heaters that pay for themselves.',
      category: 'Upgrades',
      date: 'March 18, 2026',
      author: 'Green Living Alice',
      readTime: '5 min read',
      slug: 'eco-friendly-plumbing-upgrades'
    }
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-24 bg-white dark:bg-dark-navy relative overflow-hidden">
      {/* Light border top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-navy/10 dark:via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">Expert Insights</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white leading-tight">
              FlowFix Educational Plumbing Hub
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-dark-navy/40 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search plumbing articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-dark-blue border border-dark-navy/10 dark:border-white/10 text-dark-navy dark:text-white focus:outline-none focus:border-primary text-sm shadow-inner"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-dark-navy shadow-md shadow-primary/20'
                  : 'bg-gray-50 dark:bg-dark-card border border-dark-navy/10 dark:border-white/5 text-dark-navy dark:text-gray-400 hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-dark-navy/15 dark:border-white/10 bg-white dark:bg-dark-card overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="h-44 bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5 flex items-center justify-center p-6 border-b border-dark-navy/5 dark:border-white/5 relative">
                  <BookOpen className="w-12 h-12 text-primary opacity-80" />
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase bg-primary/20 dark:bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="absolute bottom-4 right-4 text-xxs font-semibold text-dark-navy/50 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex gap-4 text-xxs text-dark-navy/40 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-dark-navy dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-dark-navy/70 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline mt-auto cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-dark-card rounded-3xl border border-dashed border-dark-navy/10 dark:border-white/10">
            <p className="text-dark-navy/50 dark:text-gray-400">No blog posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
