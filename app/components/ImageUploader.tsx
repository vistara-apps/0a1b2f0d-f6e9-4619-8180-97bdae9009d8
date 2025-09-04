'use client';

import { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  uploadedImage?: string;
}

export function ImageUploader({ onImageUpload, uploadedImage }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeImage = () => {
    onImageUpload('');
  };

  return (
    <div className="space-y-4">
      {uploadedImage ? (
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={uploadedImage} 
              alt="Uploaded product" 
              className="w-full h-48 object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
            isDragging 
              ? 'border-blue-400 bg-blue-50/10' 
              : 'border-gray-400 hover:border-gray-300'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-gray-300" />
            </div>
            <div className="space-y-1">
              <p className="text-white font-medium">Upload your product image</p>
              <p className="text-gray-400 text-sm">Drag and drop or click to browse</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <Upload className="w-4 h-4" />
              <span>PNG, JPG up to 10MB</span>
            </div>
          </div>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
        }}
        className="hidden"
      />
    </div>
  );
}
