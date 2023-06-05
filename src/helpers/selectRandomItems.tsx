export const selectRandomItems = (
  array: Array<{ en: string; tr: string }>,
  count: number
) => {
  const shuffled = array.sort(() => 0.5 - Math.random()); // Diziyi karıştırın
  return shuffled.slice(0, count); // İstenen sayıda nesneyi alın
};
