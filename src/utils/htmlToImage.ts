
import { toPng } from 'html-to-image';
import { toast } from "sonner";

export const downloadInvitationAsImage = async (elementId: string, fileName: string = 'wedding-invitation') => {
  try {
    const element = document.getElementById(elementId);
    
    if (!element) {
      throw new Error('Element not found');
    }
    
    // Add a small delay to ensure all rendering is complete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast.promise(
      toPng(element, { 
        quality: 1.0,
        pixelRatio: 3, // Higher pixel ratio for better quality
        cacheBust: true,
        includeQueryParams: true,
        style: {
          // Ensure proper rendering for download
          transform: 'scale(1)',
          transformOrigin: 'top left',
          width: '100%',
          height: '100%'
        }
      }),
      {
        loading: 'Creating your beautiful invitation...',
        success: (dataUrl) => {
          // Create a link element to download the image
          const link = document.createElement('a');
          link.download = `${fileName}.png`;
          link.href = dataUrl;
          link.click();
          
          return 'Your invitation was downloaded successfully!';
        },
        error: 'Failed to generate the invitation image. Please try again.',
      }
    );
  } catch (error) {
    console.error('Error generating invitation image:', error);
    toast.error('Failed to generate the invitation image. Please try again.');
  }
};
