#!/bin/bash

cd /home/ubuntu/app

# Kill old app
pkill node || true

# Start app
nohup node app.js > app.log 2>&1 &
