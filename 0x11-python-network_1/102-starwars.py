#!/usr/bin/python3
"""Downloads SW user and film info"""
import requests
from sys import argv

if __name__ == "__main__":
    try:
        films = {
         'https://swapi.co/api/films/2/': 'The Empire Strikes Back',
         'https://swapi.co/api/films/3/': 'Return of the Jedi',
         'https://swapi.co/api/films/7/': 'The Force Awakens',
         'https://swapi.co/api/films/5/': 'Attack of the Clones',
         'https://swapi.co/api/films/6/': 'Revenge of the Sith',
         'https://swapi.co/api/films/4/': 'The Phantom Menace',
         'https://swapi.co/api/films/1/': 'A New Hope'
         }
        url = "http://swapi.co/api/people/"
        params = {"search": argv[1]}
        response = requests.get(url, params=params)
        d = response.json()
        print("Number of results:", d.get("count"))
        while True:
            for result in d.get("results"):
                print(result.get("name"))
                for film in result.get('films'):
                    print('\t{}'.format(films.get(film)))
            if d.get('next'):
                response = requests.get(d.get('next'))
                d = response.json()
            else:
                break
    except ValueError:
        print("Not a valid JSON")
    except Exception:
        pass
