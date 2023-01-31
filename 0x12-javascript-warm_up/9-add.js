#!/usr/bin/node
const a = process.argv[2];
const b = process.argv[3];

function add(a, b) {
	if (!a || (!a && !b)){
		console.log("NaN");
	}
	return (parseInt(a)+parseInt(b));

}

const result = add(a,b);
console.log(result);
