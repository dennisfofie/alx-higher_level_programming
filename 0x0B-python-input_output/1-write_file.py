#!/usr/bin/python3
"""
write_file - write to a file
"""

def write_file(filename="", text=""):
    if filename:
        with open("filename", mode="a" encoding="utf-8") as f:
            f.write("text")
    else:
        with open("filename", mode="w", encoding="utf-8") as f:
            f.write("text")
