#!/bin/bash
# curls just response code
curl -so /dev/null -w "%{http_code}" "$1"
