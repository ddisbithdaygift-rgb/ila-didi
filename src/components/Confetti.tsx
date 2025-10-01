import { useEffect, useState } from "react";

const Confetti = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string; color: string }>>([]);

  useEffect(() => {
    const colors = ["hsl(350, 100%, 50%)", "hsl(330, 100%, 70%)", "hsl(0, 0%, 10%)", "hsl(0, 0%, 95%)"];
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
