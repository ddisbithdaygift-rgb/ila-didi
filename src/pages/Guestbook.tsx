import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart } from "lucide-react";

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

const Guestbook = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "muhammed janis av",
      message: "Happy birthday to my precious didi! i am so proud of the amazing person you've become. May this year bring you endless joy and success. Love you always! ❤️",
      timestamp: "2 days ago",
    },
    {
      id: 2,
      name: "firse me hi aapka bai 😉",
      message: "Happy Birthday to the most amazing didi! Thank you for always being there, for the laughs, the late-night talks, and all the memories we've created. Here's to many more adventures together! 🎉",
      timestamp: "1 day ago",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    const newMessage: Message = {
      id: messages.length + 1,
      name: name.trim(),
      message: message.trim(),
      timestamp: "Just now",
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    toast.success("Your message has been added!");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-float" fill="currentColor" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wishes from Around the World
            </h1>
            <p className="text-xl text-muted-foreground">
              Leave your birthday message for Ila Didi
            </p>
          </div>

          {/* Message Form */}
          <Card className="p-6 md:p-8 mb-12 bg-card/50 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Birthday Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your birthday wishes here..."
                  className="w-full min-h-32"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Your Wishes
              </Button>
            </form>
          </Card>

          {/* Messages List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Birthday Messages ({messages.length})</h2>
            {messages.map((msg) => (
              <Card key={msg.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{msg.name}</h3>
                  <span className="text-sm text-muted-foreground">{msg.timestamp}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{msg.message}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Guestbook;
