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
    Record<number, { score: number; answerId: string }>
  >({});
  const [revealed, setRevealed] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const current = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasSelected = selectedAnswers[currentIndex] !== undefined;

  function handleSelect(answer: Answer) {
    if (revealed) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: { score: answer.score, answerId: answer.id },
    }));
    setRevealed(true);
  }

  function handleNext() {
    setRevealed(false);
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleRetake() {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setRevealed(false);
    setShowResult(false);
  }

  const totalScore = Object.values(selectedAnswers).reduce(
    (sum, s) => sum + s.score,
    0
  );

  const matchedResult = results.find(
    (r) => totalScore >= r.scoreRange.min && totalScore <= r.scoreRange.max
  );

  // The correct answer has score 0
  const correctAnswer = current?.answers.find((a) => a.score === 0);

  if (showResult) {
    const correctCount = Object.values(selectedAnswers).filter(
      (s) => s.score === 0
    ).length;

    return (
      <div className="bg-white rounded-2xl border border-hairline p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-semibold text-brand-deep mb-2">
            {t("YOUR_RESULT")}
          </h3>
          <p className="text-lg text-text-secondary">
            {correctCount} / {questions.length} {t("CORRECT_ANSWERS")}
          </p>
          {matchedResult && (
            <>
              <p className="text-xl font-semibold text-brand-blue mt-4 mb-2">
                {matchedResult.title}
              </p>
              {matchedResult.description && (
                <div
                  className="prose prose-sm max-w-none text-text-secondary mx-auto"
                  dangerouslySetInnerHTML={{ __html: matchedResult.description }}
                />
              )}
            </>
          )}
        </div>

        {/* Answer review */}
        <div className="border-t border-hairline pt-6 space-y-4">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
            {t("ANSWER_REVIEW")}
          </h4>
          {questions.map((q, qi) => {
            const selected = selectedAnswers[qi];
            const isCorrect = selected?.score === 0;
            const correct = q.answers.find((a) => a.score === 0);
            const chosen = q.answers.find(
              (a) => a.id === selected?.answerId
            );

            return (
              <div
                key={q.id}
                className={`rounded-xl border p-4 ${
                  isCorrect
                    ? "border-green-200 bg-green-50/50"
                    : "border-red-200 bg-red-50/50"
                }`}
              >
                <p className="text-sm font-semibold text-brand-deep mb-2">
                  {qi + 1}. {q.question}
                </p>
                {isCorrect ? (
                  <p className="text-sm text-green-700">
                    ✓ {chosen?.title}
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-red-600">
                      ✗ {chosen?.title}
                    </p>
                    <p className="text-sm text-green-700 mt-1">
                      ✓ {correct?.title}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleRetake}
            className="inline-flex items-center px-6 py-3 border border-brand-blue text-brand-blue font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-all"
          >
            {t("RETAKE_QUIZ")}
          </button>
        </div>
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
          const isSelected =
            selectedAnswers[currentIndex]?.answerId === answer.id;
          const isCorrect = answer.score === 0;

          let style =
            "border-hairline hover:border-brand-blue/30 text-text-secondary hover:text-text-primary";

          if (revealed) {
            if (isCorrect) {
              style =
                "border-green-400 bg-green-50 text-green-800";
            } else if (isSelected && !isCorrect) {
              style =
                "border-red-400 bg-red-50 text-red-800";
            } else {
              style = "border-hairline text-text-secondary/50";
            }
          } else if (isSelected) {
            style =
              "border-brand-blue bg-brand-blue/5 text-brand-deep";
          }

          return (
            <button
              key={answer.id}
              onClick={() => handleSelect(answer)}
              disabled={revealed}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${style} ${
                revealed ? "cursor-default" : ""
              }`}
            >
              <span className="flex items-center gap-3">
                {revealed && isCorrect && (
                  <span className="text-green-600 shrink-0">✓</span>
                )}
                {revealed && isSelected && !isCorrect && (
                  <span className="text-red-500 shrink-0">✗</span>
                )}
                {answer.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback text */}
      {revealed && (
        <p
          className={`text-sm font-medium mb-4 ${
            selectedAnswers[currentIndex]?.score === 0
              ? "text-green-700"
              : "text-red-600"
          }`}
        >
          {selectedAnswers[currentIndex]?.score === 0
            ? t("CORRECT_ANSWER")
            : `${t("INCORRECT_ANSWER")} ${correctAnswer?.title}`}
        </p>
      )}

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
