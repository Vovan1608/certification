function changeWordsOrder(str) {
  return str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join("");
}

const str = "Hello world my dear friend";
const res = changeWordsOrder(str);
console.log(res);
