import React from 'react';


export default function BackgroundGraphics() {
  return (
    // We are using z-0 and absolute to ensure it stays at the base of the stack
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ minHeight: '100vh' }}>
      {/* TEST GRID: If you see red lines, it's working! */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Large Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/30 blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}