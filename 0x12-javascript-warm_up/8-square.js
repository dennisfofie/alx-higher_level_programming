#!/usr/bin/node
const args = process.argv[2];

if (isNaN(Number(args)))
{
	console.log("Missing size");
}

const printSquare = (args) => {
	for (let i = 0 ; i < args; i++)
	{
		console.log("X".repeat(args));
	}
}

printSquare(args);
