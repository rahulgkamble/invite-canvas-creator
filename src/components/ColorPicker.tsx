
import React from "react";
import { ThemeColor } from "./InvitationEditor";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ColorPickerProps {
  selectedColor: ThemeColor;
  onColorChange: (color: ThemeColor) => void;
}

const colors: { value: ThemeColor; name: string }[] = [
  { value: "gold", name: "Gold" },
  { value: "rose", name: "Rose" },
  { value: "navy", name: "Navy Blue" },
  { value: "sage", name: "Sage Green" },
  { value: "lavender", name: "Lavender" }
];

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange }) => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Choose a color theme for your invitation
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorChange(color.value)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md border transition-all duration-300",
              selectedColor === color.value 
                ? "ring-2 ring-offset-2" 
                : "hover:bg-muted/30",
              selectedColor === color.value && color.value === "gold" && "ring-gold",
              selectedColor === color.value && color.value === "rose" && "ring-rose",
              selectedColor === color.value && color.value === "navy" && "ring-navy",
              selectedColor === color.value && color.value === "sage" && "ring-sage",
              selectedColor === color.value && color.value === "lavender" && "ring-lavender"
            )}
          >
            <span 
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center",
                color.value === "gold" && "bg-gold",
                color.value === "rose" && "bg-rose",
                color.value === "navy" && "bg-navy",
                color.value === "sage" && "bg-sage",
                color.value === "lavender" && "bg-lavender"
              )}
            >
              {selectedColor === color.value && (
                <Check size={14} className="text-white" />
              )}
            </span>
            <span className="font-medium">{color.name}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <p className="text-sm text-muted-foreground mb-3">Preview</p>
        <div className="grid grid-cols-5 gap-2">
          <div className={cn("h-8 rounded-md", "bg-gold-light")}></div>
          <div className={cn("h-8 rounded-md", "bg-gold")}></div>
          <div className={cn("h-8 rounded-md", "bg-gold-dark")}></div>
          <div className={cn("h-8 rounded-md", "bg-white border")}></div>
          <div className={cn("h-8 rounded-md", "bg-slate-100 border")}></div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
