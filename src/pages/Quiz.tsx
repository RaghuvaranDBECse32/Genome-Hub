import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import quizQuestions from '../data/quizQuestions.json';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-space flex items-center justify-center">
        <div className="text-[#FFE81F] text-2xl">Loading quiz...</div>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="min-h-screen bg-space flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-12 px-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-gray-900/80 border border-[#FFE81F]/30 rounded-xl p-8 text-center"
          >
            <Trophy className="w-20 h-20 text-[#FFE81F] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#FFE81F] mb-4">Quiz Complete!</h2>
            <p className="text-6xl font-bold text-[#00C8FF] mb-6">
              {score}/{questions.length}
            </p>
            <p className="text-2xl text-gray-300 mb-8">
              {percentage >= 80
                ? '🌟 Outstanding! You\'re a space biology expert!'
                : percentage >= 60
                ? '👍 Great job! Keep exploring!'
                : '🚀 Good effort! Try again to learn more!'}
            </p>
            <button
              onClick={handleRestart}
              className="flex items-center space-x-2 mx-auto px-8 py-4 bg-[#FFE81F] text-black font-bold rounded-lg hover:bg-[#00C8FF] hover:text-white transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Take Quiz Again</span>
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-space flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-[#FFE81F] mr-3" />
              <h1 className="text-4xl font-bold text-[#FFE81F] text-glow">
                Space Biology Quiz
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>|</span>
              <span>
                Score: <span className="text-[#00C8FF] font-bold">{score}</span>
              </span>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gray-900/80 border border-[#00C8FF]/30 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-6 leading-relaxed">
                {question.question}
              </h2>

              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correct;
                  const showResult = showExplanation;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        showResult && isCorrect
                          ? 'border-green-500 bg-green-500/20'
                          : showResult && isSelected && !isCorrect
                          ? 'border-red-500 bg-red-500/20'
                          : isSelected
                          ? 'border-[#FFE81F] bg-[#FFE81F]/10'
                          : 'border-gray-700 bg-gray-800/50 hover:border-[#00C8FF] hover:bg-[#00C8FF]/10'
                      } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white">{option}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 bg-[#00C8FF]/10 border border-[#00C8FF]/30 rounded-lg"
                  >
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="font-semibold text-[#00C8FF]">Explanation: </span>
                      {question.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end">
                {!showExplanation ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      selectedAnswer === null
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-[#FFE81F] text-black hover:bg-[#00C8FF] hover:text-white'
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-[#00C8FF] text-white rounded-lg font-semibold hover:bg-[#FFE81F] hover:text-black transition-all"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
