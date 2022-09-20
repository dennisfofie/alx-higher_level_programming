#!/usr/bin/python3
letters_without_qe = "abcdefghijklmnopqrstuvwxyz"

for letter in letters_without_qe:
    if letter == "e" or letter == "q":
        continue

    print(letter, end="")
