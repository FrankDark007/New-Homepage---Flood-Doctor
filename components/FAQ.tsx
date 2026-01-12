
import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#202124] mb-12">Your questions, answered</h2>
        <div className="flex justify-end mb-4">
           <button className="text-[#1a73e8] text-sm font-bold flex items-center gap-1">
             Expand all <span className="text-xs">⇅</span>
           </button>
        </div>
        <div className="border-t border-gray-200">
           <div className="py-8 flex justify-between items-center group cursor-pointer border-b border-gray-200">
             <span className="text-[#1a73e8] font-medium">Is a Business Profile on Google free?</span>
             <span className="text-[#1a73e8] text-xl transition-transform group-hover:translate-y-1">↓</span>
           </div>
           {/* Additional rows could be mapped here */}
        </div>
      </div>
    </section>
  );
};
