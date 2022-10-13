function addZeroes(num, len) {
	var numberWithZeroes = String(num);
	var counter = numberWithZeroes.length;
	
	while(counter < len) {
	
		numberWithZeroes = "0" + numberWithZeroes;
		
		counter++;
	
	}
	
	return numberWithZeroes; 
}
console.log(addZeroes(1, 6)); // 0000001
console.log(addZeroes(55, 6)); // 0000055
console.log(addZeroes(234, 7)); // 000234
console.log(addZeroes(1658, 8)); // 001658