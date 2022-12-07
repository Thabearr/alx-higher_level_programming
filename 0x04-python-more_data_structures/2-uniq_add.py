#!/usr/bin/python3
def uniq_add(my_list=[]):
    res_list = []
    res = 0
    for item in my_list:
        if item not in res_list:
            res_list.append(item)
    for uniqs in res_list:
        res += uniqs
    return res
