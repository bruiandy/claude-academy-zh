import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: string;
  title: string;
  options: QuizOption[];
  generalExplanation?: string;
}

export interface QuizWidgetProps {
  quiz?: QuizQuestion;
  id?: string;
  title?: string;
  options?: QuizOption[];
  generalExplanation?: string;
}

export const QuizWidget: React.FC<QuizWidgetProps> = (props) => {
  const data: QuizQuestion = props.quiz || {
    id: props.id || 'quiz',
    title: props.title || '随堂测验',
    options: props.options || [],
    generalExplanation: props.generalExplanation
  };

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedOption = data.options.find(o => o.id === selectedOptionId);

  const handleSubmit = () => {
    if (selectedOptionId) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
  };

  return (
    <div className="my-8 rounded-2xl border border-border bg-surface-1 p-6 shadow-card-ring">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-clay mb-3">
        <HelpCircle className="w-4 h-4" />
        <span>随堂互动测验 (Interactive Quiz)</span>
      </div>

      <h4 className="font-serif text-lg font-medium text-primary mb-4 leading-snug">
        {data.title}
      </h4>

      {/* Options List */}
      <div className="flex flex-col gap-3 mb-5">
        {data.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          let borderStyle = 'border-border bg-surface-0 hover:bg-surface-2';
          
          if (isSubmitted) {
            if (option.isCorrect) {
              borderStyle = 'border-emerald-500/80 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200';
            } else if (isSelected && !option.isCorrect) {
              borderStyle = 'border-rose-500/80 bg-rose-500/10 text-rose-900 dark:text-rose-200';
            } else {
              borderStyle = 'border-border opacity-50 bg-surface-0';
            }
          } else if (isSelected) {
            borderStyle = 'border-brand-clay bg-brand-clay/10 text-primary font-medium';
          }

          return (
            <button
              key={option.id}
              disabled={isSubmitted}
              onClick={() => setSelectedOptionId(option.id)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-left text-sm transition-all ${borderStyle}`}
            >
              <div className="mt-0.5 shrink-0">
                {isSubmitted && option.isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                {isSubmitted && isSelected && !option.isCorrect && <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />}
                {!isSubmitted && (
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-brand-clay bg-brand-clay' : 'border-muted'}`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <span>{option.text}</span>
                {isSubmitted && isSelected && option.explanation && (
                  <p className="mt-2 text-xs text-secondary leading-relaxed border-t border-border/40 pt-2">
                    {option.explanation}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        {!isSubmitted ? (
          <button
            disabled={!selectedOptionId}
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-brand-clay text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xs"
          >
            提交答案
          </button>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="text-sm font-medium flex items-center gap-1.5">
              {selectedOption?.isCorrect ? (
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 回答正确！
                </span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  <XCircle className="w-4 h-4" /> 回答错误，再思考一下。
                </span>
              )}
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-1.5 rounded-lg border border-border text-sm text-secondary hover:text-primary hover:bg-surface-2 transition-all"
            >
              重新测试
            </button>
          </div>
        )}
      </div>

      {/* General Explanation */}
      {isSubmitted && data.generalExplanation && (
        <div className="mt-4 p-4 rounded-xl bg-surface-2 text-xs text-secondary leading-relaxed border border-border">
          <strong className="text-primary font-medium block mb-1">答案解析：</strong>
          {data.generalExplanation}
        </div>
      )}
    </div>
  );
};
