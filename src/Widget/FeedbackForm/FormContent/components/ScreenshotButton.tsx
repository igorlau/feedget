import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../../../components/Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  setScreenshot,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canva = await html2canvas(document.querySelector('html')!);
    const base64image = canva.toDataURL('image/png');

    setScreenshot(base64image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => setScreenshot(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}>
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera weight="bold" className="w-6 h-6" />
      )}
    </button>
  );
};
