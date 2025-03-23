
import React from "react";
import { InvitationData } from "./InvitationEditor";
import { cn } from "@/lib/utils";

interface InvitationPreviewProps {
  invitation: InvitationData;
}

const InvitationPreview: React.FC<InvitationPreviewProps> = ({ invitation }) => {
  const { 
    brideFirstName, 
    brideLastName, 
    groomFirstName, 
    groomLastName, 
    date, 
    time, 
    venue, 
    address, 
    message,
    themeColor,
    fontFamily,
    backgroundImage 
  } = invitation;
  
  const getThemeColorClass = () => {
    switch (themeColor) {
      case 'gold': return 'text-gold-dark';
      case 'rose': return 'text-rose-dark';
      case 'navy': return 'text-navy-dark';
      case 'sage': return 'text-sage-dark';
      case 'lavender': return 'text-lavender-dark';
      default: return 'text-gold-dark';
    }
  };
  
  const getAccentColorClass = () => {
    switch (themeColor) {
      case 'gold': return 'bg-gold-light/70';
      case 'rose': return 'bg-rose-light/70';
      case 'navy': return 'bg-navy-light/70';
      case 'sage': return 'bg-sage-light/70';
      case 'lavender': return 'bg-lavender-light/70';
      default: return 'bg-gold-light/70';
    }
  };
  
  const getBackgroundImage = () => {
    if (backgroundImage) {
      return `url(${backgroundImage})`;
    }
    return 'bg-white';
  };
  
  const getFontClass = () => {
    switch (fontFamily) {
      case 'serif': return 'font-serif';
      case 'display': return 'font-display';
      case 'script': return 'font-script';
      case 'modern': return 'font-modern';
      default: return 'font-display';
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <h2 className="text-xl font-medium mb-6">Preview</h2>
      
      <div 
        id="invitation-for-download"
        className="invitation-container rounded-md shadow-xl border overflow-hidden transition-all duration-500 ease-in-out"
        style={{ 
          backgroundImage: backgroundImage ? getBackgroundImage() : undefined,
          backgroundColor: backgroundImage ? undefined : 'white',
        }}
      >
        {backgroundImage && <div className="glass-overlay"></div>}
        
        <div className="invitation-content">
          <div 
            className={cn(
              "px-6 py-4 rounded-md mb-6",
              getAccentColorClass()
            )}
          >
            <h3 className={cn(
              "text-sm uppercase tracking-wider font-medium",
              getFontClass(),
              getThemeColorClass()
            )}>
              Wedding Invitation
            </h3>
          </div>
          
          <h1 className={cn(
            "invitation-title text-4xl md:text-5xl font-semibold mb-4",
            getFontClass(),
            getThemeColorClass()
          )}>
            {brideFirstName} & {groomFirstName}
          </h1>
          
          <p className={cn(
            "invitation-subtitle text-lg md:text-xl",
            getFontClass(),
            "text-foreground/90"
          )}>
            {message}
          </p>
          
          <div className={cn(
            "w-24 h-px my-6",
            themeColor === 'gold' ? 'bg-gold' : 
            themeColor === 'rose' ? 'bg-rose' : 
            themeColor === 'navy' ? 'bg-navy' : 
            themeColor === 'sage' ? 'bg-sage' : 
            'bg-lavender'
          )}></div>
          
          <div className={cn(
            "invitation-details space-y-3",
            getFontClass()
          )}>
            <p className="text-xl font-medium">
              {brideFirstName} {brideLastName} & {groomFirstName} {groomLastName}
            </p>
            
            <p className="text-lg">
              {date} at {time}
            </p>
            
            <p className="text-lg">
              {venue}
            </p>
            
            <p className="text-base text-foreground/80">
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationPreview;
