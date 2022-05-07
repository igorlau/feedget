import tickImageUrl from '../../../assets/tick.svg';
import { CloseButton } from '../../components/CloseButton';

interface FeedbackSuccessProps {
  resetFeedback: () => void;
}

export const FeedbackSuccess = ({ resetFeedback }: FeedbackSuccessProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={tickImageUrl} alt="Imagem de um tick com fundo verde" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={resetFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
