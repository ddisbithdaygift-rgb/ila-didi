import { Heart, Sparkles } from "lucide-react";
import Confetti from "@/components/Confetti";
import Countdown from "@/components/Countdown";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  return <>
      <Navigation />
      <Confetti />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-block animate-float mb-6">
              <Heart className="w-20 h-20 text-primary" fill="currentColor" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Happy Birthday
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              ILA KUMARI ❤️
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto animate-fade-in md:text-3xl font-semibold text-rose-500">To my amazing Didi - my mentor, my partner-in-building carrier, and the sweetest person I know. This website is a celebration of YOU
 and all the joy you bring to our lives! ✨</p>
            <div className="flex gap-4 justify-center mb-16 animate-fade-in">
              <Link to="/letter">
                <Button size="lg" className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  Read My Letter
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline">
                  View Memories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              Countdown to October 3rd
            </h3>
            <Countdown />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">About My Amazing Didi</h3>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  She is funny and outgoing, kind and thoughtful, adventurous and bold. 
                  A creative soul with a sweet and hardworking spirit. Whether she's watching anime, 
                  playing chess, or just being her amazing self, she brings joy to everyone around her.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                  Her Passions
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>📺 Watching anime</li>
                  <li>♟️ Playing chess</li>
                  <li>📚 Learning something new</li>
                  <li>😄 Making people smile</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Favorite Foods
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🍚 Daal Chawal</li>
                  <li>🥞 Dosa</li>
                  <li>🌰 Makhane</li>
                  <li>🎈 Golgappe</li>
                  <li>🍝 Spaghetti</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default Index;