
import React from "react";
import InvitationEditor from "@/components/InvitationEditor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-light via-background to-rose-light/20 py-12 px-4 animate-fade-in">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b3ce551?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <header className="text-center mb-12 animate-slide-down">
          <div className="inline-block p-2 px-6 mb-3 bg-primary/5 rounded-full">
            <span className="text-primary/80 text-sm font-medium tracking-wider uppercase">Create Your Perfect Wedding Invitation</span>
          </div>
          <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight mb-3">
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
