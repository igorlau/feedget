import { FeedbackType } from '../types';
import { feedbackTypes } from '../../../constants/feedbackTypes';

interface FeedbackTypeSelectorProps {
  setSelectedFeedbackType: (feedbackType: FeedbackType | null) => void;
}

export const FeedbackTypeSelector = ({
  setSelectedFeedbackType,
}: FeedbackTypeSelectorProps) => {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => (
        <button
          type="button"
          key={key}
          onClick={() => setSelectedFeedbackType(key as FeedbackType)}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none">
          <img
            src={value.image.src}
            alt={value.image.alt}
            className="w-12 h-12"
          />
          <span className="text-xl leading-6">{value.title}</span>
        </button>
      ))}
    </div>
  );
};
