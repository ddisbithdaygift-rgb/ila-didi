import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trophy } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "What is Ila Didi's favorite color?",
    options: ["Pink", "Black", "Red", "Blue"],
    correct: 1,
  },
  {
    question: "Which hobby does Ila Didi enjoy?",
    options: ["Painting", "Playing Chess", "Dancing", "Cooking"],
    correct: 1,
  },
  {
    question: "What is one of Ila Didi's favorite foods?",
    options: ["Pizza", "Daal Chawal", "Burger", "Pasta"],
    correct: 1,
  },
  {
    question: "What does Ila Didi love watching?",
    options: ["K-dramas", "Anime", "Reality Shows", "Documentaries"],
    correct: 1,
  },
  {
    question: "What is one of our inside jokes?",
    options: ["Vampire", "Zombie", "Werewolf", "Ghost"],
    correct: 0,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
      toast.success("Correct! 🎉");
    } else {
      toast.error("Oops! Try to know her better! 😊");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <>
        <Navigation />
        <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
          <Card className="p-8 md:p-12 max-w-2xl w-full text-center">
            <Trophy className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiz Complete!</h2>
            <div className="text-6xl font-bold text-primary mb-6">
              {score} / {questions.length}
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              {percentage >= 80
                ? "Amazing! You know Ila Didi so well! 🌟"
                : percentage >= 60
                ? "Good job! You know her pretty well! 😊"
                : "Keep spending more time with Ila Didi! 💕"}
            </p>
            <Button onClick={resetQuiz} size="lg">
              Take Quiz Again
            </Button>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Well Do You Know the Birthday Girl?
            </h1>
            <p className="text-xl text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">
              {questions[currentQuestion].question}
            </h2>
            <RadioGroup value={selectedAnswer?.toString()} onValueChange={(val) => setSelectedAnswer(parseInt(val))}>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                    <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer text-lg">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
            <Button onClick={handleAnswer} size="lg" className="w-full mt-8">
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Quiz;
