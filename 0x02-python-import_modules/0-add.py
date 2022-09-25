#!/usr/bin/python3
from add_0 import add

"""
args:
    a = first arg
    b = second arg

Return:
    addition of a + b
"""
a = 1
b = 2

# calling function add from 0_add.py to sum a and b
total = add(a,b)
print("{} + {} = {}".format(a, b, total))

