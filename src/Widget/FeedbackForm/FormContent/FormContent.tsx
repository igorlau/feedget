import { useState } from 'react';
import { ScreenshotButton } from './components/ScreenshotButton';

interface FormContentProps {
  feedbackSentCallback: () => void;
}

export const FormContent = ({ feedbackSentCallback }: FormContentProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackContent, setFeedbackContent] = useState<string>('');

  const handleSubmitFeedback = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    console.log({ screenshot, feedbackContent });
    feedbackSentCallback();
  };

  return (
    <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
      <textarea
        value={feedbackContent}
        onChange={event => setFeedbackContent(event.target.value)}
        className="p-2 min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo"
      />
      <div className="flex flex-row gap-2 mt-2">
        <ScreenshotButton
          screenshot={screenshot}
          setScreenshot={setScreenshot}
        />
        <button
          type="submit"
          disabled={feedbackContent.length === 0}
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-500">
          Enviar feedback
        </button>
      </div>
    </form>
  );
};
