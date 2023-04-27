#!/usr/bin/python3
""" Uses requests module. Prints error code"""
import requests
from sys import argv

if __name__ == "__main__":
    url = "http://swapi.co/api/people/"
    params = {"search": argv[1]}
    response = requests.get(url, params=params)
    try:
        d = response.json()
        print("Number of results:", d.get("count"))
        for result in d.get("results"):
            print(result.get("name"))
    except ValueError:
        print("Not a valid JSON")
