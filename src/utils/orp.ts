export const midIndex = (word: string): number => {
  if (word.length <= 1) return 0;
  return Math.ceil(word.length / 2) - 1;
};
