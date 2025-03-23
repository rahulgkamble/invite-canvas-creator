
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface ImageUploaderProps {
  currentImage: string | null;
  onImageChange: (imageUrl: string | null) => void;
}

const defaultBackgrounds = [
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    name: "Floral Pattern",
  },
  {
    url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    name: "Night Stars",
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    name: "Mountain View",
  },
];

const ImageUploader: React.FC<ImageUploaderProps> = ({ currentImage, onImageChange }) => {
  const [isUploading, setIsUploading] = useState(false);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        onImageChange(reader.result as string);
        setIsUploading(false);
      };
      
      reader.onerror = () => {
        console.error('Error reading file');
        setIsUploading(false);
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };
  
  const handleRemoveImage = () => {
    onImageChange(null);
  };
  
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground mb-4">
        Upload a background image or choose from our gallery
      </p>
      
      <div className="space-y-4">
        <label className="block">
          <span className="sr-only">Choose a background image</span>
          <div className="relative">
            <Button 
              variant="outline" 
              className="w-full h-20 border-dashed flex flex-col gap-2 hover:bg-muted/30 transition-all"
              disabled={isUploading}
            >
              {isUploading ? (
                <div className="h-5 w-5 border-2 border-t-transparent border-primary rounded-full animate-spin"></div>
              ) : (
                <>
                  <Upload size={20} />
                  <span>Upload your image</span>
                </>
              )}
            </Button>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageUpload}
              accept="image/*"
              disabled={isUploading}
            />
          </div>
        </label>
        
        {currentImage && (
          <div className="relative">
            <div className="aspect-video w-full rounded-md overflow-hidden border">
              <img 
                src={currentImage} 
                alt="Current background" 
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={handleRemoveImage}
            >
              <X size={16} />
            </Button>
          </div>
        )}
      </div>
      
      <div className="pt-4 border-t">
        <p className="text-sm font-medium mb-3">Or choose from our gallery</p>
        <div className="grid grid-cols-3 gap-3">
          {defaultBackgrounds.map((bg, index) => (
            <button
              key={index}
              onClick={() => onImageChange(bg.url)}
              className="aspect-[3/2] rounded-md overflow-hidden border hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all"
            >
              <img 
                src={bg.url} 
                alt={bg.name} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
