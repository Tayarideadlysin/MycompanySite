import React from 'react';
import { Terminal, View } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative">
        {/* The "Dev" part: A solid terminal box */}
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-200 group-hover:bg-indigo-500 transition-colors">
          <Terminal size={22} strokeWidth={2.5} />
        </div>
        
        {/* The "Vision" part: A floating lens/eye indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center">
           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
          DEV<span className="text-indigo-600">VISION</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-none mt-1">
          Digital Studio
        </span>
      </div>
    </div>
  );
}