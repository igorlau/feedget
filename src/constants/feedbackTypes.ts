
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};