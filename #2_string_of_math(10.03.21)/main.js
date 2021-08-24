/* 
Дана строка выражения. Необходимо произвести математические операции друг за другом.
Например дано выражение "1+1*3"
сперва выполняется 1+1=2, потом 2*3=6.
*/
const getNumbers = str => str.match(/\d+/g).map(el => Number(el));

const getZnaks = str => str.match(/\+|\/|\*|-/g);

const doMath = (eq) => {
	const numArr = getNumbers(eq);
	const znakArr = getZnaks(eq);

	let res;
	const limit = znakArr.length;

	for (let i = 0; i < limit; i += 1) {
		res = znak(znakArr[i], numArr[0], numArr[1]);
		numArr.shift();
		numArr.shift();
		numArr.unshift(res);
	}

	return res;
}

function znak(znak, a, b) {
	switch (znak) {
		case "+": return a + b;
		case "-": return a - b;
		case "*": return a * b;
		case "/": return a / b;
	}
}

const eq = "22+2/2+5";
const res = doMath(eq);
console.log(res);