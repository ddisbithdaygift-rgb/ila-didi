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
                As I sit down to write this letter, I'm flooded with so many memories and emotions. 
                Where do I even begin to tell you how much you mean to me?
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Do you remember when we first met in the Wee life group? You were my mediator then 🤭, 
                and from that moment, you've been so much more than just my Didi. You've been my guide, 
                my friend, my confidant, and sometimes my favorite person to annoy (I know you love it! 😄).
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I still can't forget that time when you made me so emotional after I got my job, 
                telling me you'd take me out to celebrate. That moment meant the world to me. 
                It showed me how much you care, how you celebrate my victories as if they were your own.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Your personality is truly one-of-a-kind. You're funny and outgoing, yet kind and thoughtful. 
                You're adventurous and bold, but also sweet and hardworking. Watching you pursue your passions - 
                whether it's watching anime, playing chess, or learning something new - inspires me every day.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                And let's not forget our inside jokes! From vampire references to the whole bodyguard thing, 
                and of course Surajit Roy Didi ka 😏😏 - these silly moments we share make our bond so special and unique.
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
                Your loving sibling ❤️
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Letter;
