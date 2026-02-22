
import React from 'react';
import { Send, MessageSquare, Share2, Users, ArrowUpRight } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-3xl font-black text-slate-900">Our Community</h2>
        <p className="text-slate-500 font-medium mt-2">Join the conversation & earn equity</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a 
          href="https://t.me/ilown" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0088cc] p-6 rounded-[2.5rem] text-white shadow-lg shadow-blue-200 flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:scale-95"
        >
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <Send size={32} className="fill-white" />
          </div>
          <span className="font-black text-lg tracking-tight">Telegram</span>
          <span className="text-[10px] font-bold uppercase opacity-80">Private Discussion</span>
        </a>

        <a 
          href="https://reddit.com/r/ILown" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FF4500] p-6 rounded-[2.5rem] text-white shadow-lg shadow-orange-200 flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:scale-95"
        >
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <MessageSquare size={32} className="fill-white" />
          </div>
          <span className="font-black text-lg tracking-tight">Reddit</span>
          <span className="text-[10px] font-bold uppercase opacity-80">Investor Forum</span>
        </a>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <h4 className="font-black text-lg">Investing Social Hubs</h4>
            <p className="text-sm text-slate-400 font-medium">Learning communities by sector</p>
          </div>
        </div>

        <div className="space-y-4">
          {['Cybersecurity', 'Food-Tech', 'Agro-Tech', 'Artificial Intelligence'].map((topic) => (
            <div key={topic} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-blue-50 transition-colors">
              <span className="font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{topic}</span>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                      <img src={`https://picsum.photos/seed/${topic}${i}/50`} alt="user" />
                    </div>
                  ))}
                </div>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-slate-900 text-white p-6 rounded-3xl font-black flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
        <Share2 size={20} />
        Invite Friends & Claim Genesis Grant
      </button>
    </div>
  );
};

export default Community;
