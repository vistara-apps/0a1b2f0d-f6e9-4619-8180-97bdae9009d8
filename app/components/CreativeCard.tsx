'use client';

import { Check } from 'lucide-react';

interface Creative {
  id: string;
  imageUrl: string;
  copy: string;
  selected: boolean;
}

interface CreativeCardProps {
  creative: Creative;
  onToggleSelection: () => void;
}

export function CreativeCard({ creative, onToggleSelection }: CreativeCardProps) {
  return (
    <div 
      className={`creative-card glass-effect rounded-xl p-4 cursor-pointer transition-all duration-250 ${
        creative.selected 
          ? 'ring-2 ring-blue-500 bg-blue-500/10' 
          : 'hover:bg-white/5'
      }`}
      onClick={onToggleSelection}
    >
      <div className="flex space-x-4">
        {/* Image placeholder */}
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex-shrink-0 flex items-center justify-center">
          <div className="text-white text-xs font-bold">AD</div>
        </div>
        
        {/* Content */}
        <div className="flex-1 space-y-2">
          <p className="text-white text-sm leading-relaxed">
            {creative.copy}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                ⭐ 9.2/10
              </span>
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                👁 8.5M
              </span>
            </div>
            
            {creative.selected && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
