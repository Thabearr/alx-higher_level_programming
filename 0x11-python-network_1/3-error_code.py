#!/usr/bin/python3
""" Fetches header from url passed as arg & handles errors a bit"""
from urllib import request, parse, error
import sys

if __name__ == "__main__":
    try:
        with request.urlopen(sys.argv[1]) as response:
            print(response.read().decode('utf-8'))
    except error.HTTPError as e:
        print("Error code:", e.code)
