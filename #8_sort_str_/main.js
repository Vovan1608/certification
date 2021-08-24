function changeWordsOrder(str) {
  const SPASE = " ";

  return str
    .split(SPASE)
    .sort((a, b) => a.length - b.length)
    .join(SPASE);
}

const str = "Hello world my dear friend";
const res = changeWordsOrder(str);
console.log(res);
