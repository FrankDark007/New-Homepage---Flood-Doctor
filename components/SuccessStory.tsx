
import React from 'react';

export const SuccessStory: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-[#202124] text-center mb-16">What success looks like</h2>
      <div className="bg-[#f8f9fa] rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 p-16 flex flex-col justify-center items-center text-center">
          <blockquote className="text-2xl font-bold text-[#202124] mb-8 leading-relaxed max-w-md italic">
            "I always asked customers, 'What made you call me?' and oftentimes they tell me, 'We reached out because of your Business Profile on Google.'"
          </blockquote>
          <div className="text-sm font-bold text-[#202124]">Detroit Voltage</div>
          <div className="text-xs text-[#5f6368] mb-8">Detroit, Michigan</div>
          <button className="flex items-center gap-2 text-[#1a73e8] font-bold">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
               <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
            </div>
            Watch Story
          </button>
        </div>
        <div className="flex-1 relative aspect-video md:aspect-auto">
          <img 
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=600" 
            className="w-full h-full object-cover" 
            alt="Success Story" 
          />
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-4 items-center">
         <span className="text-xs text-gray-400">1 / 4</span>
         <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">←</button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600">→</button>
         </div>
      </div>
    </section>
  );
};
