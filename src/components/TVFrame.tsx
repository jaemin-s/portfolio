import React from 'react';

interface TVFrameProps {
  children?: React.ReactNode;
}

export function TVFrame({ children }: TVFrameProps) {
  return (
    <div className="mx-auto">
      {/* TV Frame */}
      <div className="bg-gray-900 p-4 rounded-2xl shadow-2xl max-w-2xl mx-auto relative">
        {/* TV Screen */}
        <div className="bg-black p-3 rounded-xl">
          <div 
            className="bg-white relative overflow-hidden rounded-lg"
            style={{ 
              aspectRatio: '16/9',
              height: '300px'
            }}
          >
            {children || (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">📺</div>
                  <p>Smart TV Content</p>
                  <p className="text-sm">1920 × 1080</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* TV Brand Logo */}
        <div className="absolute bottom-2 right-6">
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        </div>
        
        {/* Power LED */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-red-500 rounded-full opacity-80"></div>
        </div>
      </div>
      
      {/* TV Stand */}
      <div className="flex justify-center mt-2">
        <div className="bg-gray-800 h-8 w-32 rounded-b-lg relative">
          {/* Stand Base */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 h-3 w-40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}