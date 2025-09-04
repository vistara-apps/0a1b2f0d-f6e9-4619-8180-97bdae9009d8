'use client';

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onSelectionChange: (platforms: string[]) => void;
}

export function PlatformSelector({ selectedPlatforms, onSelectionChange }: PlatformSelectorProps) {
  const platforms = [
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
  ];

  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      onSelectionChange(selectedPlatforms.filter(id => id !== platformId));
    } else {
      onSelectionChange([...selectedPlatforms, platformId]);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-white font-medium">Select Platforms</label>
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => togglePlatform(platform.id)}
            className={`p-3 rounded-lg border-2 transition-all duration-250 ${
              selectedPlatforms.includes(platform.id)
                ? 'border-blue-500 bg-blue-500/20 text-white'
                : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl">{platform.icon}</span>
              <span className="font-medium">{platform.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
