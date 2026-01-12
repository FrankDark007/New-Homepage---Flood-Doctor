
import React from 'react';

interface WireframeBoxProps {
  className?: string;
  label?: string;
}

export const WireframeBox: React.FC<WireframeBoxProps> = ({ className = '', label }) => {
  return (
    <div className={`relative bg-gray-100 border-2 border-gray-300 flex items-center justify-center overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full text-gray-300" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>
      {label && (
        <span className="relative z-10 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 border border-gray-300 uppercase tracking-widest">
          {label}
        </span>
      )}
    </div>
  );
};
