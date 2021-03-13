function findLongestWord(str) {
  return str
    .split(" ")
    .reduce((cur, next) => (cur.length > next.length ? cur : next));
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
