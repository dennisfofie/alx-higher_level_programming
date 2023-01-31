#!/usr/bin/node

const args = isNaN(Number(process.argv[2])) ? 1 : Number(process.argv[2]);

const fac = (a) => {
	if (a === 1)
	{
		return 1;
	}
	return a * fac(a-1);
}
console.log(fac(args));
