
import React from 'react';

const steps = [
  { num: 1, title: "Claim", desc: "Create a Business Profile, or manage an existing profile on Search and Maps" },
  { num: 2, title: "Personalize", desc: "Add hours, photos, and other details and get discovered by customers near you" },
  { num: 3, title: "Manage", desc: "Share updates, respond to reviews, and connect with customers on Google" }
];

export const FinalSteps: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-[#202124] mb-6">Show the best of your business</h2>
      <p className="text-[#5f6368] mb-10">Reach more customers in three simple steps with your free Business Profile.</p>
      <button className="btn-blue px-10 py-3 rounded-md text-base font-medium mb-24">
        Start now
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map(step => (
          <div key={step.num} className="flex flex-col items-center">
            <div className="text-7xl font-light text-[#1a73e8] mb-6">{step.num}</div>
            <h3 className="text-2xl font-bold text-[#202124] mb-4">{step.title}</h3>
            <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
