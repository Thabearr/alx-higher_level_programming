#!/bin/bash
# curls post request with 2 params
curl -s -X POST -d "email=hr@holbertonschool.com&subject=I will always be here for PLD" "$1"
