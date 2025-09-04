'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-cyan-400 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 border-2 border-white rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-70"></div>
        
        {/* Main content */}
        {children}
      </div>
    </div>
  );
}
