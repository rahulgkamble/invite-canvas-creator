
import React from "react";
import InvitationEditor from "@/components/InvitationEditor";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden animate-fade-in">
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-lavender-light/80 via-rose-light/50 to-gold-light/70 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-gold/20 to-transparent z-0"></div>
      <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-lavender/20 to-transparent z-0"></div>
      
      {/* Floating Ornaments */}
      <div className="fixed top-10 right-10 w-32 h-32 rounded-full bg-rose/5 blur-3xl z-0"></div>
      <div className="fixed bottom-20 left-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl z-0"></div>
      <div className="fixed top-1/4 left-1/3 w-24 h-24 rounded-full bg-lavender/10 blur-2xl z-0"></div>
      
      <div className="max-w-screen-xl mx-auto relative z-10 py-12 px-4">
        <header className="text-center mb-12 animate-slide-down">
          <div className="inline-block p-2 px-6 mb-3 bg-primary/5 backdrop-blur-sm rounded-full border border-primary/10 shadow-sm">
            <span className="text-primary/80 text-sm font-medium tracking-wider uppercase">Create Your Perfect Wedding Invitation</span>
          </div>
          <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight mb-3 drop-shadow-sm">
            Wedding Invitation Creator
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Design a beautiful, personalized wedding invitation that perfectly captures your special day
          </p>
          <div className="h-px w-24 bg-primary/20 mx-auto mt-6"></div>
        </header>
        
        <InvitationEditor />
        
        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in border-t border-border/40 pt-6">
          <p>Create your perfect wedding invitation with our easy-to-use editor</p>
          <p className="mt-2">© {new Date().getFullYear()} Wedding Invitation Creator | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
