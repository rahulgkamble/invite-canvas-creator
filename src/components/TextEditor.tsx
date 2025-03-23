
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InvitationData } from "./InvitationEditor";

interface TextEditorProps {
  invitation: InvitationData;
  onTextChange: (field: keyof InvitationData, value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ invitation, onTextChange }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brideFirstName">Bride's First Name</Label>
          <Input
            id="brideFirstName"
            value={invitation.brideFirstName}
            onChange={(e) => onTextChange("brideFirstName", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="brideLastName">Bride's Last Name</Label>
          <Input
            id="brideLastName"
            value={invitation.brideLastName}
            onChange={(e) => onTextChange("brideLastName", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="groomFirstName">Groom's First Name</Label>
          <Input
            id="groomFirstName"
            value={invitation.groomFirstName}
            onChange={(e) => onTextChange("groomFirstName", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="groomLastName">Groom's Last Name</Label>
          <Input
            id="groomLastName"
            value={invitation.groomLastName}
            onChange={(e) => onTextChange("groomLastName", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Wedding Date</Label>
          <Input
            id="date"
            value={invitation.date}
            onChange={(e) => onTextChange("date", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Wedding Time</Label>
          <Input
            id="time"
            value={invitation.time}
            onChange={(e) => onTextChange("time", e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="venue">Venue</Label>
        <Input
          id="venue"
          value={invitation.venue}
          onChange={(e) => onTextChange("venue", e.target.value)}
          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={invitation.address}
          onChange={(e) => onTextChange("address", e.target.value)}
          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Invitation Message</Label>
        <Textarea
          id="message"
          value={invitation.message}
          onChange={(e) => onTextChange("message", e.target.value)}
          className="resize-none h-24 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
};

export default TextEditor;
