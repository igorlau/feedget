import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../../components/CloseButton';
import { feedbackTypes } from '../../../constants/feedbackTypes';
import { FeedbackType } from '../types';

interface FormHeaderProps {
  selectedFeedbackType: FeedbackType | null;
  resetFeedback: () => void;
}

export const FormHeader = ({
  selectedFeedbackType,
  resetFeedback,
}: FormHeaderProps) => {
  const HeaderForFeedbackType = () => {
    if (!selectedFeedbackType)
      return (
        <header className="flex flex-row items-center">
          <span className="text-xl leading-6">Deixe seu feedback</span>
          <button>
            <CloseButton />
          </button>
        </header>
      );

    const { title, image } = feedbackTypes[selectedFeedbackType];

    return (
      <header className="flex flex-row items-center">
        <button
          type="button"
          onClick={resetFeedback}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <img src={image.src} alt={image.alt} className="w-5 h-5" />
          <span className="text-xl leading-6">{title}</span>
        </div>
        <CloseButton />
      </header>
    );
  };

  return <HeaderForFeedbackType />;
};
