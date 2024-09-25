// First way to write it is through Dynamic Programming, which probably is the most used method
// BUT!! it takes O(n) run time

function fib_On(n) {     // On stands for O(n)
	if(n <= 1) {
		return n;
	}
	let n_minus_2 = 0, n_minus_1 = 1;
	let ans;

	for(let i = 1; i < n; i ++) {
		ans = n_minus_1 + n_minus_2;

		n_minus_2 = n_minus_1;
		n_minus_1 = ans;
	}

	return ans;
}

// Second way to do this is through characteristic equation. Since we have Fn = Fn-1 + Fn-2 as recursive relationship, using discrete mathematics we can have:
// for easier writing, we let k = sqrt(5). Fn = 1/k * ((1 + k)/2)^n  -  1/k * ((1 - k)/2)^n
// hehehe, O(1) feels good!

function fib_O1(n) {       // O1 stands for O(1)
	let k = Math.sqrt(5);

	return parseInt( 1/k * Math.pow((1 + k)/2, n) - 1/k * Math.pow((1-k)/2, n) + 0.1);   // adding 0.1 because in the world of float, there might be 4.99999 instead of 5
}

console.log(fib_On(0));
console.log(fib_On(1));
console.log(fib_On(5));
console.log(fib_On(10));

console.log(fib_O1(0));
console.log(fib_O1(1));
console.log(fib_O1(5));
console.log(fib_O1(10));
