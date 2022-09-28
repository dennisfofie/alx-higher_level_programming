#!/usr/bin/python3
def uniq_add(my_list=[]):
    new_list = []
    total = 0
    for  j in my_list:
        if j in new_list:
            continue
        else:
            new_list.append(j)

    for i in new_list:
        total += i
    return total
