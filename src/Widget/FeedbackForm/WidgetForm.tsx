import { useState } from 'react';
import { FeedbackType } from './types';
import { FeedbackTypeSelector } from './FeedbackTypeSelector';
import { FormContent } from './FormContent';
import { FormHeader } from './FormHeader';
import { FeedbackSuccess } from './FeedbackSuccess';

export const WidgetForm = () => {
  const [selectedFeedbackType, setSelectedFeedbackType] =
    useState<FeedbackType | null>(null);

  const [feedbackSent, setFeedbackSent] = useState(false);

  const resetFeedback = () => {
    setSelectedFeedbackType(null);
    setFeedbackSent(false);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccess resetFeedback={resetFeedback} />
      ) : (
        <>
          <FormHeader
            selectedFeedbackType={selectedFeedbackType}
            resetFeedback={resetFeedback}
          />

          {!selectedFeedbackType ? (
            <FeedbackTypeSelector
              setSelectedFeedbackType={setSelectedFeedbackType}
            />
          ) : (
            <FormContent feedbackSentCallback={() => setFeedbackSent(true)} />
          )}
        </>
      )}

      <footer className="text-xs text-neutrals-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
