function sumArray(arr) {
	let n = 0;

	for (let i = 0; i < arr.length; i++) {
		n = n + arr[i];
	}
	return n;
}

// Exemples de test :
console.log(sumArray([1, 2, 3, 4])); // Résultat attendu : 10
console.log(sumArray([10, -2, 5])); // Résultat attendu : 13
