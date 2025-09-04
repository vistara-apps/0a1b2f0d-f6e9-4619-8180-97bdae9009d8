'use client';

import { Send } from 'lucide-react';

interface PostButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function PostButton({ onClick, disabled }: PostButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-250 ${
        disabled
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
      }`}
    >
      <Send className="w-5 h-5" />
      <span>Post to TikTok/Instagram</span>
    </button>
  );
}
