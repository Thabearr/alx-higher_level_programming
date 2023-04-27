#!/bin/bash
# Curls request and display bytes received
curl -so /dev/null -w '%{size_download}\n' "$1"
