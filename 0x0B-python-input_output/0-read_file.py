#!/usr/bin/python3
"""
read_file - read file utf8 to stdout
"""
def read_file(filename=""):
    with open("filename", mode="r", encoding="utf-8") as f:
        result = f.read()
        print(result)
