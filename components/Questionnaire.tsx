"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface Answer {
  id: string;
  title: string;
  score: number;
}

interface Question {
  id: string;
  question: string;
  type: string;
  answers: Answer[];
}

interface Result {
  id: string;
  title: string;
  scoreRange: { min: number; max: number };
  description: string;
}

export interface QuestionnaireProps {
  title: string;
  description: string;
  questions: Question[];
  results: Result[];
}

export default function Questionnaire({
  title,
  description,
  questions,
  results,
}: QuestionnaireProps) {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [showResult, setShowResult] = useState(false);

  const current = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasSelected = selectedAnswers[currentIndex] !== undefined;

  function handleSelect(score: number) {
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: score }));
  }

  function handleNext() {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleRetake() {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
  }

  const totalScore = Object.values(selectedAnswers).reduce(
    (sum, s) => sum + s,
    0
  );

  const matchedResult = results.find(
    (r) => totalScore >= r.scoreRange.min && totalScore <= r.scoreRange.max
  );

  if (showResult) {
    return (
      <div className="bg-white rounded-2xl border border-hairline p-8 text-center">
        <h3 className="text-2xl font-serif font-semibold text-brand-deep mb-2">
          {t("YOUR_RESULT")}
        </h3>
        {matchedResult ? (
          <>
            <p className="text-xl font-semibold text-brand-blue mb-4">
              {matchedResult.title}
            </p>
            {matchedResult.description && (
              <div
                className="prose prose-sm max-w-none text-text-secondary mx-auto"
                dangerouslySetInnerHTML={{ __html: matchedResult.description }}
              />
            )}
          </>
        ) : (
          <p className="text-text-secondary">Score: {totalScore}</p>
        )}
        <button
          onClick={handleRetake}
          className="mt-8 inline-flex items-center px-6 py-3 border border-brand-blue text-brand-blue font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-all"
        >
          {t("RETAKE_QUIZ")}
        </button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="bg-white rounded-2xl border border-hairline p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-serif font-semibold text-brand-deep">
          {title}
        </h3>
        <span className="text-sm text-text-secondary">
          {currentIndex + 1} {t("QUESTION_OF")} {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-bg-cream rounded-full mb-8">
        <div
          className="h-full bg-brand-blue rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <p className="text-xl font-semibold text-brand-deep mb-6">
        {current.question}
      </p>

      {/* Answers */}
      <div className="space-y-3 mb-8">
        {current.answers.map((answer) => {
          const isSelected = selectedAnswers[currentIndex] === answer.score;
          return (
            <button
              key={answer.id}
              onClick={() => handleSelect(answer.score)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? "border-brand-blue bg-brand-blue/5 text-brand-deep"
                  : "border-hairline hover:border-brand-blue/30 text-text-secondary hover:text-text-primary"
              }`}
            >
              {answer.title}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <div className="text-right">
        <button
          onClick={handleNext}
          disabled={!hasSelected}
          className={`inline-flex items-center px-6 py-3 font-semibold rounded-full transition-all ${
            hasSelected
              ? "bg-brand-blue text-white hover:shadow-glow"
              : "bg-bg-cream text-text-secondary cursor-not-allowed"
          }`}
        >
          {isLastQuestion ? t("SEE_RESULTS") : t("NEXT_QUESTION")} &rarr;
        </button>
      </div>
    </div>
  );
}
