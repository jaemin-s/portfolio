import React from "react";

interface TVFrameProps {
  children?: React.ReactNode;
}

export function TVFrame({ children }: TVFrameProps) {
  return (
    <div className="mx-auto">
      <div className="bg-gray-900 p-1.5 rounded-lg shadow-2xl max-w-2xl mx-auto relative">
        <div className="bg-black p-1 rounded-md">
          <div
            className="bg-white relative overflow-hidden rounded-sm"
            style={{
              aspectRatio: "16/9",
              height: "300px",
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

        <div className="absolute bottom-1 right-3">
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>

        <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2">
          <div className="w-0.5 h-0.5 bg-red-500 rounded-full opacity-80"></div>
        </div>
      </div>
    </div>
  );
}
