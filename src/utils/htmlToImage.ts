
import { toPng } from 'html-to-image';
import { toast } from "sonner";

export const downloadInvitationAsImage = async (elementId: string, fileName: string = 'wedding-invitation') => {
  try {
    const element = document.getElementById(elementId);
    
    if (!element) {
      throw new Error('Element not found');
    }
    
    toast.promise(
      toPng(element, { 
        quality: 0.95,
        pixelRatio: 2,
        cacheBust: true,
      }),
      {
        loading: 'Generating your invitation image...',
        success: (dataUrl) => {
          // Create a link element to download the image
          const link = document.createElement('a');
          link.download = `${fileName}.png`;
          link.href = dataUrl;
          link.click();
          
          return 'Invitation downloaded successfully!';
        },
        error: 'Failed to generate the invitation image. Please try again.',
      }
    );
  } catch (error) {
    console.error('Error generating invitation image:', error);
    toast.error('Failed to generate the invitation image. Please try again.');
  }
};
