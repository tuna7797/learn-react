
// 이름 내보내기 (named export)
export const getRandom = (n) => Math.round(Math.random() * n);

export const getRandomMinMax = (min = 0, max = 100) =>
  getRandom(max - min) + min;