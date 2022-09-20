#!/usr/bin/python3
import random
import cmath
number = random.randint(-1000, 1000)
st_suffix = "and is less than 6 and not 0"
if number < 0:
    last_digit = abs(number) % 10
else:
    last_digit = number % 10

if last_digit > 5:
    print(f"Last digit of {number} is {last_digit} and is greater than 5")
elif last_digit == 0:
    print(f"Last digit of {number} is {last_digit} and is 0")
elif last_digit < 6 and last_digit != 0:
    print(f"Last digit of {number} is {last_digit} {st_suffix}")
