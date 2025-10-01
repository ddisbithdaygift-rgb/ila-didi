import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Heart, Music, Film, Utensils, Palette } from "lucide-react";

const Favorites = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Her Favorite Things
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Everything that brings joy to Ila Didi
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Favorite Color */}
            <Card className="p-8 bg-gradient-to-br from-accent/20 to-background">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Favorite Color</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-accent rounded-full border-4 border-primary shadow-glow" />
                <div>
                  <p className="text-lg font-semibold">Black</p>
                  <p className="text-muted-foreground">Elegant and timeless</p>
                </div>
              </div>
            </Card>

            {/* Favorite Foods */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-background">
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Favorite Foods</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍚</span>
                  <span className="text-lg">Daal Chawal</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🥞</span>
                  <span className="text-lg">Dosa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🌰</span>
                  <span className="text-lg">Makhane</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎈</span>
                  <span className="text-lg">Golgappe</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍝</span>
                  <span className="text-lg">Spaghetti</span>
                </li>
              </ul>
            </Card>

            {/* Hobbies */}
            <Card className="p-8 bg-gradient-to-br from-secondary/20 to-background">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                <h2 className="text-2xl font-bold">Hobbies & Passions</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📺</span>
                  <span className="text-lg">Watching Anime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">♟️</span>
                  <span className="text-lg">Playing Chess</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">😏</span>
                  <span className="text-lg">Nakra Krna</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">😄</span>
                  <span className="text-lg">Mujhe Pareshan Krna</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <span className="text-lg">Learning Something New</span>
                </li>
              </ul>
            </Card>

            {/* Inside Jokes */}
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-background">
              <div className="flex items-center gap-3 mb-4">
                <Film className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Our Inside Jokes</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-lg">🧛 Vampire</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-lg">💂 Bodyguard</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="text-lg">😏 Surajit Roy Didi ka</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
