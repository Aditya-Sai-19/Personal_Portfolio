'use client';

import { useState, useEffect } from 'react';

export default function Loader() {
  const [activeHex, setActiveHex] = useState(0);
  const [connectionProgress, setConnectionProgress] = useState(0);

  const hexGrid = Array.from({ length: 19 }, (_, i) => i);

  useEffect(() => {
    const hexInterval = setInterval(() => {
      setActiveHex(prev => (prev + 1) % hexGrid.length);
    }, 200);

    const progressInterval = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(hexInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const createHexagonPath = () => {
    return "M30,5 L50,5 L60,21.65 L50,38.3 L30,38.3 L20,21.65 Z";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hexagonal grid */}
        <div className="relative w-80 h-80 mx-auto mb-8">
          {/* Central hexagon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" className="transform -rotate-90">
              <path
                d={createHexagonPath()}
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Central core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="text-blue-400 font-mono text-xs font-bold">
                    {Math.floor(connectionProgress)}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding hexagons */}
          {hexGrid.map((_, index) => {
            const angle = (index * 60) * Math.PI / 180;
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-40px',
                  marginTop: '-40px'
                }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" className="transform -rotate-90">
                  <path
                    d={createHexagonPath()}
                    fill="none"
                    stroke={index === activeHex ? "#60A5FA" : "#1E293B"}
                    strokeWidth={index === activeHex ? "2" : "1"}
                    className={index === activeHex ? "animate-pulse" : ""}
                  />
                  {index === activeHex && (
                    <circle cx="40" cy="40" r="3" fill="#60A5FA" className="animate-ping" />
                  )}
                </svg>
              </div>
            );
          })}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(90deg)' }}>
            {hexGrid.slice(0, 6).map((_, index) => {
              const angle = (index * 60) * Math.PI / 180;
              const radius = 120;
              const x2 = 160 + Math.cos(angle) * radius;
              const y2 = 160 + Math.sin(angle) * radius;
              
              return (
                <line
                  key={index}
                  x1="160"
                  y1="160"
                  x2={x2}
                  y2={y2}
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity={connectionProgress / 100}
                  className="animate-pulse"
                />
              );
            })}
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Status text */}
        <div className="text-center space-y-4">
          <div className="text-blue-400 font-mono text-lg tracking-widest">
            NEURAL NETWORK SYNC
          </div>
          
          <div className="text-gray-400 font-mono text-sm">
            Establishing quantum connections...
          </div>

          {/* Connection status */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-1 rounded-full transition-all duration-500 ${
                  i <= Math.floor(connectionProgress / 20)
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-700'
                }`}
              />
            ))}
          </div>

          {/* System info */}
          <div className="text-gray-500 font-mono text-xs space-y-1 mt-8">
            <div> NEURAL CONNECTOR MATRIX v3.0</div>
            <div>QUANTUM ENTANGLEMENT: {connectionProgress}% COMPLETE</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
