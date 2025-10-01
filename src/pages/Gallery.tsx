import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import weelife1 from "@/assets/weelife1.jpg";
import weelife2 from "@/assets/weelife2.jpg";
import makhane from "@/assets/makhane.jpg";

const Gallery = () => {
  const albums = [
    {
      title: "Golden days",
      description: "Precious game memories",
      image: weelife1,
      caption: "First time in Didi's Weelife group - unforgettable moments!",
    },
    {
      title: "together Fun",
      description: "Beautiful moments of old days",
      image: weelife2,
      caption: "Special times with loved ones in our virtual world",
    },
    {
      title: "foodyyies",
      description: "mujhe video call pe makhane aur popcorn dhikaana",
      image: makhane,
      caption: "Didi's favorite - Makhane! 🤍",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The Memory Lane
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            A journey through beautiful moments
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                <p className="text-muted-foreground mb-4">{album.description}</p>
                <p className="text-sm text-muted-foreground italic">{album.caption}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://photos.app.goo.gl/Q7Jvvc4g8taRjBz18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-pink-500 font-semibold underline text-lg mb-4"
            >
              📸 View the full Memory Lane photo album[link]
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground italic">
              💝 Add your own photos to make this gallery even more special!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
