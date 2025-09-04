'use client';

import { useState, useRef } from 'react';
import { AppShell } from './components/AppShell';
import { ImageUploader } from './components/ImageUploader';
import { PromptInput } from './components/PromptInput';
import { CreativeCard } from './components/CreativeCard';
import { CreditBalanceDisplay } from './components/CreditBalanceDisplay';
import { PostButton } from './components/PostButton';
import { PlatformSelector } from './components/PlatformSelector';
import { Loader2, Sparkles } from 'lucide-react';

interface AdCreative {
  id: string;
  imageUrl: string;
  copy: string;
  selected: boolean;
}

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [creatives, setCreatives] = useState<AdCreative[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [credits, setCredits] = useState<number>(3); // Free trial credits
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
  };

  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };

  const generateCreatives = async () => {
    if (!uploadedImage || !prompt || credits < 1) return;

    setIsGenerating(true);
    setCredits(credits - 1);

    // Simulate API call with delay
    setTimeout(() => {
      const newCreatives: AdCreative[] = [
        {
          id: '1',
          imageUrl: '/api/placeholder/300/400',
          copy: 'Transform your lifestyle with our premium product! ✨ Experience the difference that quality makes. #lifestyle #premium',
          selected: false,
        },
        {
          id: '2',
          imageUrl: '/api/placeholder/300/400',
          copy: '🚀 Ready to level up? Our product delivers results that speak for themselves. Join thousands of satisfied customers! #results #success',
          selected: false,
        },
        {
          id: '3',
          imageUrl: '/api/placeholder/300/400',
          copy: 'Don\'t settle for ordinary! 💎 Discover what makes our product the choice of professionals worldwide. #professional #quality',
          selected: false,
        },
      ];
      
      setCreatives(newCreatives);
      setIsGenerating(false);
    }, 3000);
  };

  const toggleCreativeSelection = (id: string) => {
    setCreatives(creatives.map(creative => 
      creative.id === id 
        ? { ...creative, selected: !creative.selected }
        : creative
    ));
  };

  const handlePost = () => {
    const selectedCreatives = creatives.filter(c => c.selected);
    if (selectedCreatives.length === 0 || selectedPlatforms.length === 0) return;
    
    // Simulate posting
    alert(`Posting ${selectedCreatives.length} creatives to ${selectedPlatforms.join(', ')}`);
  };

  const hasSelectedCreatives = creatives.some(c => c.selected);

  return (
    <AppShell>
      <div className="max-w-screen-md mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">AdSpin AI</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Spin AI-powered ad creatives and automagically post them to TikTok & Instagram
          </p>
          <CreditBalanceDisplay credits={credits} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Upload product images
              </h2>
              <p className="text-gray-300 mb-6">
                Drop and upload images and launch your product selling propositions.
              </p>
              
              <ImageUploader 
                onImageUpload={handleImageUpload}
                uploadedImage={uploadedImage}
              />
              
              <PromptInput 
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Describe your product and desired ad angle..."
              />

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Describe your product/messages/brand</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Generated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400">Then send creatives</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400">A set ad creatives</span>
                </div>
              </div>

              <button
                onClick={generateCreatives}
                disabled={!uploadedImage || !prompt || credits < 1 || isGenerating}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-250 ${
                  !uploadedImage || !prompt || credits < 1 || isGenerating
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Generating Creatives...</span>
                  </div>
                ) : (
                  `Spin for Creatives ($0.50)`
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {creatives.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Generated Creatives</h3>
                <div className="grid gap-4">
                  {creatives.map((creative) => (
                    <CreativeCard
                      key={creative.id}
                      creative={creative}
                      onToggleSelection={() => toggleCreativeSelection(creative.id)}
                    />
                  ))}
                </div>

                {hasSelectedCreatives && (
                  <div className="glass-effect rounded-xl p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-white">Post to Social Media</h4>
                    <PlatformSelector 
                      selectedPlatforms={selectedPlatforms}
                      onSelectionChange={setSelectedPlatforms}
                    />
                    <PostButton 
                      onClick={handlePost}
                      disabled={!hasSelectedCreatives || selectedPlatforms.length === 0}
                    />
                  </div>
                )}
              </div>
            )}

            {isGenerating && (
              <div className="glass-effect rounded-xl p-8 text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-white text-lg">Creating your ad creatives...</p>
                  <p className="text-gray-300 text-sm">This may take a few moments</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
