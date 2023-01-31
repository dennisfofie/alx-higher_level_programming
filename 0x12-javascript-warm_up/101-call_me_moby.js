#!/usr/bin/node
exports.callMeMoby = (x, b) => {
	for (let i = 0; i < x; i++)
	{
		b();
	}
}
