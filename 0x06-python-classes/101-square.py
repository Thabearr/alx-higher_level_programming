#!/usr/bin/python3
class Square:
    """Defines a square"""
    def __init__(self, size=0, position=(0, 0)):
        """Initialises the data"""
        self.size = size
        self.position = position

    def area(self):
        """Returns current square area"""
        return self.__size**2

    @property
    def size(self):
        """Getter method"""
        return self.__size

    @size.setter
    def size(self, value):
        """Setter method"""
        self.__size = value
        if type(value) != int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")

    def my_print(self):
        """Prints the square"""
        if self.__size == 0:
            print()
        else:
            for y in range(self.__position[1]):
                print()
            for i in range(self.__size):
                for x in range(self.__position[0]):
                    print(' ', end='')
                for j in range(self.__size):
                    print('#', end='')
                print()

    @property
    def position(self):
        """Getter method"""
        return self.__position

    @position.setter
    def position(self, value):
        """Setter method"""
        if type(value) != tuple or len(value) != 2:
            raise TypeError("position must be a tuple of 2 positive integers")
        if any(type(i) != int for i in value) or any(j < 0 for j in value):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def __str__(self):
        """Same print behaviour as my_print"""
        s = ""
        if not self.__size:
            return s
        for y in range(self.__position[1]):
            s += '\n'
        for i in range(self.__size):
            for x in range(self.__position[0]):
                s += ' '
            for j in range(self.__size):
                s += '#'
            s += '\n'
        return s[: - 1]
