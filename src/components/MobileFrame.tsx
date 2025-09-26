import React from 'react';

interface MobileFrameProps {
  children?: React.ReactNode;
  model?: 'iphone' | 'android';
}

export function MobileFrame({ children, model = 'iphone' }: MobileFrameProps) {
  return (
    <div className="mx-auto">
      <div className="bg-black p-2 rounded-[2.5rem] shadow-xl w-48 mx-auto">
        {/* Phone Frame */}
        <div className="bg-white rounded-[2rem] overflow-hidden relative">
          {/* Top Notch/Status Bar */}
          <div className="bg-black h-6 relative">
            {model === 'iphone' ? (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
            ) : (
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
            )}
          </div>

          {/* Content Area */}
          <div 
            className="bg-white relative overflow-hidden"
            style={{ 
              aspectRatio: '9/19.5',  // iPhone-like ratio
              height: '400px'
            }}
          >
            {children || (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <p>Mobile App Content</p>
                  <p className="text-sm">375 × 812</p>
                </div>
              </div>
            )}
          </div>

          {/* Home Indicator (for iPhone) */}
          {model === 'iphone' && (
            <div className="bg-white py-2 flex justify-center">
              <div className="w-32 h-1 bg-black rounded-full opacity-30"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}