#!/usr/bin/python3
def uppercase(str):
    flag = 0
    for letter in str:
        if (ord(letter) >= 97 and ord(letter) < 122):
            flag = 32
        else:
            flag = 0

        print("{}".format(chr(ord(letter) - flag)), end="")
    print()
