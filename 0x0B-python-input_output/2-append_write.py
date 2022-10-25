#!/usr/bin/python3
"""
append to file
"""

def append_write(filename="", text=""):
    """appends to file or create"""
    with open(filename, mode='a+', encoding='utf-8') as f:
        return (f.write(text))
