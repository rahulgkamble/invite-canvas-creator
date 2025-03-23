
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextEditor from "./TextEditor";
import ColorPicker from "./ColorPicker";
import FontSelector from "./FontSelector";
import ImageUploader from "./ImageUploader";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { InvitationData, ThemeColor, FontFamily } from "./InvitationEditor";

interface EditorControlsProps {
  invitation: InvitationData;
  onTextChange: (field: keyof InvitationData, value: string) => void;
  onThemeColorChange: (color: ThemeColor) => void;
  onFontChange: (font: FontFamily) => void;
  onBackgroundImageChange: (imageUrl: string | null) => void;
  onDownload: () => void;
  isLoading: boolean;
}

const EditorControls: React.FC<EditorControlsProps> = ({
  invitation,
  onTextChange,
  onThemeColorChange,
  onFontChange,
  onBackgroundImageChange,
  onDownload,
  isLoading,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border p-6">
      <h2 className="text-xl font-medium mb-6">Customize Your Invitation</h2>
      
      <Tabs defaultValue="text" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="color">Colors</TabsTrigger>
          <TabsTrigger value="font">Fonts</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
        </TabsList>
        
        <TabsContent value="text" className="space-y-6 animate-fade-in">
          <TextEditor invitation={invitation} onTextChange={onTextChange} />
        </TabsContent>
        
        <TabsContent value="color" className="animate-fade-in">
          <ColorPicker 
            selectedColor={invitation.themeColor} 
            onColorChange={onThemeColorChange} 
          />
        </TabsContent>
        
        <TabsContent value="font" className="animate-fade-in">
          <FontSelector 
            selectedFont={invitation.fontFamily} 
            onFontChange={onFontChange} 
          />
        </TabsContent>
        
        <TabsContent value="background" className="animate-fade-in">
          <ImageUploader 
            currentImage={invitation.backgroundImage} 
            onImageChange={onBackgroundImageChange} 
          />
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 pt-6 border-t">
        <Button 
          onClick={onDownload} 
          disabled={isLoading} 
          className="w-full transition-all duration-300 hover:scale-[1.02]"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              Generating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Download size={18} />
              Download Invitation
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default EditorControls;
