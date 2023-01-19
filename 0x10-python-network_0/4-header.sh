#!/bin/bash
# send a GET request to the URL using curl, and display the body of the response
curl -sX GET -H "X-School-User-Id: 98" "$1"