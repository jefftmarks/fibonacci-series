function fibonacci(num) {
  let first = 0;
	let second = 1;
	let current = 0;

	for (let i = 1; i < num; i++) {
		current = first + second;
		first = second;
		second = current;
	}

	if (num === 1) {
		return 1;
	}

	return current;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

	console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution



/*

0, 1, 1, 2, 3, 5, 8

first value plus second value equals current value

let first = 0
let second = 1
let current

current will equal first plus second

then set first to equal second
second to equal current

*/