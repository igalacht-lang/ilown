
import React, { useState } from 'react';
import { MOCK_STOCKS } from '../constants';
import { Search, TrendingUp, TrendingDown, Sparkles, X, Info } from 'lucide-react';
import { getStockInsight } from '../services/geminiService';

const Market: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<typeof MOCK_STOCKS[0] | null>(null);
  const [insight, setInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState(false);

  const handleSelectStock = async (stock: typeof MOCK_STOCKS[0]) => {
    setSelectedStock(stock);
    setLoadingInsight(true);
    setInsight('');
    const result = await getStockInsight(stock.symbol);
    setInsight(result || '');
    setLoadingInsight(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
        <input 
          type="text" 
          placeholder="Search Israeli Innovation Hubs..."
          className="w-full bg-white border border-slate-200 rounded-[1.5rem] py-5 pl-14 pr-6 text-sm font-bold shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400 transition-all placeholder:text-slate-300"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h3 className="text-lg font-black text-slate-900">Market Explorer</h3>
          <div className="flex gap-2">
             <button className="bg-white border border-slate-100 px-3 py-1 rounded-lg text-[10px] font-black text-slate-500">NASDAQ</button>
             <button className="bg-white border border-slate-100 px-3 py-1 rounded-lg text-[10px] font-black text-slate-500">TASE</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {MOCK_STOCKS.map((stock) => (
            <button 
              key={stock.symbol}
              onClick={() => handleSelectStock(stock)}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm text-left hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center font-black text-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {stock.symbol[0]}
                   </div>
                   <div>
                     <h4 className="font-black text-lg text-slate-900 leading-none">{stock.symbol}</h4>
                     <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">{stock.sector}</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-xl text-slate-900 tracking-tighter">${stock.price}</p>
                  <div className={`flex items-center justify-end gap-1 text-[11px] font-black mt-1 ${stock.change >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stock.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {Math.abs(stock.change)}%
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedStock && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedStock(null)}></div>
          <div className="relative w-full max-w-lg bg-white rounded-t-[3rem] sm:rounded-[3rem] p-10 shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => setSelectedStock(null)}
              className="absolute top-8 right-8 w-11 h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-[1.5rem] flex items-center justify-center font-black text-3xl text-white shadow-lg shadow-blue-200">
                {selectedStock.symbol[0]}
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{selectedStock.name}</h2>
                <div className="flex gap-2 mt-1">
                  <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] bg-blue-50 px-2 py-0.5 rounded-md">{selectedStock.symbol}</span>
                  <span className="text-slate-400 font-black uppercase tracking-widest text-[10px] bg-slate-50 px-2 py-0.5 rounded-md">{selectedStock.sector}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-slate-900 font-black uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                  <Info size={14} className="text-blue-500" />
                  Corporate Profile
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{selectedStock.description}</p>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10">
                  <h4 className="text-blue-400 font-black flex items-center gap-2 mb-4 uppercase tracking-[0.2em] text-[10px]">
                    <Sparkles className="text-blue-400" size={16} />
                    ILown AI Strategy
                  </h4>
                  {loadingInsight ? (
                    <div className="flex items-center gap-2 h-12">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                    </div>
                  ) : (
                    <p className="text-white text-base leading-relaxed font-semibold italic">
                      "{insight}"
                    </p>
                  )}
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-5 rounded-[1.5rem] shadow-xl shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-3">
                <TrendingUp size={20} />
                Increase My Stake
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;
