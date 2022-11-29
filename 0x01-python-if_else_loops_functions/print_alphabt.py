#!/usr/bin/python3
for b in range(ord('a'), ord('z') + 1):
    if b != ord('e') and b != ord('q'):
        print("{:c}".format(b), end="")
