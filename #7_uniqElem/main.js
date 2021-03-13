function uniqueElements(arr) {
  return [...new Set(arr)];
}
var arr = [1, 1, 1, 3, 3, 2, 2, 6, 7, 1, 2, 5];

let res = uniqueElements(arr);
console.log(res);
