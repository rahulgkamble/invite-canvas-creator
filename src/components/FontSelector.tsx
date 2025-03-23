
import React from "react";
import { FontFamily } from "./InvitationEditor";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FontSelectorProps {
  selectedFont: FontFamily;
  onFontChange: (font: FontFamily) => void;
}

const fonts: { value: FontFamily; name: string; sample: string }[] = [
  { 
    value: "serif", 
    name: "Cormorant Garamond", 
    sample: "Elegant & Timeless" 
  },
  { 
    value: "display", 
    name: "Playfair Display", 
    sample: "Classic & Refined" 
  },
  { 
    value: "script", 
    name: "Great Vibes", 
    sample: "Romantic & Flowing" 
  },
  { 
    value: "modern", 
    name: "Montserrat", 
    sample: "Clean & Contemporary" 
  }
];

const FontSelector: React.FC<FontSelectorProps> = ({ selectedFont, onFontChange }) => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Select a font for your invitation
      </p>
      
      <div className="space-y-3">
        {fonts.map((font) => (
          <button
            key={font.value}
            onClick={() => onFontChange(font.value)}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-md border transition-all duration-300",
              selectedFont === font.value 
                ? "ring-2 ring-primary ring-offset-2" 
                : "hover:bg-muted/30"
            )}
          >
            <div>
              <p className={cn(
                "text-lg mb-1",
                font.value === "serif" && "font-serif",
                font.value === "display" && "font-display",
                font.value === "script" && "font-script",
                font.value === "modern" && "font-modern"
              )}>
                {font.sample}
              </p>
              <p className="text-sm text-muted-foreground">
                {font.name}
              </p>
            </div>
            
            {selectedFont === font.value && (
              <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <Check size={14} className="text-primary-foreground" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FontSelector;
