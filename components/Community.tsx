
import React from 'react';
import { WireframeBox } from './WireframeBox';

export const Community: React.FC = () => {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Join a community of businesses
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(12)].map((_, i) => (
          <WireframeBox key={i} className="aspect-square rounded-xl" label={i % 3 === 0 ? "Portrait" : ""} />
        ))}
      </div>
    </section>
  );
};
