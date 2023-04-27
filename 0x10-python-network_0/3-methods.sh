#!/bin/bash
# shows allowed methods
curl -sI "$1" | grep Allow | cut -d' ' -f2-
