
import React from "react";
import InvitationEditor from "@/components/InvitationEditor";

const Index = () => {
  // Wedding style images with reliable URLs
  const weddingStyles = [
    { name: 'Classic', imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&h=400&q=80' },
    { name: 'Modern', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&h=400&q=80' },
    { name: 'Bohemian', imageUrl: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?auto=format&fit=crop&w=300&h=400&q=80' },
    { name: 'Elegant', imageUrl: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=300&h=400&q=80' },
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden animate-fade-in">
      {/* Hero Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-rose-light/10 to-lavender-light/20 z-0"></div>
      
      {/* Main Background Image */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Overlay Gradients */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent z-0"></div>
      
      <div className="max-w-screen-xl mx-auto relative z-10 py-8 px-4">
        <header className="text-center mb-10 animate-slide-down">
          {/* Wedding Logo/Icon */}
          <div className="mb-4">
            <img 
              src="https://images.unsplash.com/photo-1554178286-db408c69256a?auto=format&fit=crop&w=150&h=150&q=80" 
              alt="Wedding icon" 
              className="w-16 h-16 mx-auto rounded-full object-cover border-2 border-primary/20 shadow-md"
            />
          </div>
          
          <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight mb-3 drop-shadow-sm">
            Wedding Invitation Creator
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Design beautiful, personalized wedding invitations with our premium tools
          </p>
          
          <div className="flex justify-center mt-6 gap-3">
            <span className="px-3 py-1 bg-rose-light/30 text-rose-dark rounded-full text-xs font-medium">Premium Designs</span>
            <span className="px-3 py-1 bg-gold-light/30 text-gold-dark rounded-full text-xs font-medium">Easy Customization</span>
            <span className="px-3 py-1 bg-lavender-light/30 text-lavender-dark rounded-full text-xs font-medium">Instant Download</span>
          </div>
        </header>
        
        {/* Featured Wedding Styles */}
        <div className="mb-12 text-center">
          <h2 className="text-xl font-medium mb-6">Premium Wedding Styles</h2>
          <div className="grid grid-cols-4 gap-4">
            {weddingStyles.map((style) => (
              <div key={style.name} className="relative overflow-hidden rounded-lg aspect-[3/4] group">
                <img 
                  src={style.imageUrl}
                  alt={`${style.name} style`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-3 text-white">
                  <p className="font-medium">{style.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Design Editor Section */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-light/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-light/20 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10 py-6 px-4 lg:px-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
            <h2 className="text-2xl font-medium text-center mb-6">Create Your Perfect Invitation</h2>
            <InvitationEditor />
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-medium mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah & Michael", text: "The invitations looked amazing! All our guests complimented them." },
              { name: "Jessica & David", text: "So easy to customize and the quality exceeded our expectations." },
              { name: "Emily & Christopher", text: "Perfect invitations that matched our wedding theme beautifully." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
                <p className="text-muted-foreground italic mb-2">{testimonial.text}</p>
                <p className="font-medium text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in border-t border-border/40 pt-6">
          <p>Create your perfect wedding invitation with our easy-to-use editor</p>
          <p className="mt-2">© {new Date().getFullYear()} Wedding Invitation Creator | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
