import React from "react";

interface PCBrowserFrameProps {
  children?: React.ReactNode;
  url?: string;
}

export function PCBrowserFrame({ children }: PCBrowserFrameProps) {
  return (
    <div className="mx-auto w-full">
      <div className="bg-gray-200 p-2 rounded-lg shadow-xl max-w-2xl w-full mx-auto">
        {/* Browser Chrome */}
        <div className="bg-white rounded-t-lg overflow-hidden">
          {/* Title Bar */}
          <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 text-gray-400">⚙️</div>
            </div>
          </div>

          {/* Content Area */}
          <div
            className="bg-white relative overflow-hidden flex items-center justify-center w-full"
            style={{
              aspectRatio: "16/9",
              width: "100%",
            }}
          >
            {children || <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
