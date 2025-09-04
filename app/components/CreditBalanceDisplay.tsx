'use client';

import { Coins } from 'lucide-react';

interface CreditBalanceDisplayProps {
  credits: number;
}

export function CreditBalanceDisplay({ credits }: CreditBalanceDisplayProps) {
  return (
    <div className="glass-effect rounded-lg px-4 py-2 inline-flex items-center space-x-2">
      <Coins className="w-5 h-5 text-yellow-400" />
      <span className="text-white font-semibold">
        {credits} {credits === 1 ? 'Credit' : 'Credits'} Remaining
      </span>
      {credits === 0 && (
        <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded transition-colors">
          Buy More
        </button>
      )}
    </div>
  );
}
