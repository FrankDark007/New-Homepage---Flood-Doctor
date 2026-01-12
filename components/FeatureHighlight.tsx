
import React from 'react';
import { WireframeBox } from './WireframeBox';

interface FeatureHighlightProps {
  layout: 'image-left' | 'image-right';
  title: string;
  description: string;
  listItems?: string[];
  imageType: 'phone' | 'laptop';
  isChatMockup?: boolean;
}

export const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ 
  layout, title, description, listItems, imageType, isChatMockup 
}) => {
  const isLeft = layout === 'image-left';

  const contentSection = (
    <div className="flex-1 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>
      {listItems && (
        <ul className="space-y-4">
          {listItems.map((item) => (
            <li key={item} className="group cursor-pointer">
              <div className="flex items-center gap-4 py-3 border-b border-gray-100 transition-colors hover:border-gray-900">
                <span className="font-semibold text-gray-900">{item}</span>
                <span className="ml-auto text-gray-400 group-hover:text-gray-900">→</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const visualSection = (
    <div className="flex-1 flex justify-center items-center">
      {imageType === 'laptop' ? (
        <div className="relative w-full max-w-2xl aspect-video bg-gray-900 rounded-t-xl p-3 border-b-8 border-gray-800 shadow-xl">
           <div className="w-full h-full bg-white rounded-md overflow-hidden p-6 space-y-4">
              <div className="flex items-center justify-between mb-8">
                <div className="h-6 bg-gray-100 w-32 rounded"></div>
                <div className="h-6 bg-gray-100 w-24 rounded-full"></div>
              </div>
              <div className="flex gap-6 h-full">
                 <div className="w-48 space-y-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="h-3 bg-gray-50 rounded"></div>
                    ))}
                 </div>
                 <div className="flex-1 space-y-4">
                    <WireframeBox className="w-full h-32 rounded" label="Dashboard Content" />
                    <div className="grid grid-cols-2 gap-4">
                       <WireframeBox className="h-24 rounded" />
                       <WireframeBox className="h-24 rounded" />
                    </div>
                 </div>
              </div>
           </div>
           {/* Base of laptop */}
           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-gray-800 rounded-full"></div>
        </div>
      ) : (
        <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-4 shadow-xl border-4 border-gray-800">
           <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden p-4 flex flex-col">
              {isChatMockup ? (
                <div className="flex-1 space-y-4 flex flex-col">
                  <div className="text-center pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2 border border-gray-200"></div>
                    <div className="h-3 bg-gray-200 w-24 mx-auto rounded"></div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="max-w-[80%] bg-gray-100 rounded-2xl p-3 text-xs text-gray-600">
                      Hi! Can I book a service for tomorrow?
                    </div>
                    <div className="max-w-[80%] ml-auto bg-gray-900 text-white rounded-2xl p-3 text-xs">
                      Absolutely! We have availability at 2 PM.
                    </div>
                    <div className="max-w-[80%] bg-gray-100 rounded-2xl p-3 text-xs text-gray-600">
                      Great, see you then!
                    </div>
                  </div>
                  <div className="mt-auto border-t border-gray-100 pt-4">
                     <div className="h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center px-4">
                        <div className="h-2 bg-gray-200 w-32 rounded"></div>
                     </div>
                  </div>
                </div>
              ) : (
                <WireframeBox className="w-full h-full rounded-[2rem]" label="Feature visual" />
              )}
           </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-24`}>
      {visualSection}
      {contentSection}
    </div>
  );
};
