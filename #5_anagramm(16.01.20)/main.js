function anagramm(str_1, str_2) {
  return sortStr(str_1) === sortStr(str_2);
}

function sortStr(string) {
  return string.toLowerCase().split("").sort().join("");
}
const res = anagramm("maria", "maIra");

console.log(res);
