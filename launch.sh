#!/usr/bin/env bash

docker build -f Dockerfile-dev -t bm_lab7 .
docker run --rm -p 8080:8080 -v $(pwd)/src:/usr/src/app/src -v $(pwd)/public:/usr/src/app/public -v :/usr/src/app/node_modules bm_lab7:latest

