#!/usr/bin/python3
"""
read_file - read file utf8 to stdout
"""
def read_file(filename=""):
    with open("UTF8" "r") as f:
        result = f.read()
        print(result)
