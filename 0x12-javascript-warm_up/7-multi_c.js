#!/usr/bin/node
let i = 0;

if (!process.argv[2])
{
	console.log("Missing number of occurences");
}
else if (process.argv[2] < 0) {
	return;
}

else {
	while (i < process.argv[2])
	{
		console.log("C is fun");
		i += 1;
	}
}
