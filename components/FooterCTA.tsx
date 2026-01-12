
import React from 'react';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
          Start reaching more customers
        </h2>
        <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl">
          Manage now
        </button>
      </div>
    </section>
  );
};
