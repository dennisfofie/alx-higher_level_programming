#!/bin/bash
# send a request to an URL with curl, and displays the size of the body of the result
curl -sI "$1" | grep -i Content-Length | awk '{print $2}'