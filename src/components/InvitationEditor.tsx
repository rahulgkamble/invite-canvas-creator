
import React, { useState, useEffect } from "react";
import InvitationPreview from "./InvitationPreview";
import EditorControls from "./EditorControls";
import { downloadInvitationAsImage } from "@/utils/htmlToImage";
import { toast } from "sonner";

export type ThemeColor = 'gold' | 'rose' | 'navy' | 'sage' | 'lavender';
export type FontFamily = 'serif' | 'display' | 'script' | 'modern';

export interface InvitationData {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  message: string;
  themeColor: ThemeColor;
  fontFamily: FontFamily;
  backgroundImage: string | null;
}

const defaultInvitation: InvitationData = {
  brideFirstName: "Emma",
  brideLastName: "Johnson",
  groomFirstName: "Michael",
  groomLastName: "Smith",
  date: "June 15, 2024",
  time: "2:00 PM",
  venue: "Grand Ballroom",
  address: "123 Wedding Lane, Loveville",
  message: "Together with their families, request the pleasure of your company as they celebrate their marriage",
  themeColor: "gold",
  fontFamily: "display",
  backgroundImage: null,
};

const InvitationEditor: React.FC = () => {
  const [invitation, setInvitation] = useState<InvitationData>(defaultInvitation);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInvitationChange = (field: keyof InvitationData, value: string) => {
    setInvitation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  
  const handleThemeColorChange = (color: ThemeColor) => {
    setInvitation((prev) => ({
      ...prev,
      themeColor: color,
    }));
  };
  
  const handleFontChange = (font: FontFamily) => {
    setInvitation((prev) => ({
      ...prev,
      fontFamily: font,
    }));
  };
  
  const handleBackgroundImageChange = (imageUrl: string | null) => {
    setInvitation((prev) => ({
      ...prev,
      backgroundImage: imageUrl,
    }));
  };
  
  const handleDownload = async () => {
    setIsLoading(true);
    try {
      await downloadInvitationAsImage(
        'invitation-for-download', 
        `${invitation.brideFirstName}-${invitation.groomFirstName}-wedding-invitation`
      );
    } catch (error) {
      console.error('Error downloading invitation:', error);
      toast.error('Failed to download the invitation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="editor-container">
      <div className="controls-container animate-slide-up">
        <EditorControls 
          invitation={invitation}
          onTextChange={handleInvitationChange}
          onThemeColorChange={handleThemeColorChange}
          onFontChange={handleFontChange}
          onBackgroundImageChange={handleBackgroundImageChange}
          onDownload={handleDownload}
          isLoading={isLoading}
        />
      </div>
      
      <div className="preview-container animate-slide-up">
        <InvitationPreview invitation={invitation} />
      </div>
    </div>
  );
};

export default InvitationEditor;
