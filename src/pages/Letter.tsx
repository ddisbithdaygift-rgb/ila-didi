import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Letter = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-float" fill="currentColor" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A Letter to My Didi
            </h1>
            <p className="text-muted-foreground">From my heart to yours</p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Dear Ila Didi, ❤️
              </p>

              <p className="text-lg leading-relaxed mb-6">
               As I sit here creating this website for you, my heart is filled with so much love
                 and gratitude.You are not just my older sister - you are my mentor, my guide, and
                  truly one of the most amazing people I know.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I still remember when I first joined your group in weelife, and you were my
                 mediator. You made me feel so welcome and comfortable. That's just who you
                  are - always looking out for others, always making sure everyone feels included
                   and loved.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And that time when I got emotional after you got your job, promising to take me out
                 to celebrate - that moment showed me how much you care about my happiness .
                  You've always been my biggest cheerleader, celebrating my victories as if they were your own.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Your personality is absolutely beautiful, Didi. You're funny and outgoing, kind and
                 thoughtful, sweet and hardworking person. You have this amazing ability to make 
                 everyone around you smile. Whether you're watching your favorite anime, playing chess 
                 (and probably winning!), or just doing your favorite thing - "mujhe pareshan karna" 😄
                  - you bring so much joy to my lives.
              </p>

              <p className="text-lg leading-relaxed mb-6">
               I love how you're always eager to learn something new. Your curiosity and enthusiasm for 
                   life inspire me every day. And yes, even when you're being my "second monther" or 
                   when we joke about you being a "vampire" 🧛‍♀️, you make every moment memorable and fun.
                   and here is some of our memories
              </p>

              <p className="text-lg leading-relaxed mb-6">
                As you celebrate another year of your wonderful life, I want you to know that you are loved 
                beyond measure. Thank you for being you - for your kindness, your laughter, your wisdom, 
                and yes, even for "mujhe pareshan krna" (because honestly, what would life be without that? 😂).
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Here's to more adventures, more memories, more daal chawal and dosa dates, more golgappe moments, 
                and countless more years of having the best Didi in the world!
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Happy Birthday, Didi! May this year bring you all the happiness, success, and joy you deserve. 
                May you achieve everything your heart desires, and may you always know how truly special you are.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With all my love and gratitude,
              </p>

              <p className="text-lg leading-relaxed font-semibold">
                Your loving brother ❤️
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Letter;
