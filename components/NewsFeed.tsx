
import React, { useEffect, useState } from 'react';
import { MOCK_NEWS } from '../constants';
import { Sparkles, Clock, ExternalLink } from 'lucide-react';
import { getEconomySummary } from '../services/geminiService';

const NewsFeed: React.FC = () => {
  const [aiSummary, setAiSummary] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      const summary = await getEconomySummary();
      setAiSummary(summary || '');
      setLoading(false);
    };
    fetchSummary();
  }, []);

  return (
    <div className="space-y-6">
      {/* AI Briefing */}
      <section className="bg-white p-6 rounded-[2rem] border-2 border-blue-50 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-2xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
          <Sparkles size={12} />
          Smart Briefing
        </div>
        <div className="mt-4">
          {loading ? (
             <div className="animate-pulse space-y-2">
               <div className="h-4 bg-slate-100 rounded w-3/4"></div>
               <div className="h-4 bg-slate-100 rounded w-full"></div>
               <div className="h-4 bg-slate-100 rounded w-5/6"></div>
             </div>
          ) : (
            <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap font-medium">
              {aiSummary}
            </div>
          )}
        </div>
      </section>

      {/* Main News */}
      <div className="space-y-4">
        <h3 className="text-xl font-black">Economic Pulse</h3>
        {MOCK_NEWS.map((item) => (
          <article key={item.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-100 transition-all group">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                {item.category}
              </span>
              <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold">
                <Clock size={12} />
                {item.time}
              </div>
            </div>
            <h4 className="font-black text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
              {item.summary}
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
              <span className="text-xs font-bold text-slate-400">Source: {item.source}</span>
              <button className="text-blue-600 font-bold text-xs flex items-center gap-1">
                Read More
                <ExternalLink size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
