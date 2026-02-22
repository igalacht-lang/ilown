
import React, { useState } from 'react';
import { AppTab } from './types';
import Dashboard from './components/Dashboard';
import Market from './components/Market';
import NewsFeed from './components/NewsFeed';
import Community from './components/Community';
import { LayoutDashboard, TrendingUp, Newspaper, Users } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.DASHBOARD: return <Dashboard />;
      case AppTab.MARKET: return <Market />;
      case AppTab.NEWS: return <NewsFeed />;
      case AppTab.COMMUNITY: return <Community />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5F9] text-[#1E293B] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/40 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative group">
            {/* Using the logo image provided by the user */}
            <img 
              src="https://api.dicebear.com/7.x/initials/svg?seed=IL&backgroundColor=0038B8" 
              className="hidden" 
              alt="logo-placeholder"
            />
            {/* Visual representation of the logo provided in the prompt */}
            <div className="w-12 h-12 flex items-center justify-center relative">
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0038B8" />
                    <stop offset="100%" stopColor="#00D2FF" />
                  </linearGradient>
                </defs>
                <path d="M50 10 L85 70 L15 70 Z" fill="none" stroke="url(#logoGrad)" strokeWidth="4" />
                <path d="M50 90 L85 30 L15 30 Z" fill="none" stroke="url(#logoGrad)" strokeWidth="4" />
                <path d="M30 80 Q 50 20 80 15" stroke="url(#logoGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
                <circle cx="80" cy="15" r="4" fill="#00D2FF" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter text-[#0038B8] leading-none">ILown</span>
            <span className="text-[9px] uppercase font-extrabold text-[#64748B] tracking-[0.2em] mt-1">Know. Own. Grow.</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end mr-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Equity Value</span>
            <span className="text-sm font-black text-blue-700">$1,245.50</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden transition-transform active:scale-95 cursor-pointer">
            <img src="https://picsum.photos/seed/fintech/100" alt="profile" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-28 max-w-2xl mx-auto w-full px-5 pt-6">
        {renderContent()}
      </main>

      {/* Navigation Bar - Floating Fintech Style */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
        <nav className="glass bg-white/80 border border-white/60 rounded-[2rem] shadow-2xl shadow-blue-900/10 flex justify-around items-center py-3 px-2">
          <button 
            onClick={() => setActiveTab(AppTab.DASHBOARD)}
            className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-all ${activeTab === AppTab.DASHBOARD ? 'bg-blue-600 text-white shadow-lg shadow-blue-300' : 'text-slate-400 hover:text-blue-500'}`}
          >
            <LayoutDashboard size={20} />
            <span className="text-[9px] font-black uppercase tracking-widest">Dash</span>
          </button>
          <button 
            onClick={() => setActiveTab(AppTab.MARKET)}
            className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-all ${activeTab === AppTab.MARKET ? 'bg-blue-600 text-white shadow-lg shadow-blue-300' : 'text-slate-400 hover:text-blue-500'}`}
          >
            <TrendingUp size={20} />
            <span className="text-[9px] font-black uppercase tracking-widest">Market</span>
          </button>
          <button 
            onClick={() => setActiveTab(AppTab.NEWS)}
            className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-all ${activeTab === AppTab.NEWS ? 'bg-blue-600 text-white shadow-lg shadow-blue-300' : 'text-slate-400 hover:text-blue-500'}`}
          >
            <Newspaper size={20} />
            <span className="text-[9px] font-black uppercase tracking-widest">News</span>
          </button>
          <button 
            onClick={() => setActiveTab(AppTab.COMMUNITY)}
            className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-all ${activeTab === AppTab.COMMUNITY ? 'bg-blue-600 text-white shadow-lg shadow-blue-300' : 'text-slate-400 hover:text-blue-500'}`}
          >
            <Users size={20} />
            <span className="text-[9px] font-black uppercase tracking-widest">Social</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
