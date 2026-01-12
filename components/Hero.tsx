
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col md:flex-row items-center gap-16 relative">
      <div className="flex-1 text-center md:text-left z-10">
        <h1 className="text-[48px] md:text-[56px] lg:text-[72px] font-bold text-[#202124] mb-8 leading-[1.1] tracking-tight">
          <span className="text-[#1a73e8]">Stand out</span> on Google with a free Business Profile
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#5f6368] mb-10 max-w-xl leading-[1.6]">
          Turn people who find you on Google Search and Maps into new customers with a free Business Profile for your storefront or service area. Personalize your profile with photos, offers, posts, and more.
        </p>
        <button className="btn-blue px-10 py-3.5 rounded-full text-[16px] font-medium shadow-md">
          Start now
        </button>
      </div>

      <div className="flex-1 flex justify-center md:justify-end relative">
        {/* Phone Mockup Container */}
        <div className="relative w-[340px] h-[680px] bg-white rounded-[2.8rem] shadow-2xl border-[1px] border-gray-100 flex flex-col overflow-visible">
          {/* Internal Content */}
          <div className="flex flex-col items-center pt-32 px-6 h-full bg-white rounded-[2.8rem]">
            {/* Google Logo */}
            <div className="flex items-center gap-1 mb-12">
               <span className="text-4xl font-medium tracking-tight" style={{fontFamily: "'Product Sans', sans-serif"}}>
                 <span className="text-[#4285F4]">G</span>
                 <span className="text-[#EA4335]">o</span>
                 <span className="text-[#FBBC05]">o</span>
                 <span className="text-[#4285F4]">g</span>
                 <span className="text-[#34A853]">l</span>
                 <span className="text-[#EA4335]">e</span>
               </span>
            </div>

            {/* Mock Search Bar */}
            <div className="relative w-[130%] -left-[15%] flex items-center shadow-xl rounded-full overflow-hidden bg-white border border-gray-100">
               <div className="flex-1 px-6 py-4 text-sm text-[#70757a] font-normal">
                 Electricians near me<span className="text-[#4285F4] animate-pulse">|</span>
               </div>
               <div className="bg-[#1a73e8] p-4 flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="11" cy="11" r="8"></circle>
                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                 </svg>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Pause Button as seen in screenshot */}
        <div className="absolute bottom-10 -right-8 w-10 h-10 bg-[#5f6368] rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-gray-700 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </div>
      </div>
    </section>
  );
};
