
import React, { useState, useEffect, useRef } from 'react';

interface ListItem {
  title: string;
  desc?: string;
}

interface FeatureSectionProps {
  layout: 'text-left' | 'text-right';
  title: string;
  subtitle: string;
  listItems: ListItem[];
  visualType: 'attributes' | 'posts';
}

const CYCLE_DURATION = 5000;

export const FeatureSection: React.FC<FeatureSectionProps> = ({ layout, title, subtitle, listItems, visualType }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isLeft = layout === 'text-left';
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const currentProgress = (elapsed / CYCLE_DURATION) * 100;

      if (currentProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % listItems.length);
        setProgress(0);
        startTimeRef.current = time;
      } else {
        setProgress(currentProgress);
      }
      timerRef.current = requestAnimationFrame(animate);
    };

    timerRef.current = requestAnimationFrame(animate);
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [listItems.length]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  const StickySidebar = (
    <div className="col-span-4 md:col-span-8 lg:col-span-4 self-start lg:sticky lg:top-[calc(50vh-144px)] mb-12 lg:mb-0">
      <div className="flex flex-col">
        {listItems.map((item, i) => (
          <div 
            key={i} 
            className={`relative pl-[45px] lg:pl-[48px] cursor-pointer group transition-all duration-300 ${i !== 0 ? 'mt-8' : ''}`}
            onClick={() => handleItemClick(i)}
          >
            {/* Background progress line (#dadce0) */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#dadce0] z-[1]"></div>
            
            {/* Active progress line (#1a73e8) */}
            {activeIndex === i && (
              <div 
                className="absolute left-0 top-0 w-[2px] bg-[#1a73e8] z-[2] transition-all ease-linear"
                style={{ height: `${progress}%` }}
              ></div>
            )}
            
            <h4 className={`text-[28px] leading-[1.4] font-normal transition-all duration-300 origin-left google-sans ${
              activeIndex === i 
                ? 'text-[#202124] scale-100 opacity-100' 
                : 'text-[#5f6368] scale-[0.98] opacity-70 group-hover:text-[#202124] group-hover:opacity-100'
            }`}>
              {item.title}
            </h4>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-[16px] text-[#3c4043] leading-[1.5] font-normal tracking-[0.1px] font-['Roboto'] mt-3">
                {item.desc || "Learn how to optimize your profile and reach more customers locally."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const VisualContent = (
    <div className="col-span-4 md:col-span-8 lg:col-span-5 flex justify-center items-center">
      <div className="relative w-full max-w-[340px] aspect-[9/16] bg-white rounded-[2.8rem] shadow-2xl border border-gray-50 overflow-hidden">
        {visualType === 'attributes' ? (
          <div className="p-6 flex flex-col h-full bg-white">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-50 pb-6">
               <div className="w-14 h-14 bg-gray-100 rounded-xl"></div>
               <div className="flex-1 space-y-2">
                 <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                 <div className="h-2.5 bg-gray-50 rounded w-1/2"></div>
               </div>
            </div>
            <div className="flex-1 space-y-6">
              {activeIndex === 0 && <div className="animate-in fade-in slide-in-from-top-2 duration-500 space-y-5">
                {[1,2].map(i => (
                  <div key={i} className="p-5 border border-gray-100 rounded-2xl shadow-sm">
                    <div className="h-2.5 bg-blue-100 w-1/4 rounded mb-4"></div>
                    <div className="h-4 bg-gray-50 w-full rounded"></div>
                  </div>
                ))}
              </div>}
              {activeIndex === 1 && <div className="animate-in zoom-in-95 duration-500 grid grid-cols-2 gap-4">
                {[1,2,3,4].map(i => <div key={i} className="aspect-square bg-gray-100 rounded-2xl"></div>)}
              </div>}
              {activeIndex === 2 && <div className="animate-in slide-in-from-bottom-6 duration-500 bg-gray-50 rounded-[2rem] p-6 space-y-6">
                {['LGBTQ+ friendly', 'Identifies as veteran-led', 'Identifies as women-led'].map((label, idx) => (
                  <div key={label} className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className={`w-7 h-7 rounded-full ${idx === 0 ? 'bg-gradient-to-r from-red-500 via-green-500 to-purple-500' : idx === 1 ? 'bg-blue-600' : 'bg-pink-500'}`}></div>
                    <span className="text-[13px] font-bold text-gray-700">{label}</span>
                  </div>
                ))}
              </div>}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full bg-white">
            <div className="p-6 border-b border-gray-50 bg-gray-50 flex items-center justify-between">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-32 h-2.5 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
            <div className="p-6 flex-1">
               {activeIndex === 0 && <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                    <div className="flex-1"><div className="h-4 bg-gray-200 w-32 rounded mb-2"></div><div className="h-2.5 bg-gray-100 w-24 rounded"></div></div>
                  </div>
                  <div className="aspect-[1.5/1] bg-gray-100 rounded-[1.5rem] mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Post" />
                  </div>
                  <div className="space-y-3 mb-10"><div className="h-4 bg-gray-100 rounded w-full"></div><div className="h-4 bg-gray-100 rounded w-4/5"></div></div>
                  <button className="w-full py-3.5 rounded-full border border-blue-500 text-blue-600 text-[13px] font-bold">ORDER ONLINE</button>
               </div>}
               {activeIndex === 1 && <div className="animate-in slide-in-from-right-6 duration-500 space-y-6">
                  <div className="h-8 w-3/4 bg-gray-50 rounded-xl"></div>
                  <div className="p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100 shadow-sm">
                    <div className="flex justify-between mb-4"><div className="h-4 bg-gray-200 w-28 rounded"></div><div className="text-yellow-400 text-xs">★★★★★</div></div>
                    <div className="h-3 bg-gray-100 w-full rounded mb-2"></div><div className="h-3 bg-gray-100 w-2/3 rounded"></div>
                  </div>
               </div>}
               {activeIndex === 2 && <div className="animate-in zoom-in-95 duration-500 space-y-6">
                  {[1,2,3,4].map(i => <div key={i} className="p-5 border border-gray-50 rounded-2xl flex items-center justify-between"><div className="h-3 bg-gray-100 w-3/5 rounded"></div><div className="w-6 h-6 rounded-full border border-gray-200"></div></div>)}
               </div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-[48px] lg:py-[60px]">
      <div className="mx-[28px] md:mx-[40px] lg:mx-[72px] xl:mx-auto max-w-[1456px]">
        {/* Row 1: Centered Headers */}
        <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
          <h2 className="text-[#202124] text-[48px] font-normal leading-[1.16667] tracking-[-.5px] font-['Product_Sans'] mb-6">
            {title}
          </h2>
          <div className="text-[#3c4043] text-[16px] font-normal leading-[1.5] tracking-[.1px] font-['Roboto'] max-w-2xl mx-auto">
            {subtitle}
          </div>
        </div>

        {/* Row 2: Split Grid */}
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[28px] md:gap-x-[40px] lg:gap-x-[48px] xl:gap-x-[64px]">
          <div className="hidden lg:block lg:col-span-1"></div>
          {isLeft ? StickySidebar : VisualContent}
          <div className="hidden lg:block lg:col-span-1"></div>
          {isLeft ? VisualContent : StickySidebar}
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
