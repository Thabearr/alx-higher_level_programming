#!/usr/bin/python3
for b in range(ord('z'), ord('a') - 1, -2):
    print("{:c}{:s}".format(b, chr(b - 33)), end="")
