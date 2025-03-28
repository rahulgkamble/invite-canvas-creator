
import React from "react";
import { InvitationData } from "./InvitationEditor";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <div className="flex flex-col items-center justify-center pb-6">
      <h2 className="text-xl font-medium mb-6">Preview</h2>
      
      <div className="w-full max-w-[600px]">
        <AspectRatio ratio={1.414 / 1} className="overflow-visible">
          <div 
            id="invitation-for-download"
            className="invitation-container rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              backgroundImage: backgroundImage ? getBackgroundImage() : undefined,
              backgroundColor: backgroundImage ? undefined : 'white',
              width: '100%',
              height: '100%'
            }}
          >
            {backgroundImage && <div className="glass-overlay"></div>}
            
            <div className="invitation-content">
              <div 
                className={cn(
                  "px-6 py-4 rounded-md mb-4",
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
                "invitation-title text-3xl md:text-4xl lg:text-5xl font-semibold mb-3",
                getFontClass(),
                getThemeColorClass()
              )}>
                {brideFirstName} & {groomFirstName}
              </h1>
              
              <p className={cn(
                "invitation-subtitle text-base md:text-lg",
                getFontClass(),
                "text-foreground/90"
              )}>
                {message}
              </p>
              
              <div className={cn(
                "w-24 h-px my-4",
                themeColor === 'gold' ? 'bg-gold' : 
                themeColor === 'rose' ? 'bg-rose' : 
                themeColor === 'navy' ? 'bg-navy' : 
                themeColor === 'sage' ? 'bg-sage' : 
                'bg-lavender'
              )}></div>
              
              <div className={cn(
                "invitation-details space-y-2",
                getFontClass()
              )}>
                <p className="text-lg font-medium">
                  {brideFirstName} {brideLastName} & {groomFirstName} {groomLastName}
                </p>
                
                <p className="text-base">
                  {date} at {time}
                </p>
                
                <p className="text-base">
                  {venue}
                </p>
                
                <p className="text-sm text-foreground/80">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default InvitationPreview;
