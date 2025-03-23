
import React from "react";
import InvitationEditor from "@/components/InvitationEditor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-10 px-4 animate-fade-in">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-10 animate-slide-down">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-2">
            Wedding Invitation Creator
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Design a beautiful, personalized wedding invitation that perfectly captures your special day
          </p>
        </header>
        
        <InvitationEditor />
        
        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Create your perfect wedding invitation with our easy-to-use editor</p>
          <p className="mt-2">© {new Date().getFullYear()} Wedding Invitation Creator</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
