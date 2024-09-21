// using forEach and callback function

let ans = 0;

function sum1(ary){
	ary.forEach(add_to_ans);

	return ans;
}

function add_to_ans(val){
	ans += val;
}

console.log(sum1([1, 5, 3, 2]));

// ----------------------------------------------
// using reduce and callback function

function sum2(ary){
	return ary.reduce(add);
}

function add(a, b){
	return a + b;
}

console.log(sum2([1, 5, 3, 2]));

//------------------------------------------
//------------------------------------------
// sum n without for and while

function sum_n(n){
	return n*(n+1)/2;
}

console.log(sum_n(10));
