
import React from 'react';

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-white py-[64px] lg:py-[96px] overflow-hidden">
      <div className="mx-[28px] md:mx-[40px] lg:mx-[72px] xl:mx-auto max-w-[1456px]">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[28px] md:gap-x-[40px] lg:gap-x-[48px] xl:gap-x-[64px]">
          
          {/* Spacer Column 1 */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Visual Content (Left Side) - Aligned to match text layout above */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 self-center mb-[48px] lg:mb-0">
            <div className="bg-[#d2e3fc] rounded-[48px] p-8 lg:p-12 xl:p-16 flex items-center justify-center w-full aspect-square lg:aspect-auto min-h-[400px] lg:min-h-[520px]">
               <div className="bg-white rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] w-full max-w-[360px] p-8 relative overflow-hidden flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-center gap-2 mb-8">
                     <div className="w-5 h-5 flex items-center justify-center border border-gray-200 rounded text-[10px] text-gray-400">←</div>
                     <span className="text-[12px] text-[#5f6368] font-medium font-['Roboto']">Business Profile Performance</span>
                     <span className="ml-auto text-gray-300">⋮</span>
                  </div>

                  {/* Time Period Label */}
                  <div className="mb-8">
                     <div className="text-[#5f6368] text-[10px] font-bold uppercase tracking-[0.08em] mb-3 font-['Roboto']">Time period</div>
                     <div className="h-10 bg-gray-50 border border-gray-100 rounded-xl w-full flex items-center px-4 justify-between">
                        <div className="flex items-center gap-3">
                           <span className="text-gray-400 text-[14px]">📅</span>
                           <div className="h-2 bg-gray-200 w-32 rounded-full opacity-50"></div>
                        </div>
                        <span className="text-[10px] text-gray-400">▼</span>
                     </div>
                  </div>

                  {/* Stats Content */}
                  <div className="mb-4 text-center">
                     <div className="relative inline-block px-1 mb-6">
                        <div className="text-[12px] text-[#1a73e8] font-medium google-sans">All interactions</div>
                        <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#1a73e8] rounded-full"></div>
                     </div>
                     <div className="text-[56px] lg:text-[64px] font-normal text-[#202124] leading-tight mb-1 font-['Product_Sans']">8,210</div>
                     <div className="text-[13px] text-[#5f6368] font-normal font-['Roboto']">Business Profile interactions</div>
                  </div>

                  {/* Line Chart Mockup */}
                  <div className="relative h-28 w-full mt-6">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <path 
                        d="M 0 35 C 10 38, 25 38, 35 32 C 45 25, 55 35, 65 37 C 75 40, 90 25, 100 10" 
                        fill="none" 
                        stroke="#1a73e8" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                      />
                      <circle cx="100" cy="10" r="3" fill="#1a73e8" />
                    </svg>
                  </div>
               </div>
            </div>
          </div>

          {/* Spacer between Visual and Text */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Text Content (Right Side) */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4 self-center">
            <h2 className="text-[#202124] text-[48px] font-normal leading-[1.16667] tracking-[-.5px] font-['Product_Sans'] mb-6">
              <span className="font-medium">Know how customers find your business</span>
            </h2>
            <div className="text-[#3c4043] text-[16px] leading-[1.5] font-normal tracking-[.1px] font-['Roboto']">
              Discover what keywords people search to find you, and get insights on calls, reviews, bookings, and more to understand how your business connects with customers.
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
