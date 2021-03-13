/* 
Дана строка выражения. Необходимо произвести математические операции друг за другом.
Например дано выражение "1+1*3"
сперва выполняется 1+1=2, потом 2*3=6.
*/

function doMath(eq) {
	// получаем массив из выражения
	let arrEq = [...eq];
	// получаем массив чисел
	let numArr = arrEq.filter(el => !isNaN(parseInt(el))).map(el => Number(el));
	// получаем массив знаков
	let znakArr = arrEq.filter(el => isNaN(parseInt(el)));
	let res = 0;

	for (let i = 0; i < znakArr.length; i++) {
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

const eq = "2+2/2+2";
const res = doMath(eq);
console.log(res);