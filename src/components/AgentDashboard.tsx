import { useState, useEffect } from 'react';
import { Bot, Terminal, TrendingUp, Users, DollarSign, Clock, ThumbsUp, Activity, Play, RefreshCw } from 'lucide-react';

interface AgentInfo {
  id: number;
  name: string;
  role: string;
  status: 'Idle' | 'Active' | 'Dispatched' | 'Analyzing';
  efficiency: string;
  metric: string;
}

export default function AgentDashboard() {
  const [logs, setLogs] = useState<string[]>([
    '[System] Initializing Multi-Agent Plumbing Dispatch Ecosystem...',
    '[System] Analytics Agent listening on sockets.',
    '[SEO Content Agent] Generated 4 local landing pages (Austin, TX region).',
    '[Review Collection Agent] Sent review request to Ticket #FIX-3902.',
    '[Customer Support Agent] Resolved plumbing FAQ on main water shutoff valve.',
  ]);

  const [revenue, setRevenue] = useState(9280);
  const [bookings, setBookings] = useState(48);
  const [convRate, setConvRate] = useState(14.8);
  const [isSimulating, setIsSimulating] = useState(true);

  const initialAgents: AgentInfo[] = [
    { id: 1, name: 'Customer Support Agent', role: 'Answers FAQs & queries', status: 'Idle', efficiency: '98.6%', metric: '180 queries/day' },
    { id: 2, name: 'Booking Agent', role: 'Schedules technician slots', status: 'Idle', efficiency: '99.4%', metric: '48 booked/day' },
    { id: 3, name: 'Cost Estimator Agent', role: 'Calculates project quotes', status: 'Idle', efficiency: '95.2%', metric: '35 quotes/day' },
    { id: 4, name: 'Emergency Detection Agent', role: 'Classifies pipeline risks', status: 'Idle', efficiency: '100%', metric: '0 missed leaks' },
    { id: 5, name: 'Lead Qualification Agent', role: 'Collects address/contact', status: 'Idle', efficiency: '92.1%', metric: '14.8% conv rate' },
    { id: 6, name: 'Technician Dispatch Agent', role: 'GPS routing and matching', status: 'Idle', efficiency: '97.8%', metric: '15m average ETA' },
    { id: 7, name: 'Maintenance Rec. Agent', role: 'Upsells service contracts', status: 'Idle', efficiency: '88.5%', metric: '8 upsells/day' },
    { id: 8, name: 'Review Collection Agent', role: 'Triggers post-job survey', status: 'Idle', efficiency: '94.0%', metric: '4.93 rating' },
    { id: 9, name: 'SEO Content Agent', role: 'Generates blog/keywords', status: 'Idle', efficiency: '96.5%', metric: '1,200 SEO index' },
    { id: 10, name: 'Analytics Agent', role: 'Aggregates data telemetry', status: 'Idle', efficiency: '100%', metric: 'Live tracking' },
  ];

  const [agents, setAgents] = useState<AgentInfo[]>(initialAgents);

  // Simulation loop
  useEffect(() => {
    if (!isSimulating) return;

    const logTemplates = [
      () => {
        const value = Math.floor(Math.random() * 200) + 80;
        setRevenue((prev) => prev + value);
        setBookings((prev) => prev + 1);
        setConvRate((prev) => parseFloat((prev + 0.1).toFixed(1)));
        return `[Analytics Agent] Verified Booking conversion: +$${value} revenue. Net Today: $${revenue + value}`;
      },
      () => {
        const id = Math.floor(Math.random() * 10) + 1;
        triggerAgentState(id, 'Analyzing', 2000);
        return `[Emergency Detection Agent] Auditing incoming user request. Classifying urgency: Medium.`;
      },
      () => {
        triggerAgentState(6, 'Dispatched', 4000);
        return `[Technician Dispatch Agent] Match found: Plumber Dave assigned to Austin Sector 3. Route optimized.`;
      },
      () => {
        triggerAgentState(8, 'Active', 2500);
        return `[Review Collection Agent] Ticket #FIX-3840 closed. Customer returned 5-star rating: "Fantastic water heater repair!"`;
      },
      () => {
        triggerAgentState(7, 'Active', 3000);
        return `[Maintenance Rec. Agent] Upsold Premium Annual Protection Plan to ticket #FIX-3941.`;
      },
      () => {
        triggerAgentState(9, 'Active', 1500);
        return `[SEO Content Agent] Crawling site index. Published new article: "How to prevent toilet valve corrosion".`;
      },
    ];

    const triggerAgentState = (agentId: number, tempStatus: AgentInfo['status'], duration: number) => {
      setAgents((prev) =>
        prev.map((a) => (a.id === agentId ? { ...a, status: tempStatus } : a))
      );
      setTimeout(() => {
        setAgents((prev) =>
          prev.map((a) => (a.id === agentId ? { ...a, status: 'Idle' } : a))
        );
      }, duration);
    };

    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * logTemplates.length);
      const newLog = logTemplates[randomIdx]();
      setLogs((prev) => [...prev.slice(-30), `${new Date().toLocaleTimeString()} - ${newLog}`]);
    }, 4500);

    return () => clearInterval(interval);
  }, [isSimulating, revenue]);

  const stats = [
    { label: 'Today Revenue', val: `$${revenue.toLocaleString()}`, change: '+18.4%', icon: <DollarSign className="w-5 h-5 text-green-500" /> },
    { label: 'Completed Jobs', val: bookings, change: '+12%', icon: <Users className="w-5 h-5 text-primary" /> },
    { label: 'Booking Conv. Rate', val: `${convRate}%`, change: '+2.4%', icon: <TrendingUp className="w-5 h-5 text-blue-500" /> },
    { label: 'Avg Dispatch ETA', val: '14.6 Mins', change: '-3.2m', icon: <Clock className="w-5 h-5 text-teal-500" /> },
    { label: 'Customer Rating', val: '4.93 / 5', change: '+0.02', icon: <ThumbsUp className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-blue min-h-screen relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3">AI Agent Dashboard</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-dark-navy dark:text-white leading-tight">
              Autonomous Dispatch Orchestration
            </p>
            <p className="text-xs text-dark-navy/60 dark:text-gray-400 mt-1">
              Engineered by FlowFix Analytics. Shows real-time simulated activities of 10 cooperating AI agents.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md cursor-pointer transition-all ${
                isSimulating ? 'bg-amber-500 text-white' : 'bg-green-500 text-white'
              }`}
            >
              {isSimulating ? <Activity className="w-4 h-4 animate-pulse" /> : <Play className="w-4 h-4" />}
              <span>{isSimulating ? 'Pause Telemetry' : 'Resume Telemetry'}</span>
            </button>
            <button
              onClick={() => {
                setRevenue(9280);
                setBookings(48);
                setConvRate(14.8);
                setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} - Reset dashboard telemetry.`]);
              }}
              className="bg-white dark:bg-dark-card border border-dark-navy/10 dark:border-white/5 hover:border-primary text-dark-navy dark:text-gray-300 p-2.5 rounded-xl shadow-sm cursor-pointer"
              title="Reset Stats"
            >
              <RefreshCw className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Telemetry Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-light dark:glass-dark rounded-2xl p-4 border border-dark-navy/5 dark:border-white/5 shadow-sm flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-extrabold uppercase text-dark-navy/40 dark:text-gray-400">{stat.label}</span>
                {stat.icon}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-dark-navy dark:text-white">{stat.val}</div>
                <span className="text-[10px] text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded-md mt-1 inline-block">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Console Log and Agent statuses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Agent grid statuses */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-md font-bold text-dark-navy dark:text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" /> Active Cooperating Agents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="glass-light dark:glass-dark rounded-2xl p-4 border border-dark-navy/5 dark:border-white/5 flex flex-col justify-between shadow-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xs font-extrabold text-dark-navy dark:text-white">{agent.name}</h4>
                      <p className="text-[10px] text-dark-navy/50 dark:text-gray-400 mt-0.5">{agent.role}</p>
                    </div>

                    {/* Status badge */}
                    <span
                      className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                        agent.status === 'Idle'
                          ? 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400'
                          : agent.status === 'Analyzing'
                          ? 'bg-amber-500/10 text-amber-500 animate-pulse'
                          : agent.status === 'Dispatched'
                          ? 'bg-red-500/10 text-red-500'
                          : 'bg-green-500/10 text-green-500'
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-t border-dark-navy/5 dark:border-white/5 pt-2.5 mt-2.5 text-xxs font-semibold">
                    <span className="text-dark-navy/40 dark:text-gray-400">Success: {agent.efficiency}</span>
                    <span className="text-primary">{agent.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Console Logs */}
          <div className="lg:col-span-4 flex flex-col h-full min-h-[460px]">
            <h3 className="text-md font-bold text-dark-navy dark:text-white flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-primary" /> Live Orchestrator Terminal
            </h3>

            <div className="flex-grow bg-dark-navy border border-white/10 rounded-3xl p-5 shadow-2xl font-mono text-[10px] sm:text-xs text-green-400 flex flex-col justify-between h-[420px] overflow-hidden">
              <div className="flex-grow overflow-y-auto space-y-2.5 scrollbar-none pr-1">
                {logs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed border-l-2 border-green-500/20 pl-2">
                    {log}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center text-xxs text-white/40">
                <span>Console Sockets Listening</span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
