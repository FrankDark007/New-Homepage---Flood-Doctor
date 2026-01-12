
import React, { useState } from 'react';

const faqs = [
  {
    question: "Is a Business Profile on Google free?",
    answer: "Yes, it's free to create your Business Profile on Google. Create your profile at no cost, and you can manage your business from Google Search and Maps to start reaching more customers."
  },
  {
    question: "Do I need to download an app to manage my profile?",
    answer: "No, you can manage your Business Profile directly from Google Search or the Google Maps app. Just search for your business name when you're signed in to your Google Account."
  },
  {
    question: "How do I verify my business?",
    answer: "Verification methods vary. Most businesses verify by postcard, but some can verify by phone, email, or instant verification. You'll see the options available to you when you start the verification process."
  },
  {
    question: "Can I manage my profile if I don't have a storefront?",
    answer: "Yes, you can have a profile if your business doesn't have a physical address as long as you make in-person contact with customers. You can list a service area instead of a specific address."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#202124] mb-12">Your questions, answered</h2>
        <div className="flex justify-end mb-4">
           <button className="text-[#1a73e8] text-sm font-bold flex items-center gap-1 hover:underline">
             See all FAQs <span className="text-xs">↗</span>
           </button>
        </div>
        <div className="border-t border-gray-200">
           {faqs.map((faq, index) => (
             <div 
               key={index}
               className="py-6 border-b border-gray-200 cursor-pointer group"
               onClick={() => toggleIndex(index)}
             >
               <div className="flex justify-between items-center">
                 <span className={`text-[#1a73e8] font-medium text-lg transition-colors ${openIndex === index ? 'text-[#174ea6]' : ''}`}>
                   {faq.question}
                 </span>
                 <span className={`text-[#1a73e8] text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                   ↓
                 </span>
               </div>
               <div 
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
               >
                 <p className="text-[#3c4043] leading-relaxed">
                   {faq.answer}
                 </p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
