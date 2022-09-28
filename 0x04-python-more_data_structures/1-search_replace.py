#!/usr/bin/python3


def search_replace(my_list, search, replace):

    i = 0

    while my_list and i < len(my_list):
        if my_list[i] == search:
            my_list[i] = replace
        i = i + 1
    return my_list
