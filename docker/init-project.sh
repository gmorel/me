#!/bin/bash

# Init containers
echo "---------------------------------------------"
echo "| > \$ docker-compose up -d --force-recreate |"
echo "---------------------------------------------"
docker-compose up -d --force-recreate


# Install
docker-compose run engine npm install


# Containers
echo "-------------------------"
echo "| > \$ docker-compose ps |"
echo "-------------------------"
docker-compose ps
