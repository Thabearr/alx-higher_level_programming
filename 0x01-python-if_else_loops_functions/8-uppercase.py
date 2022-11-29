#!/usr/bin/python3
def uppercase(str):
for b in str:
if ord(b) >= ord('a') and ord(b) <= ord('z'):
char = chr(ord(b) - 32)
else:
char = b
print("{:s}".format(char), end="")
print('')
