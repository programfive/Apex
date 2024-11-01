import { Paperclip, Send, Smile, Camera } from 'lucide-react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function FooterChat(){
  return (
    <section className="absolute -left-6 -right-6 bottom-0 z-20 rounded-md bg-white p-2 shadow-md">
    <div className="flex items-center space-x-2 p-2">
      <div className="text-text-primary">
        <Smile size={24} />
      </div>
      <Input
        placeholder="Write your message..."
        className="flex-grow   placeholder-gray-400 "
      />
      <Button>
        <Send size={24} />
      </Button>
      <div className="text-text-primary">
        <Paperclip size={24} />
      </div>
      <div className="text-text-primary">
        <Camera size={24} />
      </div>
    </div>
  </section>
  )
}