export default function declOfNum(n, array){
	n = Math.abs(n) % 100;
	const n1 = n % 10;
	if (n > 10 && n < 20) { return array[2]; }
	if (n1 > 1 && n1 < 5) { return array[1]; }
	if (n1 === 1) { return array[0]; }
	return array[2];
}