#!/usr/bin/python3

def square_matrix_simple(matrix=[]):
    if matrix:
        return [[i**2 for i in x] for x in matrix]
