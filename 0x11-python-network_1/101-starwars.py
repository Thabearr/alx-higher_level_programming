#!/usr/bin/python3
""" Uses requests module. Prints error code"""
import requests
from sys import argv

if __name__ == "__main__":
    url = "http://swapi.co/api/people/"
    params = {"search": argv[1]}
    response = requests.get(url, params=params)
    d = response.json()
    print("Number of results:", d.get("count"))
    try:
        while True:
            for result in d.get("results"):
                print(result.get("name"))
            if d.get('next'):
                response = requests.get(d.get('next'))
                d = response.json()
            else:
                break
    except ValueError:
        print("Not a valid JSON")
