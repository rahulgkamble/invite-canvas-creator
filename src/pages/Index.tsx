
import React from "react";
import InvitationEditor from "@/components/InvitationEditor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4 animate-fade-in">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-12 animate-slide-down">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tight mb-3">
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
