
import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { MOCK_STOCKS, AFFINITY_TASKS, IMPACT_PROJECTS } from '../constants';
import { ArrowUpRight, CheckCircle2, Award, Zap, ChevronRight, Heart, X, Check } from 'lucide-react';

const data = [
  { name: 'Sun', value: 400 },
  { name: 'Mon', value: 300 },
  { name: 'Tue', value: 600 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 1245 },
];

const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof IMPACT_PROJECTS[0] | null>(null);
  const [isDonated, setIsDonated] = useState(false);

  const handleDonate = () => {
    setIsDonated(true);
    setTimeout(() => {
      setIsDonated(false);
      setSelectedProject(null);
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Portfolio Card */}
      <section className="bg-[#002B8F] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-900/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full -ml-24 -mb-24 blur-[60px]"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em]">Equity Portfolio</p>
              <h2 className="text-5xl font-black mt-2 tracking-tighter">$1,245.50</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-[10px] font-black text-emerald-300">+12.4%</span>
            </div>
          </div>
        </div>

        <div className="mt-10 h-36 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D2FF" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#00D2FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#00D2FF" 
                strokeWidth={4} 
                fillOpacity={1} 
                fill="url(#chartGrad)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* My Assets - Moved Up */}
      <section>
        <div className="flex justify-between items-center mb-5 px-1">
          <h3 className="text-lg font-black text-slate-900">Your Holdings</h3>
          <button className="text-blue-600 font-black text-xs uppercase tracking-widest">Manage</button>
        </div>
        <div className="space-y-3">
          {MOCK_STOCKS.filter(s => s.owned > 0).map((stock) => (
            <div key={stock.symbol} className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm flex justify-between items-center hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-50 rounded-[1.2rem] flex items-center justify-center font-black text-xl text-blue-800 border border-slate-100 shadow-inner">
                  {stock.symbol[0]}
                </div>
                <div>
                  <h4 className="font-black text-base text-slate-900 leading-tight">{stock.symbol}</h4>
                  <p className="text-xs text-slate-400 font-medium">{stock.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-base text-slate-900">{stock.owned} Shares</p>
                <p className="text-[11px] text-emerald-500 font-extrabold uppercase tracking-tighter">Value: ${(stock.owned * stock.price).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof of Affinity (PoA) Section - Moved below Holdings */}
      <section>
        <div className="flex justify-between items-center mb-5 px-1">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Zap className="text-blue-600 fill-blue-600" size={18} />
            PoA Mechanism
          </h3>
          <button className="text-blue-600 font-black text-xs uppercase tracking-widest">History</button>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {AFFINITY_TASKS.map((task) => (
            <div key={task.id} className="group bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all active:scale-[0.99] cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${task.completed ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                  {task.completed ? <CheckCircle2 size={24} /> : <Award size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{task.title}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">+{task.points} AP</span>
                    <span className="text-[10px] text-slate-400 font-medium">Limited time</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Impact & Giving Section - At the bottom */}
      <section className="animate-in slide-in-from-right-4 duration-500 delay-150">
        <div className="flex justify-between items-center mb-5 px-1">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Heart className="text-rose-500 fill-rose-500" size={18} />
            Impact & Giving
          </h3>
          <div className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
            Gains: $132.40 Available
          </div>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-1 px-1">
          {IMPACT_PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="flex-shrink-0 w-64 bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="h-28 relative overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg text-[9px] font-black text-slate-600 uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-black text-sm text-slate-900">{project.name}</h4>
                <p className="text-[11px] text-slate-400 font-medium mt-1 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <button className="mt-4 w-full bg-rose-50 group-hover:bg-rose-500 group-hover:text-white text-rose-600 text-[10px] font-black uppercase tracking-widest py-2 rounded-xl transition-all">
                  Donate Gains
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-slate-900/20">
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
            {isDonated ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-4">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Impact Made!</h3>
                <p className="text-slate-500 font-medium text-center">Your gains are now supporting <br/><strong>{selectedProject.name}</strong></p>
              </div>
            ) : (
              <>
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900">
                  <X size={24} />
                </button>
                <h3 className="text-xl font-black text-slate-900 mb-2">Confirm Impact</h3>
                <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
                  You are about to donate your capital gains ($132.40) to <strong>{selectedProject.name}</strong>. This action will contribute to the Growth of the Scale-Up Nation.
                </p>
                <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 mb-8">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Donation Amount</span>
                     <span className="text-lg font-black text-rose-600">$132.40</span>
                   </div>
                   <div className="h-1 bg-rose-200 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-full"></div>
                   </div>
                </div>
                <button 
                  onClick={handleDonate}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-rose-200 transition-all active:scale-95"
                >
                  Confirm & Support
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
