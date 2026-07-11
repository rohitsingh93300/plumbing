import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Wrench, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Message {
  sender: 'user' | 'assistant' | 'system';
  agentName?: string;
  text: string;
  options?: string[];
  timestamp: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      agentName: 'Customer Support Agent',
      text: "Hello! I am FlowFix AI. How can I help you today? Select an option or type your request below.",
      options: [
        'Estimate Repair Cost',
        'Book Plumbing Appointment',
        'Report Water Leak Emergency',
        'Get Maintenance Tips',
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeAgent]);

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  const simulateAgentWorkflow = async (userText: string) => {
    const timestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const textLower = userText.toLowerCase();

    // 1. Cost Estimator flow
    if (textLower.includes('estimate') || textLower.includes('cost') || textLower.includes('pricing') || textLower.includes('price')) {
      setActiveAgent('Cost Estimator Agent');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      addMessage({
        sender: 'assistant',
        agentName: 'Cost Estimator Agent',
        text: "Based on local plumbing standards, basic repairs average $89-$179, while water heater maintenance spans $150-$300. To get an exact quote, what plumbing fixture is leaking? (e.g., Faucet, Shower, Toilet, Water Heater)",
        options: ['Faucet Leak', 'Toilet Backup', 'Water Heater Repair', 'Main Sewer Line'],
        timestamp: timestamp(),
      });
      setActiveAgent(null);
      return;
    }

    // 2. Emergency Detection Flow
    if (textLower.includes('leak') || textLower.includes('emergency') || textLower.includes('burst') || textLower.includes('flood') || textLower.includes('water flowing')) {
      setActiveAgent('Emergency Detection Agent');
      await new Promise((resolve) => setTimeout(resolve, 1200));

      addMessage({
        sender: 'system',
        text: "⚠️ [Emergency Detection Agent] classified urgency: CRITICAL HIGH. Water overflow danger detected.",
        timestamp: timestamp(),
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setActiveAgent('Technician Dispatch Agent');
      await new Promise((resolve) => setTimeout(resolve, 1500));

      addMessage({
        sender: 'assistant',
        agentName: 'Technician Dispatch Agent',
        text: "🚨 Alert! Dispatched Technician T-04 in an emergency service vehicle. Nearest location: Austin Sector 4. ETA is 12 minutes! Please locate your main shutoff valve immediately. Would you like a step-by-step shutoff guide?",
        options: ['Show Shutoff Guide', 'Call Dispatch Team Now'],
        timestamp: timestamp(),
      });
      setActiveAgent(null);
      return;
    }

    // 3. Booking Wizard Flow
    if (textLower.includes('book') || textLower.includes('appointment') || textLower.includes('schedule')) {
      setActiveAgent('Booking Agent');
      await new Promise((resolve) => setTimeout(resolve, 1200));

      addMessage({
        sender: 'assistant',
        agentName: 'Booking Agent',
        text: "I can check technician calendars for you. Which day works best for your plumbing visit?",
        options: ['Today (Urgent)', 'Tomorrow morning', 'This Saturday'],
        timestamp: timestamp(),
      });
      setActiveAgent(null);
      return;
    }

    // 4. Maintenance / Recommendations Flow
    if (textLower.includes('tip') || textLower.includes('maintenance') || textLower.includes('preventive')) {
      setActiveAgent('Maintenance Recommendation Agent');
      await new Promise((resolve) => setTimeout(resolve, 1500));

      addMessage({
        sender: 'assistant',
        agentName: 'Maintenance Recommendation Agent',
        text: "🔧 Preventive Tip: Drain your water heater tank annually to flush sediment buildup. This boosts heating efficiency by 15% and prevents tank bursts. Would you like to sign up for our Annual Maintenance Plan ($149/yr)?",
        options: ['Sign Up for Plan', 'Show More Tips'],
        timestamp: timestamp(),
      });
      setActiveAgent(null);
      return;
    }

    // 5. General Booking confirmations (Specific button options)
    if (textLower.includes('faucet leak') || textLower.includes('toilet backup') || textLower.includes('heater repair')) {
      setActiveAgent('Lead Qualification Agent');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addMessage({
        sender: 'assistant',
        agentName: 'Lead Qualification Agent',
        text: "Got it. I have qualified this as a standard plumbing lead. To confirm scheduling, please enter your contact phone number below.",
        timestamp: timestamp(),
      });
      setActiveAgent(null);
      return;
    }

    if (textLower.match(/^\d{10}$/) || textLower.includes('phone') || textLower.includes('number') || textLower.match(/^[+]?[0-9\s-]{7,15}$/)) {
      setActiveAgent('Booking Agent');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
      
      addMessage({
        sender: 'assistant',
        agentName: 'Booking Agent',
        text: "🎉 Appointment confirmed! Code: #FIX-4091. A licensed plumber is assigned. You will receive a live GPS tracking link shortly. Review Collection Agent will contact you post-job. Thank you!",
        timestamp: timestamp(),
      });
      setActiveAgent(null);
      return;
    }

    if (textLower.includes('guide')) {
      addMessage({
        sender: 'assistant',
        agentName: 'Customer Support Agent',
        text: "🔧 WATER MAIN SHUTOFF GUIDE:\n1. Locate the valve (usually in basement, crawlspace, or outdoor utility box near street).\n2. Gate valves: Turn clockwise until tight.\n3. Ball valves: Turn handle 90 degrees perpendicular to the pipe direction.",
        timestamp: timestamp(),
      });
      return;
    }

    // Default FAQ / Support Agent
    setActiveAgent('Customer Support Agent');
    await new Promise((resolve) => setTimeout(resolve, 1200));

    addMessage({
      sender: 'assistant',
      agentName: 'Customer Support Agent',
      text: "I've passed your question to our Customer Support Agent. We specialize in hot water, sewer clearance, and pipe replacements. Let me know if you'd like to book a dispatch!",
      options: ['Book Appointment', 'Ask Another Question'],
      timestamp: timestamp(),
    });
    setActiveAgent(null);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    addMessage(userMsg);
    setInputValue('');
    simulateAgentWorkflow(text);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <>
      {/* Floating Water-Drop Launcher */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-dark-navy flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-40 group cursor-pointer"
        >
          {/* Water Droplet outline inside launcher */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-dark-navy/10 rounded-full animate-ping opacity-40"></div>
          <MessageSquare className="w-7 h-7 fill-current text-dark-navy" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-dark-navy animate-pulse"></span>
          
          {/* Floating Help bubble hint */}
          <div className="absolute right-20 bg-dark-navy dark:bg-dark-card text-white dark:text-gray-100 text-xxs font-bold py-1.5 px-3 rounded-xl border border-white/10 shadow-lg hidden group-hover:block whitespace-nowrap">
            FlowFix Plumber Agent AI
          </div>
        </button>
      )}

      {/* Expanded Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[340px] sm:w-[380px] h-[520px] rounded-3xl border border-dark-navy/15 dark:border-white/15 bg-white dark:bg-dark-card shadow-2xl overflow-hidden flex flex-col justify-between z-50 animate-fade-in">
          {/* Header */}
          <div className="bg-primary px-5 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-dark-navy text-primary flex items-center justify-center shadow-inner relative">
                <Bot className="w-6 h-6" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-dark-navy rounded-full"></span>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-dark-navy flex items-center gap-1.5">
                  FlowFix Dispatch AI
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </h3>
                <span className="text-[10px] text-dark-navy/60 font-semibold uppercase">Multi-Agent Engine Active</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-xl bg-dark-navy/10 hover:bg-dark-navy/20 text-dark-navy flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-dark-blue/30">
            {messages.map((msg, idx) => {
              const isAssistant = msg.sender === 'assistant';
              const isSystem = msg.sender === 'system';

              return (
                <div key={idx} className={`flex flex-col ${isAssistant ? 'items-start' : isSystem ? 'items-center' : 'items-end'}`}>
                  {/* Agent identity tag */}
                  {isAssistant && msg.agentName && (
                    <span className="text-[9px] font-bold text-primary uppercase ml-3 mb-1 flex items-center gap-1">
                      <Bot className="w-3 h-3" />
                      {msg.agentName}
                    </span>
                  )}

                  {/* Bubble content */}
                  {isSystem ? (
                    <div className="bg-amber-500/10 dark:bg-primary/5 text-amber-600 dark:text-primary text-[10px] py-1.5 px-3 rounded-lg border border-amber-500/20 max-w-[90%] text-center font-medium">
                      {msg.text}
                    </div>
                  ) : (
                    <div
                      className={`text-xs p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                        isAssistant
                          ? 'bg-white dark:bg-dark-card border border-dark-navy/5 dark:border-white/5 text-dark-navy dark:text-gray-100 rounded-tl-sm shadow-sm'
                          : 'bg-primary text-dark-navy font-medium rounded-tr-sm shadow-sm'
                      }`}
                    >
                      {msg.text.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className={lIdx > 0 ? 'mt-1' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  {!isSystem && <span className="text-[8px] text-dark-navy/30 dark:text-white/20 mt-1 mx-1.5">{msg.timestamp}</span>}

                  {/* Button Options */}
                  {isAssistant && msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-3 max-w-[90%]">
                      {msg.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-white hover:bg-primary/10 dark:bg-dark-blue dark:hover:bg-primary/20 text-xxs font-semibold border border-dark-navy/10 dark:border-white/10 hover:border-primary text-dark-navy dark:text-gray-300 hover:text-primary px-3 py-1.5 rounded-full shadow-sm transition-all cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Active typing loader */}
            {activeAgent && (
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-bold text-primary uppercase ml-3 mb-1 animate-pulse flex items-center gap-1">
                  <Wrench className="w-3 h-3 animate-spin" />
                  {activeAgent} thinking...
                </span>
                <div className="bg-white dark:bg-dark-card border border-dark-navy/5 dark:border-white/5 p-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Form Input */}
          <div className="p-3 bg-white dark:bg-dark-card border-t border-dark-navy/10 dark:border-white/5 flex gap-2">
            <input
              type="text"
              placeholder="Ask a question or report leaks..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              className="flex-grow px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-blue text-xs text-dark-navy dark:text-white focus:outline-none focus:border-primary border border-dark-navy/10 dark:border-white/10"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="w-9 h-9 rounded-xl bg-primary text-dark-navy flex items-center justify-center hover:scale-105 transition-transform shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4 text-dark-navy" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
