
import React from 'react';

const props = [
  {
    title: "Free",
    desc: "Create a Business Profile at no cost",
    tooltip: "Zero cost setup",
    icon: (
      <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75z"/>
      </svg>
    )
  },
  {
    title: "Easy",
    desc: "Manage your profile from Search and Maps",
    tooltip: "Manage on the go",
    icon: (
      <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
      </svg>
    )
  },
  {
    title: "Personalized",
    desc: "Add hours, photos, posts, and more",
    tooltip: "Engage customers",
    icon: (
      <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
      </svg>
    )
  },
];

export const ValueProps: React.FC = () => {
  return (
    <section className="py-24 mb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
        {props.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center group">
            <div className="relative w-[112px] h-[112px] rounded-[28px] bg-[#d2e3fc] mb-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm group/icon cursor-default">
              {p.icon}
              {/* Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-gray-800 text-white text-xs font-medium rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                {p.tooltip}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
            <h3 className="text-[32px] font-bold text-[#202124] mb-4 google-sans tracking-tight">{p.title}</h3>
            <p className="text-[#5f6368] text-[16px] leading-relaxed max-w-[260px]">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
