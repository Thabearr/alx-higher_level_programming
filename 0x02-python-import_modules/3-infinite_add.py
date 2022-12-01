#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv

num1 = 0
length = len(argv)
for i in range(1, length):
    num1 += int(argv[i])
print('{}'.format(num1))
