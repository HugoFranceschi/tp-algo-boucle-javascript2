function filterPositiveNumbers(arr) {
	let tableau = [];
	for (let i = 0; i < arr.length; i++) {
		if (0 < arr[i]) {
			tableau.push(arr[i]);
		}
	}
	return tableau;
}

// Exemples de test :
console.log(filterPositiveNumbers([-3, 5, -1, 2])); // Résultat attendu : [5, 2]
console.log(filterPositiveNumbers([-1, -2, -3])); // Résultat attendu : []
