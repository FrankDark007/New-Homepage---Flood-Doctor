
import React from 'react';

const links = [
  {
    category: "Products",
    items: ["Google Ads", "YouTube Ads", "Merchant Center"]
  },
  {
    category: "Learning and support",
    items: ["Accelerate with Google", "Think with Google", "Google Ads Help Center"]
  },
  {
    category: "Partners and developers",
    items: ["Google Partners", "Google Developers site", "Google Ads Scripts"]
  },
  {
    category: "More solutions",
    items: ["Workspace", "Chrome", "Google Cloud"]
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] pt-20 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16 border-b border-gray-200 pb-12">
          <span className="text-sm text-[#5f6368] font-medium">Follow us</span>
          <div className="flex gap-4">
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {links.map(group => (
            <div key={group.category}>
              <h4 className="text-sm font-bold text-[#3c4043] mb-6">{group.category}</h4>
              <ul className="space-y-4">
                {group.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#5f6368] hover:text-[#1a73e8]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-6 text-xs text-[#5f6368]">
              <span className="font-bold text-[#202124]">Google</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">About Google</a>
              <a href="#">Google Products</a>
           </div>
           <div className="flex items-center gap-4">
              <select className="bg-transparent text-xs text-[#5f6368] outline-none">
                 <option>United States - English</option>
              </select>
           </div>
        </div>
      </div>
    </footer>
  );
};
