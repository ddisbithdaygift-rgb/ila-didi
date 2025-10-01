import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Memory Lane" },
    { path: "/letter", label: "My Letter" },
    { path: "/favorites", label: "Her Favorites" },
    { path: "/guestbook", label: "Guestbook" },
    { path: "/quiz", label: "Quiz" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            <span>Ila's Birthday</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
