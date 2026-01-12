
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="text-xl font-medium google-sans text-[#5f6368]">Google</span>
            <span className="text-xl font-medium google-sans text-[#5f6368]">Business Profile</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5f6368]">
            <a href="#" className="hover:text-gray-900">Retail</a>
            <a href="#" className="hover:text-gray-900">Services</a>
            <a href="#" className="hover:text-gray-900">Restaurants</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-[#1a73e8]">Sign in</a>
          <button className="btn-blue px-6 py-2 rounded-md text-sm font-medium">Start now</button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">A</div>
        </div>
      </div>
    </header>
  );
};
