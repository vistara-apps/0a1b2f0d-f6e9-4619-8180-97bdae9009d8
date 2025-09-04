'use client';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function PromptInput({ value, onChange, placeholder }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-white font-medium">
        Describe Your Product
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Enter your product description and selling points..."}
        className="w-full h-32 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={4}
      />
      <p className="text-gray-400 text-sm">
        Be specific about your product's benefits and target audience for better results.
      </p>
    </div>
  );
}
